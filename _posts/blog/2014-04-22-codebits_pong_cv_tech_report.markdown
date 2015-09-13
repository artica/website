---
layout: post
date: 2014-04-22 19:00:00 UTC
title: "Codebits Pong CV Tech Report"
categories: blog
excerpt: "We re-implemented the computer vision modules using Bonsai. Pong used standard HTML5 canvas client running on a modern browser."
longexcerpt: "We re-implemented the computer vision modules using Bonsai. Testing it for use with multiple cameras and the new OSC message module, and integrated our very own XSockets module for Bonsai. Pong used standard HTML5 canvas client running on a modern browser."

thumbnail: /assets/thumbs/2014-04-22-codebits.png
frontimage: /assets/images/2014-04-22-codebits.png
---

![](/assets/images/2014-04-22-codebits.png)

For the [Sapo Codebits 2014][1] event, our clients Sapo/PT asked us to develop a computer vision module to help count the votes and entertain the audience. The entire project is open source [at the bitbucket repo][2].

We had already developed a similar project for [Projecto 80][3] but we wanted to take this wonderful opportunity to [test and develop some modules][4] for the [Bonsai framework][5], since it's being developed by a close friend of Artica, Gonçalo Lopes.

We re-implemented the computer vision modules using Bonsai. Testing it for use with multiple cameras and the new OSC message module, and integrated with our integration of XSockets module for Bonsai (based on [XSockets.NET][6]). You can find our version at [here][4].

It also includes some computer vision modules of our own. Some optimised functionalities were needed, mainly to the divise, merge and serialise image frames on realtime.

<div class="video-container"><iframe src="http://www.youtube.com/embed/8KTkqO_PKfY" frameborder="0" allowfullscreen></iframe></div>

For the Pong we used standard HTML5 canvas client running on a modern browser (tested on Firefox 28 and Chrome 34). We used XSockets (with a .js library) to send the binary image of the camera from Bonsai to the browser, and also send weights information for the left and right paddles.

The insert coin screens were ripped from early Sapo Codebits video teasers created by [Hipnose][7] for Sapo. The bots are obtained in realtime from a list of participants of this years event, using the Codebits API to obtain the bot image.

The game is collaborative, not competitive. Both sides of the screen are attempting to keep the ball/bot in play for the longest possible time. On each hit it diminishes size and velocity increases.

The voting only has a computer vision module, the visuals were entirely on the application side of Sapo. We used a node.js server to receive the weights values  from Bonsai by OSC and rebroadcast them as standard websockets message.

We were required to do this on last minute because our target machine was using node.js and could not open any incoming ports. This would not allow it to be target of OSC. And there is no node.js library capable of receiving the xsockets kind of websockets. We hadn't previously realized that Xsockets seems to wrap the websockets protocol instead of following the standard. So we had to set up a node.js server of our own that would broadcast the localhost osc messages to the target machine via standard websockets.


[1]: http://artica.cc/blog/2014/04/14/codebits.html
[2]: https://bitbucket.org/artica/audience-pong
[3]: http://artica.cc/projects/interactive/2013/09/26/audience-pong.html
[4]: https://bitbucket.org/artica/bonsai.artica
[5]: https://bitbucket.org/horizongir/bonsai
[6]: http://xsockets.net/
[7]: http://hipnose.com
