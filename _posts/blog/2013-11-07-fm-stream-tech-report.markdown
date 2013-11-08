---
layout: post
date: 2013-11-07 17:00:00 UTC
title: "FM Stream Tech Report"
categories: blog
excerpt: "We have been working in partnership with Sapo, IdMind and André Gonçalves of ADDAC System on a 6U rack solution to broadcast radio signals to the internet. The concept was to have a unit that could be easily installed by non tech people, and placed, anywhere on the world, getting local radios easily broadcasting to the internet."
thumbnail: /assets/thumbs/2013-11-07-fm-stream-tech-report-1.jpg
frontimage: /assets/images/2013-11-07-fm-stream-tech-report-1.jpg
---

<i>AKA a beautiful, low cost, carrier grade rack of FM tuners, IP/Internet encoders and broadcasters, using nothing but RaspberryPis, Arduinos, clever electronics, neat mechanics, a shiny aluminium case and lots of passion.</i>

<a href="http://www.sapo.pt">SAPO</a>, the biggest Internet portal in Portugal, needed a robust system to tune FM radios in countries like Angola, Cabo Verde, Mozambique and East Timor, where classic broadcast stations are still very popular and in strong demand, even if you're using the Web. So they came to Artica for help.

Since then, we have been working in partnership with SAPO, <a href="http://www.idmind.pt/">IdMind</a> and André Gonçalves from <a href="http://www.addacsystem.com/">ADDAC System</a> on a 6U rack solution to broadcast radio signals to the internet. The concept was to have a unit that could be easily installed by non tech people, and placed anywhere on the world to get their local radios automatically broadcasting to the internet. To get it working all you need is 3 cords: a standard 220v power supply cable, an ethernet cable connecting the unit to the internet and a BNC cable connected to a radio antenna.

<img src="/assets/images/2013-11-07-fm-stream-tech-report-1.jpg"/>

The rack is composed of 18 hot-swappable modules. 18 for radio signal streaming and 2 fixed for power management.

Each radio module has a <a href="http://www.raspberrypi.org/">Raspberry Pi (Revision b)</a> and an <a href="http://arduino.cc/en/Main/ArduinoBoardNano">Arduino Nano AtMega 328</a>. The Arduino is powered at 3.3V through the Raspberry Pi and communicates with it via GPIO serial port.

<img src="/assets/images/2013-11-07-fm-stream-tech-report-2.jpg"/>

Each module has a <a href="http://www.silabs.com/products/audiovideo/fmreceivers/Pages/si470405.aspx">Silicon Labs Si4705</a> FM receiver chip, controlled by the Arduino via i2c. We chose this chip for the RDS, allowing to retrieve meta-data on the tuned radio and also for being factory ready to connect to an external antenna.

<img src="/assets/images/2013-11-07-fm-stream-tech-report-3.jpg"/>

The Arduino library to work with these radio chips will soon be Open Sourced. We have a couple breakout boards of the chip leftover, if anyone is interested in getting their hands in one, feel free to <a href="http://artica.cc/contacts/">get in touch</a>.

To allow the Raspberry Pi to capture the audio from the radio signal we designed a circuit, in partnership with André Gonçalves, for the <a href="http://www.ti.com/product/pcm2900&lpos=Middle_Container&lid=Alternative_Devices">Texas Intruments PCM2900C USB Audio Capture</a> chip.

LEDs in the front panel indicate if the module is powered and can also be re-assigned by software for debug or display software generate information.

<img src="/assets/images/2013-11-07-fm-stream-tech-report-4.jpg"/>

The frontpanel was designed by André Gonçalves. The design of the modules allows for hot swapping, which was not a trivial matter. IdMind played a crucial role finding the best components for this, we ended up using the fct electronics din connectors. The connectors required to transfer radio signal (requiring shielding and isolation), network (8 pins RJ45), an analogue pin for the power module to notify the other modules that it's shutting them down, and another analogue pin to indicate which slot each module is connected to. Each slot has a unique voltage divider to the 5V connection, allowing the Arduino to read distinct voltage and thus know which module itself should be and enabling the Raspberry Pi to have an unique IP address depending on the slot to which it's connected.

<img src="/assets/images/2013-11-07-fm-stream-tech-report-5.jpg"/>

The 6U rack module has a general radio signal amplifier and antenna signal distributor connected to each of the modules.

The power supply unit can last up to half an hour operating without current, it is controlled by an ethernet Arduino with a TCP server.

<img src="/assets/images/2013-11-07-fm-stream-tech-report-6.jpg"/>

The front panel has three different LEDs, one for 220V power indicator, the other for the battery charger indicator and one for the battery power indicator. The power unit also has two buzzer sounds, one to warn when there is no AC power and the other to indicate a shutdown signal was sent. When the voltage of the battery goes below a certain limit, power is cut off to all the modules.

The Raspberry Pi that handles the broadcast is always connected to the network, sharing values from the power unit. The broadcast is made using <a href="http://www.icecast.org/">icecast</a> software.

The first slot is always the icecast and monitoring module. In the backpanel each slot has an RJ45 connection to a 24 port Gigabit TP-Link switch, the switch is then connected to a wireless TP-Link router configured with <a href="http://www.dd-wrt.com">DD-WRT</a>. The switch operates on 220V. However the router operates on 12V, same as the radio signal amplifier, these two only shutdown when the Arduino power module decides to shut them down.

<img src="/assets/images/2013-11-07-fm-stream-tech-report-7.jpg"/>

Deeper technical details follow.

<b>Router</b>

The router is a TP-Link TL-WR740N with OpenWRT configured to connect to the OpenVPN server as soon as he gets a gateway through the WAN interface. When the connection is established, it forwards ports 22 and 8000 to the main radio module with IP 192.168.10.1 so we can access the module which relays the remaining 17 modules and enables it’s own audio stream. Port 8000 is assigned to Icecast, port 22 is reserved for SSH management access.
In a similar way, the VPN has access to port 5000 for router configurations via HTTP and port 5001 for SSH access. This access allows us to retrieve the machine’s MAC Address. 

<b>Encoding Modules</b>

The encoding modules use Raspberry’s native Debian with some key modifications to improve system performance, the more important one being the root partition of the SD becoming read-only. All these machine configurations are stored in the FAT partition and only the tuned frequency is recorded on file, no other writing is performed on the card.

All the modules are identical, the only difference between them is the service configuration module, which is assigned according to the position where the module is connected in the rack. In the first position of the rack the module assumes the server functionality, starting icecast to relay the other 17 modules and making it’s own stream available using darkice. The other 17 modules use icecast only to make their stream available using the same program, darkice.

To know the position of the module we use a script that talks with the arduino.

/boot/radio/position file:

<pre class="prettyprint">
#!/bin/bash

response=$(/boot/radio/command p)

if [ -z $response ]
then
    echo -n 0
else
    echo -n $response | awk -F ";" '{printf "%s",$2}'
fi

exit 0
</pre>

/boot/radio/command file:

<pre class="prettyprint">
#!/bin/bash

modem="/dev/ttyAMA0"

stty -F "$modem" 9600 -echo -icanon min 0 time 1
exec 5&lt;&gt;"$modem"

echo -n $(cat &lt;&5 & echo $1 &gt;&5)

wait $!

exit 0
</pre>

This script establishes an stty connection and returns a number between 1 and 18 which corresponds to the current rack position.

When the module starts the /etc/network/if-pre-up.d/array script is started, which, with the current position, configures the module’s IP and hostname.

/etc/network/if-pre-up.d/array file:

<pre class="prettyprint">
#!/bin/bash

POSITION=$(/usr/bin/position)
SUBNET="10"
PREIP="192.168.${SUBNET}."
GATEWAY="${PREIP}254"
HOSTNAME="radio${POSITION}"

IP="${PREIP}${POSITION}"

hostname $HOSTNAME
echo $HOSTNAME &gt; /boot/radio/hostname
sed -i "s/127.0.1.1.*\$/127.0.1.1\t${HOSTNAME}/g" /boot/radio/hosts

ifconfig eth0 $IP netmask 255.255.255.0

route add default gw $GATEWAY

echo "nameserver $GATEWAY" &gt; /boot/radio/resolv.conf

exit 0
</pre>

In the same way we differentiate the configuration for icecast, darkice and php. Php is responsible for making available via http the commands that allow the system to change the radio frequency and the machine status.

<b>Server</b>

The server is composed of two important programs. OpenVPN, which receives the connections from the radio machines. And icecast, which relays the icecast from it’s own machine.

When a connection is established, the /etc/ppp/ip-up.d /0001icecast script is invoked to establish an SSH connection to the assigned IP with the “ifconfig eth0 | head -1 | awk '/HWaddr/ {print $5}'” command to be able to obtain the radio machine router’s MAC Address. This MAC Address is stored in a file to indicate the machine is operational and the rebuild script is invoked to rebuild the icecast configuration file.

/etc/ppp/ip-up.d/0001icecast file:

<pre class="prettyprint">
#!/bin/bash

ip=$5

[ -z $ip ] && exit 1

path=/etc/icecast2

echo -e "$(date +"%Y-%m-%d %T")\t$ip\t$6\tCONNECTED" &gt;&gt; $path/pptp.log

devices=$path/devices
auth=$path/authorized_devices
key=$path/id_device_rsa
mac=$(ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i $key -p 5001 root@$ip ifconfig eth0 | head -1 | awk '/HWaddr/ {print $5}')

[ -f $devices ] && sed -i "/$ip/d" $devices

if [ ! -z $mac ]
then
    [ -f $devices ] && sed -i "/$mac/d" $devices

    echo -e "$mac\t$ip" &gt;&gt; $devices
fi

$path/rebuild

exit 0
</pre>

/etc/icecast2/devices file:

<pre class="prettyprint">
A0:F3:C1:97:29:E5    192.168.20.1
</pre>

The rebuild goes through the list of active devices and verifies if they are really authorized to relay and which mount point is associated. In the end it adds the header, creates the mount points list for each radio machine, writes everything in the icecast2.xml configuration file and calls a “etc/init.d/icecast2 reload” to update the configurations without restarting the service.

/etc/icecast2/authorized_devices file:

<pre class="prettyprint">
#&lt;MAC Address&gt;        &lt;Mount&gt;        &lt;Modules&gt;
A0:F3:C1:97:29:E5    AO        18
F8:1A:67:3F:D0:57    PT        18
</pre>

/etc/icecast2/header file:

<pre class="prettyprint">
&lt;limits&gt;
&lt;clients&gt;2500&lt;/clients&gt;
&lt;sources&gt;2500&lt;/sources&gt;
&lt;header-timeout&gt;15&lt;/header-timeout&gt;
&lt;source-timeout&gt;10&lt;/source-timeout&gt;
&lt;/limits&gt;
&lt;authentication&gt;
&lt;source-password&gt;sapo&lt;/source-password&gt;
&lt;relay-password&gt;sapo&lt;/relay-password&gt;
&lt;admin-user&gt;support&lt;/admin-user&gt;
&lt;admin-password&gt;sapo&lt;/admin-password&gt;
&lt;/authentication&gt;
&lt;hostname&gt;localhost&lt;/hostname&gt;
&lt;listen-socket&gt;
&lt;port&gt;80&lt;/port&gt;
&lt;/listen-socket&gt;
&lt;fileserve&gt;0&lt;/fileserve&gt;
&lt;paths&gt;
&lt;basedir&gt;/usr/share/icecast2&lt;/basedir&gt;
&lt;logdir&gt;/dev&lt;/logdir&gt;
&lt;webroot&gt;/usr/share/icecast2/web&lt;/webroot&gt;
&lt;adminroot&gt;/usr/share/icecast2/admin&lt;/adminroot&gt;
&lt;/paths&gt;
&lt;logging&gt;
&lt;accesslog&gt;null&lt;/accesslog&gt;
&lt;errorlog&gt;null&lt;/errorlog&gt;
&lt;loglevel&gt;0&lt;/loglevel&gt;
&lt;logsize&gt;0&lt;/logsize&gt;
&lt;/logging&gt;
&lt;security&gt;
&lt;chroot&gt;0&lt;/chroot&gt;
&lt;changeowner&gt;
&lt;user&gt;nobody&lt;/user&gt;
&lt;group&gt;nogroup&lt;/group&gt;
&lt;/changeowner&gt;
&lt;/security&gt;
</pre>

/etc/icecast2/rebuild file:

<pre class="prettyprint">
#!/bin/bash

config=/etc/icecast2/icecast.xml
devices=/etc/icecast2/devices
auth=/etc/icecast2/authorized_devices

echo "&lt;icecast&gt;" &gt; $config

cat /etc/icecast2/header &gt;&gt; $config

while read devices_line
do
    mac=$(echo -n $devices_line | awk '{print $1}')
    ip=$(echo -n $devices_line | awk '{print $2}')

    auth_line=$(cat $auth | grep $mac)

    mount=$(echo -n $auth_line | awk '{print $2}')
    modules=$(echo -n $auth_line | awk '{print $3}')

    [ -z $modules ] && continue

    for (( i = 1 ; i &lt;= $modules ; i++ ))
    do
        device="radio$i.mp3"

        echo "&lt;relay&gt;&lt;server&gt;$ip&lt;/server&gt;&lt;port&gt;8000&lt;/port&gt;&lt;mount&gt;/$device&lt;/mount&gt;&lt;local-mount&gt;/$mount/$device&lt;/local-mount&gt;&lt;/relay&gt;" &gt;&gt; $config
    done
done &lt; $devices

echo "&lt;/icecast&gt;" &gt;&gt; $config

/etc/init.d/icecast2 reload

exit 0
</pre>

In the end, when a machine connection ends, the “/etc/ppp/ip-down.d/0001icecast” script is called to do the ip-up inverse process and redo the configuration.

The server has the same RSA key than the client so that the SSH connection can be made silently.

Listen to <a href="http://radios.vpn.sapo.pt/AO/radio1.mp3">one of the streams here</a> <i class="icon-music"></i> (live from a popular FM radio in <a href="http://en.wikipedia.org/wiki/Luanda">Luanda, Angola</a>, captured and encoded from one of SAPO's racks of FM Streamers in the country).
