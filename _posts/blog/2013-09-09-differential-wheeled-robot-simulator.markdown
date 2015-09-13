---
layout: post
date: 2013-09-09 18:09:53 UTC
title: "Differential wheeled robot simulator"
categories: blog
excerpt: "This Processing application is meant to simulate a differential wheeled robot, very used nowadays. This app will be usefull in our Robotics Workshops!"
longexcerpt: "This Processing application is meant to simulate a differential wheeled robot, very used nowadays. This app will be usefull in our Robotics Workshops!I missed the github class so here it is the good\'old zip"
thumbnail: /assets/thumbs/2013-09-09-differential-wheeled-robot-simulator-1.jpg
frontimage: /assets/images/2013-09-09-differential-wheeled-robot-simulator-1.jpg
---

This <a href="http://processing.org">Processing</a> application is meant to simulate a <a href="http://en.wikipedia.org/wiki/Differential_wheeled_robot">differential wheeled robot</a>, very used nowadays. This app will be usefull in our <a href="http://guibot.pt">Robotics Workshops</a>!

<a title="Differential Drive Simulator in Processing by guibot, on Flickr" href="http://www.flickr.com/photos/guibot/9711105195/">![](/assets/images/2013-09-09-differential-wheeled-robot-simulator-1.jpg)</a>

<del datetime="2013-09-30T22:42:36+00:00">I missed the github class so here it is the good'old zip</del>
<a href="https://github.com/Artica/DifferentialDriveSimulator-Processing">Here's the link to the repo</a>, you're welcome to contribute  ;)

There are still a couple of enhancements on the list:
<ul>
        <li>real metrics and scale</li>
	<li>connect to motor encoders</li>
        <li>record a path on the virtual world and let the real robot follow it</li>
	<li>become real simulator of the arduino code used in our robotics workshops</li>
</ul>

The video is reproduced a lot faster than the program really performs  :p
<div class="video-container"><iframe src="//www.youtube.com/embed/ly1pOw2H_1o?list=UU_SK27zLYcoPh27UTATRQNQ" frameborder="0" allowfullscreen></iframe></div>

Some control keys are available:
<a href="http://www.flickr.com/photos/guibot/9711105211/" title="Differential Drive Simulator in Processing by guibot, on Flickr">![](/assets/images/2013-09-09-differential-wheeled-robot-simulator-2.png)</a>
<a href="http://www.flickr.com/photos/guibot/9711105229/" title="Differential Drive Simulator in Processing by guibot, on Flickr">![](/assets/images/2013-09-09-differential-wheeled-robot-simulator-3.png)</a>

The overall program is quite simple to use, just pass the mouse over the joystick area to control the bot.
<a title="Differential Drive Simulator in Processing by guibot, on Flickr" href="http://www.flickr.com/photos/guibot/9714339852/">![](/assets/images/2013-09-09-differential-wheeled-robot-simulator-4.jpg)</a>

The program basically maps joystick values X and Y to a differential drive system where two motors are used to drive a robot.  

There is also a representation of a robot and its path according to the motors differential rotation.
 
 Credits:
 
 The joystick program was based on a program entitled 'JoystickSimulation' by: Vince Thompson
 <a href="http://diyroboticslab.wordpress.com/2009/06/17/joystick-simulation-with-processing/">http://diyroboticslab.wordpress.com/2009/06/17/joystick-simulation-with-processing/</a>
 
 The robot program was based on a program entitled 'Kephera Simulator' by Adam Matic of Croatia
 <a href="http://gritsgroup.org/robotsimulator.htm">http://gritsgroup.org/robotsimulator.htm</a>
