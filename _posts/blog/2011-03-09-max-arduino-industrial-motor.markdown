---
layout: post
date: 2011-03-09 20:33:36 UTC
title: "Max + Arduino + Industrial Motor"
categories: blog
excerpt: "We had a request to link MAXMSP to an industrial motor for an artistic installation witch we will speak about at another time."
longexcerpt: "We had a request to link MAXMSP to an industrial motor for an artistic installation witch we will speak about at another time.This motor is a true beast, and since we have never worked with such a thing we decided to ask for help to our electronics guru David Palma."
thumbnail: /assets/thumbs/2011-03-09-max-arduino-industrial-motor-1.jpg
frontimage: /assets/images/2011-03-09-max-arduino-industrial-motor-1.jpg
---

We had a request to link MAXMSP to an industrial motor for an artistic installation witch we will speak about at another time.

This motor is a true beast, and since we have never worked with such a thing we decided to ask for help to our electronics guru David Palma.

<a href="http://www.flickr.com/photos/guibot/5512380111/" title="MAXMSP - ARDUINO - INDUSTRIAL MOTOR by guibot, on Flickr">![](/assets/images/2011-03-09-max-arduino-industrial-motor-1.jpg)</a>

<a href="http://www.flickr.com/photos/guibot/5512377731/" title="MAXMSP - ARDUINO - INDUSTRIAL MOTOR by guibot, on Flickr">![](/assets/images/2011-03-09-max-arduino-industrial-motor-2.jpg)</a>

The motor controller:
<a href="http://www.flickr.com/photos/guibot/5512971538/" title="MAXMSP - ARDUINO - INDUSTRIAL MOTOR by guibot, on Flickr">![](/assets/images/2011-03-09-max-arduino-industrial-motor-3.jpg)</a>

David developed an electronic circuit to simulate a PWM analog output from 0 to 10v (originally it gives 0 to 5v), and another circuit to switch motors direction, both circuits were assembled on a shield and connected to the motor controller.

The first circuit is a transducer:

<a href="http://www.flickr.com/photos/guibot/5513091482/" title="TRANSDUCER by guibot, on Flickr">![](/assets/images/2011-03-09-max-arduino-industrial-motor-4.jpg)</a>

And this is the switch circuit that tell to the motor controller wich direction the motor will spin:

<a href="http://www.flickr.com/photos/guibot/5513091552/" title="PNP by guibot, on Flickr">![](/assets/images/2011-03-09-max-arduino-industrial-motor-5.jpg)</a>  

Then he builded an Arduino shield:

 <a href="http://www.flickr.com/photos/guibot/5512969102/" title="MAXMSP - ARDUINO - INDUSTRIAL MOTOR by guibot, on Flickr">![](/assets/images/2011-03-09-max-arduino-industrial-motor-6.jpg)</a>

And the final part was the Max patch that send the direction states and the PWM values to the Arduino:

<a href="http://www.flickr.com/photos/guibot/5512967786/" title="MAXMSP - ARDUINO - INDUSTRIAL MOTOR by guibot, on Flickr">![](/assets/images/2011-03-09-max-arduino-industrial-motor-7.jpg)</a>

And this is the result:
<div class="video-container"><iframe src="http://player.vimeo.com/video/20843914" frameborder="0" allowfullscreen></iframe></div><p><a href="http://vimeo.com/20843914">MAXMSP - ARDUINO - INDUSTRIAL MOTOR</a> from <a href="http://vimeo.com/articacc">artica</a> on <a href="http://vimeo.com">Vimeo</a>.</p>

**<a href="http://artica.cc/filez/SOURCES.zip">And last but not the least all the source codes can be downloaded here</a>**


