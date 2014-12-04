---
layout: post
date: 2014-12-03 10:30:00 UTC
title: "DMX HMI Controller"
categories: blog
excerpt: Our friends from the Almada Theater asked us to help them out with a lost DMX HMI controller for their new play. 

thumbnail: /assets/thumbs/2014-12-03-dmx-almada.JPG
frontimage: /assets/images/2014-12-03-dmx-almada-1.JPG

---

Our friends from the Almada Theater asked us to help them out with a lost DMX HMI controller for their new play

They had lost the DMX HMI Controller but still had the HMI Actuator with them, so we decided to develop a new controller from scratch using one of the Arduino’s we had lying around.

The HMI Actuator acts as a mechanical lens aperture control. As we started “hacking” the device we discovered a Maxon DC 12V 4090rpm Motor inside acting as an actuator and a classic potentiometer for the position feedback. It also had a Limit Switch to turn off the Motor if we wanted to change the aperture manually with a specific knob. The schematic is as follows:

<img class="postimage" src="/assets/images/2014-12-03-dmx-almada-5.JPG"/>

So we used our well known Motoruino (<a href="http://www.guibot.pt/motoruino/">http://www.guibot.pt/motoruino/</a>) with a DMX Shield, bought at <a href="http://www.maxpierson.me/2009/04/29/arduino-dmx-512-io-shield/">http://www.maxpierson.me/2009/04/29/arduino-dmx-512-io-shield/</a> and placed it inside a box.


<img class="postimage" src="/assets/images/2014-12-03-dmx-almada-1.JPG"/>

<img class="postimage" src="/assets/images/2014-12-03-dmx-almada-6.JPG"/>

The Firmware development was made according to the following steps:
1. A PID Controller (<a href="https://www.udacity.com/course/viewer#!/c-cs373/l-48743150/e-48728346/m-48271914">https://www.udacity.com/course/viewer#!/c-cs373/l-48743150/e-48728346/m-48271914</a>) to control the Motor with PWM receiving the ADC from the pontentiometer feedback

2. A DMX Library from <a href="http://sourceforge.net/u/dvandermeeren/profile/">dvandermeeren</a> (http://sourceforge.net/p/dmxlibraryforar/wiki/Home/)

3. Info feedback from the a RGB Led (Green rotating Right, Blue rotating left and Red for no DMX)


Behind the scenes, the major problems we found during the development were the following:

- PID Values (Proportional, Derivative and Integration Values):
We found somehow difficult to calibrate the values. Also if we increase the Integration value, as the actuator in the limits acts as an elastic, it adds cumulative errors to the value. In the end, the best configuration was only as a proportional controller.

PWM Change (Timer 1 Values):
This is to be applied in a Theater, so you cannot hear any sound. The PWM of the Arduino is typically 490Hz which is somewhat noisy. 
We had to change the frequency of the timer 1 (9 and 10 pins) to 31kHz (http://playground.arduino.cc/Code/PwmFrequency). 
But by changing the timer we were not able to use the software serial library for debug, increasing the difficulty. (The Hardware Serial was being used for the DMX). We also tried to change other timers and related PWM Pins, but the other timers changed the Millis and Metro function, and Hardware Serial.

Electrostatic Influence:
One of the most difficult bug to find was the following, if we hadn’t the DMX Connector plugged in, the Arduino was receiving wrong values from the serial input (from the RS485 chip) even with the terminator connected. We’ve found out that it was influenced by our own hand with static (see video). This was only solved placing the electronics inside a metal box, and the metal connected to ground pin.

<div class="video-container"><iframe src="//www.youtube.com/embed/RQvjNc94C6w" frameborder="0" allowfullscreen></iframe></div>

Code Available at
https://bitbucket.org/artica/dmx_hmi

By using this project you can control any DC Motor with a coupled Potentiometer for position feedback using classic DMX Light control.

<img class="postimage" src="/assets/images/2014-12-03-dmx-almada-2.JPG"/>

<img class="postimage" src="/assets/images/2014-12-03-dmx-almada-3.JPG"/>

<img class="postimage" src="/assets/images/2014-12-03-dmx-almada-4.JPG"/>

<div class="video-container"><iframe src="//www.youtube.com/embed/O2DLlmklqUY" frameborder="0" allowfullscreen></iframe></div>