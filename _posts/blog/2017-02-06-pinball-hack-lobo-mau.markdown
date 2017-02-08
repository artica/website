---
layout: post
date: 2017-02-06 12:00:00 UTC
title: "Pinball Hack"
categories: blog
excerpt: "In May 2016 our partners Lobo Mau approached us with a challenge to hack an old Excalibur Pinball machine."
thumbnail: /assets/thumbs/2017-02-06-pinball-01.jpg
frontimage: /assets/images/2017-02-06-pinball-01.jpg
---

![](/assets/images/2017-02-06-pinball-01.jpg)

In May 2016 our partners [Lobo Mau][1] approached us with a challenge to hack an old Excalibur Pinball machine, originally released to the public in the 80s.

The objective was to redesign the exterior completly: covering it with fake fur; sanding off the original pinball table; and to also replace the plexiglass title screen with a video monitor to play videos. The project was done in collaboration with [The Arcade Man][3] who revamped the exterior while we focused on hacking the interior.

{% include youtube.html id="LxY0ilp_WVM" %}

We added microswitch sensors to the colored objective pads, and an Arduino to detect when each set of objectives was triggered and sent the values to a machine running [Einstein VideoPlayer][4]. Each set would trigger a random video from a given set. When all sets were completed a final video sequence would play. We also connected the Arduino to the numeric display to know when the original game started and ended.

The project was done in a very short period of time, and became even more critical when the pinball died on us during the process. We had to go into deep hardware debugging mode. Greetings to Franky from [Rastermania][5] and Mauricio of [Leds&Chips][6] for some hot tips. After a few sessions of Bruno Serras hardware debugging an electric system as old as him, we managed to figure out it was a problem with one of the chips. Luckily the original owner of the machine knew a person in Porto who gently offered us a replacement, very fortunate for us since they are very hard to find.

The machine was presented at an event for Lobo Mau's self-promotion, playing videos made by Lobo Mau. And then it ended up back at Artica where we altered it to play our own Artica's videos.

We first displayed it to the public at [MakerFaire Lisbon 2016][2] where it was a huge success.

![](/assets/images/2016-07-05-makerfaire-lisbon-02.jpg)

We also recorded a video log with Guilherme explaining how the system works, you can find it here:

{% include youtube.html id="bDZm3nz562U" %}

[1]: http://lobomau.pt/
[2]: http://artica.cc/blog/2016/07/05/makerfaire-lisbon.html
[3]: http://thearcademan.net/
[4]: http://artica.cc/products/einstein.html
[5]: http://www.rastermania.be
[6]: http://ledsandchips.com/
