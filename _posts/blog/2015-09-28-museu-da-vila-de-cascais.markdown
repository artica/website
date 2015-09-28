---
layout: post
date: 2015-09-28 14:00:00 UTC
title: "Illumination of Museu da Vila de Cascais"
categories: blog
excerpt: "In July of this year that Museu da Vila de Cascais got its premiere. Artica was responsible for the design and implementation of the entire illumination system. "
thumbnail: /assets/thumbs/2015-09-28-museu-da-vila-de-cascais-08.jpg
frontimage: /assets/images/2015-09-28-museu-da-vila-de-cascais-08.jpg
---

In July of this year that Museu da Vila de Cascais got its premiere. Artica was responsible for the design and implementation of the entire illumination system. 

We wanted to create something very unique for the museum, something that could drive the engagement between the visitors and the museum. Interaction was based in color smooth changes while visitors approach each of the vitrines. 

{% include youtube.html id="H4fHMpMO588" %}

Media clippings: [1][1] [2][2] [3][3] [4][4] [5][5]

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-01.jpg)

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-02.jpg)

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-03.jpg)

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-04.jpg)

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-05.jpg)

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-06.jpg)

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-07.jpg)

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-08.jpg)

<b>Technical report:</b>

After ordering a heapload of Arduinos and addressable LED strips, our next step was to co-ordinate with the responsible architect to select lamp models for the top ceiling lamps and volumetric levels for the text light projectors.

We had to plan out the entire electrical and network layout of each component and co-ordinate with the electrical team on site to prepare the building for the required cables.

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-19.jpg)

The Mains power distribution used was the following:

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-15.png)
 
Every night, the museum lights (Lights + Differential Switch) could be turned off, keeping the router always on, only by turning off the specific switches on the Main Switch board.

The Network scheme implemented was the following:

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-16.png)

As you can see all the system are ethernet based, and the control is centralized on the server. Nevertheless on each Showcase the firmware have an fail system operation. If for some reason the Ethernet communication fails it will try to reconnect, but it will work autonomous, with a predefined configuration, keeping the sensing capability and changing the environment light.

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-17.png)

There are three different Arduino based setups in the museum, in each one we had to take some precautions on the initial development, for the specific application. This issues will be detailed next.

<b>Ceiling enviroment and text lights</b>

These control the environment lights and the wall text inscriptions. The lights chosen were [Megaman™ ref ER1708d coolwhite][7] these were the best lights we have found from several tests made and the Museum Architect loved it. The light feels like a true halogen lamp and had a beautiful design and brightness.

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-18.png)

The scheme we decided to implement was to have an [Arduino Ethernet][8] serving as a master broadcasting thru a digital pin to three [Motoruinos][9] boards. Each one is coupled directly to the [power shield from Sparkfun][10] controlling 6 PWM Lines at 12V. Having that way 18 independent controlled lines for the ceiling lights for each DIMM Control.

All power supplies were PC ATX type. Plugged directly to the PowerShield, the power shield has a diode to the Vin, supplying the Arduino with the necessary voltage. The first hacking made was, on the ATX PSU, cutting the 5V wires and connecting them to the 12V bus so that we had 6 PWM 12V channels on the Power Shield. The Power Shield by default have 3 PWM at 5V and 3 PWM at 12V.

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-09.jpg)

We also had to add a flyback 30V 1Amp schottky diode in each output (you can use any fast recovery diode as long as it support the double of the voltage). Sparkfun should supply them on the board, but unfortunately they don’t.

The major issue, or the more delicated we had to deal with was one we had during tests, we detected some “cross talk” on the Power Shield itself. In some situations, the PWM of one channel was noticed on the side channel. It was solved changing the PWM frequency so that it was not possible to notice the interference on the different channels, since they work at totally different frequencies.

Initially we also thought using I2C/TWI protocol between the three Motoruinos and the Ethernet master, but, after the crosstalk problem we decided to not take any risk and change to digital output pin broadcasting with SoftwareSerial. The drive of a digital pin is much stronger than an open collector scheme with two 10k pull-up resistors.

We tested at full charge 90% Duty Cycle (Situation where the MOSFET heat most, because it still have to pass the resistive zone) for a complete day and all the Mosfet were only a little warm. Even though we placed some heatsink only on the ones we felt a little warmer. 

The final question have to do with the PWM minimum value. On the datasheet of the lamp we have a minimum dimming value of 10%. We’ve notice that, at this level of dimming it was a little more tricky to have the same light intensity, with different PWM. This were adjusted by software. 

<b>Technical Showcase Area</b>

The setup used here is very similar to the used above. We also changed the ATC PSU for the 12V supply, applied the schottky diodes on the output and changed the PWM frequencies to reduce the Power Shield crosstalk effect. The major difference is that we use the Power shield directly coupled into the Arduino Ethernet Shield. This option brings a problem. The last 2 PWM channels cannot be used, since the Arduino Ethernet use them as SPI bus with the Ethernet Chip. The hacking was easy, we cut the shield pins on the last two PWM pins (IO10 and IO11), that way it will not interfere with anything.

In the showcase we only need 4 PWM outputs: 3PWM for [RGB 12V LED stripe][11] and 1PWM for the spotlight projectors.

An Adjustable box was developed to acomodate and adjust the [PIR sensor][12] a 100uF cap. The box was placed on the footer and directly connected using a CAT5e cable to the Arduino digital input.

<b>Crown Molding Area</b>

All the electronics would be placed as close as possible from the 2m [Addressable LED Stripes][13]. This had to be supplied each 1m. We use an industrial 5V power supply for each 4m. This power supply also feed the Arduino Mega, with the ethernet shield thru the Ledstripe. The Arduino Mega had to be used since the maximum crown molding length was about 10m, it means that the led stripe have 144 Leds per meter with 24bits resolution, so if you have 10m you will need ~4k of RAM minimum to address all the stripe. It was impossible with the Arduino Ethernet, and Mega have 8k of SRAM. The Mega with the ethernet option was the best solution.

The electric setup implemented was to add a [Power Supply][15] each 4m and bypass the 5V supply each 1m using an external cable. The Arduino Mega is connected on one end of the stripe on the Data Out, 5V and GND. An Important issue is a 470ohm 1/4W resistor between the Arduino and the Led Stripe must be added to protect the Ledstripe. All the stripe length is then daisy chained with Datalink, 5V and GND until the end.

We were quite impressed with the resolution and speed of update of the stripe. It is quite amazing to see it working and the effect was brilliant.

The only cables we had to pass into the Crown Molding, was a Power Mains Cable (220V) and an Cat5e Ethernet Cable. The Power Supply plus the Arduino Mega with the ethernet shield would be placed inside the Crown Molding.

By the way, a mention must be made to the [Wago Lever Nuts][14], since these little guys speed up the work and are very easy to work with.

Other things worth noting include the design and cnc milling of the protection boxes for the proximity sensors. Whenever a person approaches the showcase, a signal is sent to an Arduino.

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-14.jpg)

We also had to prepare all the small projector that light up the contents of the showcases, secure them to metal structures, weld their electric connections and encase them in custom protective casings that narrow their focus points. We used our 3D printers for those casings.

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-13.jpg)

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-12.jpg)

We prepared a rack cabinet holding the control units, server, debug vga monitor and router that powers the entire system and later transported it to the back stage of the museum.

The control system contains different components working together to create an interactive environment which is consistent through the whole museum.

Each showcase with objects being displayed has custom lighting (RGB colors) and they all react to visitors approaching by changing into custom colors. They also have light beams aimed at the objects on display, pulling the viewer's attention to those areas.

All of the ceiling lights can change the power dynamically, dimming each section up or down to highlight the desired areas.

The environment color of each room is also customizable (RGB colors). Making subtle adjustments to the room and showcase colors together we create a "breathing" effect, making it look as if the room is alive.

Even though all the modules can work independently, they are also be controlled by a central server. This server makes sure all the elements are in sync so the environment is consistent throughout the whole space. It can also be used to communicate with other parts of the installation, making the system even more dynamic.

There is also a web interface that can be used to control all of the elements directly, overriding the normal programmed behaviour.

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-10.png)

To provide usage statistics of the space we installed 4 Axis IP cameras, each one covering a room of the museum. Using the inputs of these cameras, computer vision algorythms and custom nodes for the [Bonsai][6] open source tool we created a software to render realtime heatmaps of the entire museum, keep track of the number of blobs in each area and count entrances and exits.

![](/assets/images/2015-09-28-museu-da-vila-de-cascais-11.png)

[1]: http://www.cm-cascais.pt/video/inauguracao-do-museu-da-vila-pacos-do-concelho-julho-2015
[2]: http://sicnoticias.sapo.pt/cultura/2015-07-21-Abre-Museu-da-Vila-em-Cascais
[3]: http://www.cyberjornal.net/index.php?option=com_content&view=article&id=1709:museu-da-vila-abre-em-cascais&catid=78:historia-e-patrimonio&Itemid=30
[4]: https://pampatrimonioartesemuseus.wordpress.com/2015/07/21/abre-museu-da-vila-em-cascais
[5]: http://canelaehortela.com/cascais-ganha-museu-da-vila/
[6]: https://bitbucket.org/horizongir/bonsai
[7]: http://www.megaman.cc/products/led/led-reflector/ER1708d-50H36D/?voltage=12v
[8]: https://www.arduino.cc/en/Main/ArduinoBoardEthernet
[9]: http://www.guibot.pt/motoruino/
[10]: https://www.sparkfun.com/products/10618
[11]: http://www.mauser.pt/catalog/product_info.php?cPath=735_751_1371&products_id=69780
[12]: http://pt.farnell.com/panasonic-electric-works/amn31111/sensor-motion-5m-100-82-black/dp/1373710
[13]: http://www.inmotion.pt/en/adafruit/1188-adafruit-neopixel-digital-rgb-led-strip-144-led-1m-black.html
[14]: http://toolguyd.com/wago-lever-nuts/
[15]: http://www.mauser.pt/catalog/product_info.php?cPath=23_723&products_id=70902