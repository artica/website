---
layout: post
date: 2013-07-15 18:45:56 UTC
title: "CIAV Tech Report"
categories: blog
excerpt: "In early 2013 Artica and RPAR got a proposal approved to help build CIAV - Centro de Interpretação de Almada Velha, a sort of interactive museum of the cities\' historic legacy. The project was developed amongst a large number of partnerships. Artica was responsible for the interaction design of the space and all of it\'s electronic and software development. The opening was on the 29th of June."
longexcerpt: "In early 2013 Artica and RPAR got a proposal approved to help build CIAV - Centro de Interpretação de Almada Velha, a sort of interactive museum of the cities\' historic legacy. The project was developed amongst a large number of partnerships. Artica was responsible for the interaction design of the space and all of it\'s electronic and software development. The opening was on the 29th of June.Most of our interaction on the project was made with the following people: Ana Robalo and Rui Pinto from RPAR (space architecture), Eric Costa (technical director), Angela Luzia, Ana Costa, Margarida Nunes and Telmo António from city hall (contents), Aldina Semedo e Gabriela Miranda (confection), Leonel &amp; Bicho (construction), António Lobo (graphic design), André Nascimento (sound design). Big thanks go out to them. Others were also involved in the process, just not as directly with Artica."
thumbnail: /assets/thumbs/2013-07-15-ciav-tech-report-1.jpg
frontimage: /assets/images/2013-07-15-ciav-tech-report-1.jpg
---

<a href="/assets/images/2013-07-15-ciav-tech-report-1.jpg">![](/assets/images/2013-07-15-ciav-tech-report-1.jpg)</a>

In early 2013 Artica and RPAR got a proposal approved to help build CIAV - Centro de Interpretação de Almada Velha, a sort of interactive museum of the cities' historic legacy. The project was developed amongst a large number of partnerships. Artica was responsible for the interaction design of the space and all of it's electronic and software development. The opening was on the 29th of June.

Most of our interaction on the project was made with the following people: Ana Robalo and Rui Pinto from <a href="http://rpar.pt/">RPAR</a> (space architecture), Eric Costa (technical director), Angela Luzia, Ana Costa, Margarida Nunes and Telmo António from city hall (contents), Aldina Semedo e Gabriela Miranda (confection), Leonel &amp; Bicho (construction), António Lobo (graphic design), André Nascimento (sound design). Big thanks go out to them. Others were also involved in the process, just not as directly with Artica.

<div class="video-container"><iframe src="//www.youtube.com/embed/urG9LNcyugM" frameborder="0" allowfullscreen></iframe></div>

This post is about the technological decisions we had to make building CIAV. It describes the problems, what were our alternatives, why we opted for our solution and what lessons we learned during the development process. It focuses on the interaction technology side of things, not the building of the space.

The source code for all the different software elements is <a href="https://bitbucket.org/artica/ciav/">available at bitbucket</a>.

<strong>The space</strong>

CIAV is a very old building, dating back to the 15th century, having been rebuilt and repurposed several times. It used to be known as Ermida do Espírito Santo operating as a church, eventually rebuilt as a community and recreational space.

<a href="/assets/images/2013-07-15-ciav-tech-report-2.jpg">![](/assets/images/2013-07-15-ciav-tech-report-2.jpg)</a>

The space had been recently recovered by other architects, but the project proposal required some alterations.

CIAV has 4 areas accessible to the public:
* The entrance lobby
* The main hall (including a stage)
* The activities hall
* The exit hallway.

<strong>Building the entrance</strong>

On the entrance itself a small ramp was built to comply with handicap access regulation.

The entrance lobby walls had to be repainted dark brown. A yellow entrance stand was added. Large glass doors were fitted and painted, separating the lobby from the main hall and an LCD screen was mounted on one of the walls.

<a href="/assets/images/2013-07-15-ciav-tech-report-3.jpg">![](/assets/images/2013-07-15-ciav-tech-report-3.jpg)</a>

The entrance is relatively tech free, the exception is the large LCD screen coupled to a low end machine which displays the cities cultural news, the application requires internet access and parses the city hall's rss feed (via google reader) every 3 hours. The application was developed entirely on html5/css and javascript.

<strong>Building the main hall</strong>

The main hall was the most complex area to build.

Where the walls meet the ceiling we had to build a rack to hang long drapes, all around the area. The remaining visible walls / ceiling had to be painted in matching color.

A custom made suspension rig was designed, welded, transported and built, made out of metal, it had to hold a machine and two projectors up in the ceiling, being lowered up and down by a lever system.

<a href="/assets/images/2013-07-15-ciav-tech-report-4.jpg">![](/assets/images/2013-07-15-ciav-tech-report-4.jpg)</a>

A custom made table of 2 by 5 meters was also designed, welded, transported and built, made out of metal, wood and sand, it had to be assembled on location and covered with the sand concrete material. This table served as a projection screen for the suspended projectors.

Attached to the table four metal stands were also custom made to fit the table and hold the interaction tablets.

Three large glass cabinets were also custom designed, welded, transported to the building and assembled in the main hall. They were made of metal and wood. Then lined with the same fabric as the drapes, to give it a seamless look. Some parts of the cabinets had to be removable, to allow access the electrical system inside. Custom screws were made to hold the plexiglass cover. Inside each cabinet a custom lights system was installed, more info on them further down in this document.

Next to the cabinets we had to wall mount an LCD screen. The windows on the main hall also required a special wooden structure that was lined with the same fabric as the drapes.

Stairs were made to cover the access path below the stage. On the ceiling of the stage three projectors were attached upside down. They display a looping movie that was recorded and prepared for multi-view. There is also a machine on the roof running a max patch that plays the video and sends the signal to a Matrox triplehead2go which splits it to the 3 projectors.

<strong>Building the activities hall</strong>

The activities hall didn't require much intervention. Just a few beanbags placed on the floor.

This location was heavily used during construction phase for stashing the equipment and setting up several painting, cutting, stapling and welding work stands, as required for construction on other sections of the building.

<strong>Building the exit hallway</strong>

The exit hallway is a corridor with pictures, newspaper clips and small objects reminiscent of the history of the city.

A custom made wood and iron frame was designed, built, placed and painted underneath the stairs, stretching all the way to the back of the hallway. On this scruture was installed electrical system to light the objects behind glass and power three digital photo frames embedded in the structure. Large vinyl prints were then applied to the surface containing additional content information.

<a href="/assets/images/2013-07-15-ciav-tech-report-5.jpg">![](/assets/images/2013-07-15-ciav-tech-report-5.jpg)</a>

<strong>Main hall light &amp; magic</strong>

The main hall is where most of the technological light &amp; magic takes place.

As previously mentioned, there are 2 projectors suspended on the roof. They are projecting down with edge blending technology an animated map of the city where streets and buildings are highlighted. The canvas is a table made of cemented sand with 2 meters of width, 5 of length and half a meter height. Four android tablets are used as interface to select and control the content projected on the table. Surrounding the table are led strips with 250 LEDs and an <a href="http://www.arduino.cc/">Arduino</a> controlling them.

<strong>Edge blending from hell</strong>

After a few initial tests with the projectors where everything seemed nice and dandy the projector configuration pixies from hell started playing a few games with us. The projectors were pretty good but at some point one of them was refusing to fullscreen under it's native resolution. This was bad since we needed both of them at exactly the same resolution and screen coverage, for the edge blending to work. After a few puzzled days of reinstalling drivers, replacing cables, switching entrance slots and going through all the settings menus in the projectors half a dozen times, we finally figured it out, there are more then one dvi input modes, one of the projectors was preferring type 1 while the other was enjoying it's existance under type 2.

Our setup was 1 high end machine with a GeForce GTX 580 and 2 Panasonic DW 640L. This was poor planning on our side, this specific GeForce model doesn't have driver support for edge blending a single high resolution screen display to multiple monitors. The Quadro's apparently do, so we should have either bought one of those or a cheaper, low-end, graphics card with an external Matrox signal splitting hardware solution. Ofcourse this wouldn't be an issue if Panasonic supported proper Edge Blending, like for example some models of NEC do. But now we were stuck with this hardware and no way to do edge blending on the hardware side.

Trying to save some euros from our, already delivered, hardware budget, we decided to try and resolve the issue with a custom made glsl shader that takes part of the rendered input and partially stretches it on both projector outputs, with some hotkeys to alter the ratio and better match it pixel perfect. This was implemented in a day but still not working as intended. Our application was being developed in html5 + css + javascript, so, to now render it to a texture we had to embed it in a <a href="http://libcinder.org/">libcinder</a> app (<a href="https://github.com/paulhoux/Cinder-Awesomium">with awesomium</a>). This in itself worked fine. But by stretching the rendered image on the edge blending shader, the text would lose some of the sharpness, so we had to "cheat" a little: since we knew the most text intensive elements were never going to cross the edge blending zone, we split them into a separately rendered layer with transparency and only blended after, with the edge blending FBO done.

Another small headache was making sure the suspended projectors platform was in fact completely perpendicular to the table. If it was not, some pixel misalignment would show on one of the vertical edges of the edge blending zone, destroying the intended effect. Luckily for us we had a skilled and patient hardware guy who managed to yo-yo tune the suspended platform.

<a href="/assets/images/2013-07-15-ciav-tech-report-6.jpg">![](/assets/images/2013-07-15-ciav-tech-report-6.jpg)</a>

<strong>Android tablets are not iPads</strong>

To control the displayed content on the map/table application we have 4 android bq Edison tablets in fixed structures surrounding the table. The tablets run a custom application developed using <a href="http://phonegap.com/">phonegap/cordova</a>, so it's actually completely made using html, css and javascript. The choice for Android and the bq Edison in specific was made balancing the price and hardware quality. They are not iPad's.

Initial tests with another Android device on a Mac were made to determine if such an interface solution could work in terms of framerate. It was fairly acceptable. But there was another pending issue, the native Android browser does not support WebSockets, our plan for communicating amongst the elements was using websockets. A few folks had implemented phonegap plugins to cover that missing feature, but most of them were deprecated, abandoned or had major performance instability issues, eventually we ended up using <a href="https://github.com/ziadloo/PhoneGap-Java-WebSocket">ziadloo's version</a> that did a great job.

Another silly stress developing for the Android tablet was migrating the deployment environment to windows. We discovered the target device was not recognized by the android sdk. Searching the internet for answers we finally digged up that some devices do not get automatically recognized for development and that the only solution is connecting it to a Mac, checking the usb properties of the connected device to note down the vendor id and then saving it into a hidden configuration file.

Sadly, this was still not enough to get phonegap cli working properly on Windows, seems the cli interface is still quite beta, especially under windows. We eventually decided to just use a Mac instead and quickly managed to start deploying our application to the tablet. Once the software development platform was stable the development itself was rather smooth.

We were left only with hardware problems. Android tablets are not iPads, leaving one of them connected to the electricity after it's already charged quickly screwed with the battery sensors, the tablet started shutting itself down despite still having battery life left.

Another hardware problem we ran into during the installation was the built up static electricity, which screws with the touch sensitivity of the screen, eventually crashing the tablet. We suspect it's being caused by the power supply from the small audio speakers that amplify the sound of the tablet. We suspected this due to a shared symptom of static whistling sounds when the audio jack is connected. Wrong electrical wiring? Crappy tablets? We replaced the audio adaptors, grounded all electric supplies, cut some metal out of the structure and replaced the isolation material that separates the tablets from the frame structure. Hopefully it's enough to ensure the problem doesn't re-occur.

<strong>WebSockets are the future</strong>

As previously mentioned already we decided to use WebSockets to handle the communication between the different elements. Besides the map and the tablets we had another machine to handle computer vision (via <a href="http://opentsps.com/">OpenTSPS</a>) and replay environment sound to the space. This machine became the sockets server running <a href="https://npmjs.org/package/websocket.io">websocket.io</a> on <a href="http://nodejs.org/">node</a>.

Our sockets server had 3 main purposes:
1) Relay synchronism messages between the map and tablets.
2) Parse TSPS information, to send additional messages.
3) Sync a gradual color change between the map application and the 4 arduinos, each connected to LED strips.

The LED strips were distributed amongst 3 exhibit stands and around the map table itself. The map table in particular required to receive 490 RGB data values several times per second. After a few tests we quickly realized this Arduino didn't have enough memory to handle this. There are websockets libraries for Arduino, but all of them limit you below the number of bytes we required to pass along. So we decided to use tcp connections instead of websockets, we run them in parallel, also using node. After a few headaches with javascript string to byte conversions it ended up working just fine.

<strong>All other things arduino</strong>

In the side of the main hall there is an LCD screen with Arduino proximity sensors that trigger video interaction. These videos feature the local population sharing their memories of the city. An Arduino with proximity sensors detects hand motion signals in front of the LCD, by waving your hands you can go back or skip to the next video. The Arduino communicates by usb with a computer running a customized Python script that handles the logic and forwards requests to vlc via telnet.

Next to the LCD screen, 3 exhibit stands are also coupled with Arduino proximity sensors that alter it's lighting via LED strips. By default the exhibition stands glow colors in sync with the table, when someone stands in front of them, the lighting changes and we activate a handful of hand soldered LED spotlight projectors pointing to the different objects inside the stands. Each exhibition stand operates independently of each other.

<a href="/assets/images/2013-07-15-ciav-tech-report-7.jpg">![](/assets/images/2013-07-15-ciav-tech-report-7.jpg)</a>

<strong>Network me beautiful</strong>

Initially we wanted to have 1 wifi router with internet and an ethernet switch distributing the network to all our elements. The loose end on this plan was the decision to build a suspended platform for the projectors and the machine displaying the map. We needed an ethernet cable that could handle the strain of being pulled up and down through the rig, we didn't want to risk with a standard ethernet cable and the budget for a professional one was disturbingly high. We had to make a decision if we wanted a wifi card on the map machine, or a wifi router bridging the connections.

Considering we also wanted network access to the suspended projectors, since it's handy to be able to access stats and turn them on and off remotely, we decided to go for the wifi bridge solution and bought another good old TP-Link DR941ND. We also considered that having another wifi router in a privileged location in the ceiling of the main hall would help the tablets not lose network access on a whim.

We configured the wifi routers to bridge with each other, gave all the fixed machines fixed IPs and everything was fine. After a few days of usage we started noticing network connection problems. Pings of 200ms between routers, no gateway connections, lost packets, the usual headaches. We eventually decided to flash <a href="http://www.dd-wrt.com/site/index">dd-wrt</a> and try again. The lost connections in the bridges subsided, but the map machine still had a few gateway resolve issues and would eventually need to be manually rebooted every once in a while, we're talking of the machine that is suspended in the ceiling here, not very accessible.

Websocket server connection overload? Connections not timming out? Wifi channel conflict? Bad <a href="http://www.wampserver.com/en/">WAMP</a> config? Bad network config? We are still not 100% sure what was wrong with it exactly, but we tried optimizing the number of connections and reconfiguring some things, until it eventually stabilized. The tablets still lose wifi connection now and again but manage to gracefully recover. The suspended machine hasn't had any critical connection loss anymore. Let's hope it stays that way.

<strong>Conclusion</strong>

CIAV was a great project to work on. It involved lots of elements with distinct technologies, both on hardware and software. We learned a lot and still managed to deliver something cool, we hope the visitors will enjoy it as much as we did.
