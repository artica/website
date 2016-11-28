---
layout: post
date: 2016-11-28 12:00:00 UTC
title: "Stands for Tourism Exhibition in Paris and London"
categories: blog
excerpt: "FANQ inquired us during the Summer holidays if we could give them a hand with the physical computing side of a proposal they were budgeting for byDISPLAY and their final client Embratur, the Brazilian tourism institute."
thumbnail: /assets/thumbs/2016-10-04-brazil-stands-04.jpg
frontimage: /assets/images/2016-10-04-brazil-stands-04.jpg
---

[FANQ][1] inquired us during the Summer holidays if we could give them a hand with the physical computing side of a proposal they were budgeting for [byDISPLAY][2] and their final client [Embratur][3], the Brazilian tourism institute.

We were actually quite short on time, due to the usual build up of work that Summer holidays brings, both on ongoing projects and pending proposal submissions. But we naturally followed through with the talks and budgeted a few different solutions for them.

Embratur is present in tourism exhibition faires and events on several countries, always promoting Brazilian tourism and their represented partners. On this particular event for Paris they had 23 stands and Artica was contracted to provide an electronic system to control/indicate if a stand is free or occupied. The project was not very complex but the deadline was quite insane, just one week to design a solution, order components, build hardware, code software, test everything and install on location in Paris. There was not much room for error or proper tests. We warned byDISPLAY of our concearns and advanced.

{% include youtube.html id="hyUpaLFWB7I" %}

We built a simple two button system, communicating if the stand was occupied or not. Locally, mounted on the stand itself, two lights would change color accordingly. On an interactive touch screen in the entrance of the stand area we displayed an interactive map that would display the stands state (free or occupied) and give some additional information on each of the stands.

![](/assets/images/2016-10-04-brazil-stands-01.jpg)

![](/assets/images/2016-10-04-brazil-stands-02.jpg)

![](/assets/images/2016-10-04-brazil-stands-07.jpg)

Building the button system was relatively easy, just a few wires, an Arduino and a breakout board. Replicating it for all the stands (plus spares) within a week forced us to do a few all-nighters with everyone cutting cables, soldering and testing. We finished all the hardware just a few hours before catching the flight to Paris.

![](/assets/images/2016-10-04-brazil-stands-03.jpg)

![](/assets/images/2016-10-04-brazil-stands-04.jpg)

To identify which stand was which we developed a basic protocol between the Arduino and the computer controlling the map, communicating via websockets. So the map application had it's own secret "assign" mode to help configure the system. Due to the lack of time the entire map application was developed using html, css and javascript for a browser running in fullscreen mode.

On location in Paris we also had to mount our system to the stands and test everything. Luckily we didn't run into any major electronic or network issues so when it opened to public the system was working smoothly despite all the last minute building. Map application had the typical request for last minute requirement changes, which forced another all-nighter to implement but nothing very critical. Overall the project worked well and we had positive feedback from the client on the delivered service.

![](/assets/images/2016-10-04-brazil-stands-05.jpg)

![](/assets/images/2016-10-04-brazil-stands-06.jpg)

It's always very risky to accept projects on top of the deadline. Accepting them usually means we are burning the team with all nighters and delaying on-going projects. At Artica we always want to make sure the end result is the best it can possibly be, and without proper testing time it's quite hard to ensure we are delivering something robust. For these reasonswWe usually refuse these kind of last minute jobs, but in this case we decided to take on the challenge and we're quite happy with the end result of the project.

A month later we did another install of the project in London, with 60 stands instead of 24, since we had a little more time we did dedicated PCBs, which are more reliable. The install had the usual last minute issues, overcrowded network forcing last minute rewrite of code to use serial communication instead of wifi, screens mounted in portrait mode for landscape designed application, etc. With another couple of all-nighters by the team on location we resolved all the issues delivering what we promised.

[1]: http://fanq.pt/
[2]: http://www.bydisplay.eu/
[3]: http://www.embratur.gov.br/
