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

<a href="http://www.flickr.com/photos/guibot/5512380111/">![](/assets/images/2011-03-09-max-arduino-industrial-motor-1.jpg)</a>

<a href="http://www.flickr.com/photos/guibot/5512377731/">![](/assets/images/2011-03-09-max-arduino-industrial-motor-2.jpg)</a>

The motor controller:
<a href="http://www.flickr.com/photos/guibot/5512971538/">![](/assets/images/2011-03-09-max-arduino-industrial-motor-3.jpg)</a>

David developed an electronic circuit to simulate a PWM analog output from 0 to 10v (originally it gives 0 to 5v), and another circuit to switch motors direction, both circuits were assembled on a shield and connected to the motor controller.

The first circuit is a transducer:

<a href="http://www.flickr.com/photos/guibot/5513091482/">![](/assets/images/2011-03-09-max-arduino-industrial-motor-4.jpg)</a>

And this is the switch circuit that tell to the motor controller wich direction the motor will spin:

<a href="http://www.flickr.com/photos/guibot/5513091552/">![](/assets/images/2011-03-09-max-arduino-industrial-motor-5.jpg)</a>  

Then he builded an Arduino shield:

 <a href="http://www.flickr.com/photos/guibot/5512969102/">![](/assets/images/2011-03-09-max-arduino-industrial-motor-6.jpg)</a>

And the final part was the Max patch that send the direction states and the PWM values to the Arduino:

<a href="http://www.flickr.com/photos/guibot/5512967786/">![](/assets/images/2011-03-09-max-arduino-industrial-motor-7.jpg)</a>

And this is the result:
{% include vimeo.html id="20843914" %}

**<a href="http://artica.cc/filez/SOURCES.zip">And last but not the least all the source codes can be downloaded here</a>**


