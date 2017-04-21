---
layout: post
date: 2017-04-19 17:30:00 UTC
title: "Kaspar: Palavra Soprada"
categories: blog
excerpt: "Artica played a technical role on the production of Parole Soufflée, developing custom-made interactive technology for this auto-theater production."
thumbnail: /assets/thumbs/2017-04-19-souffleur-01.jpg
frontimage: /assets/images/2017-04-19-souffleur-01.jpg
---

You might remember one year ago we wrote [a blog post about auto-theater][1]. Our conversations with Alexandre Pieroni Calado of [Artes e Engenhos][5] evolved into a piece entitled [Kaspar: Palavra Soprada][2] or "Parole Soufflée". Artica played a technical role in the production of this play, developing a custom-made interactive technology. The piece uses a custom version of our [Einstein VideoPlayer][3].

Parole Soufflée promotes the [Prompters][6] role. The project was led by a research conducted with prompters working at the D. Maria II National Theatre in Lisbon. As a result we present the auto-theatre piece Kaspar: Palavra Soprada.

It had it's [opening on the 1st of April at Latoaria][4] in Lisbon. You can find a complete tour calendar at [Artes e Engenhos website][5].

![](/assets/images/2017-04-19-souffleur-01.jpg)

This piece places you playing the role of the prompter, while watching the play through a surveillance monitor and handling a PTZ (pan, tilt and zoom) joystick to follow the actor, the viewer listens to what's being said on the play using headphones. As it progresses there are a couple of interaction moments where the "prompter" actions are analysed using speech recognition. This voice commands trigger actions that drive the direction of the play. 

Here Filipe Cruz shows the results of a research on Speech Recognition APIs:

{% include youtube.html id="EgdMJUzVBf4" %}

There are also other physical elements that are controlled: a lamp, a disco light and sound from speakers. These elements are used to immerse the user in both physical and virtual worlds. For the candle and disco light control we used an Arduino connected to a relay module, and for the joystick, because it outputs RS485 we needed a converter to RS232. This conversor is a MAX487.

Here both modules are being tested. 

![](/assets/images/2017-04-19-souffleur-03.jpg)

Guilherme Martins explaining the integration of the surveillance PTZ Joystick with our [Einstein VideoPlayer][3]:

{% include youtube.html id="EHJfcIlecTE" %}

And the complete set:

![](/assets/images/2017-04-19-souffleur-02.jpg)


[1]: http://artica.cc/blog/2016/03/24/white-squared-box-lunch-auto-theater.html
[2]: http://www.arteseengenhos.com/uploads/3/0/5/4/30542942/lancamento_parole_soufflee_a__2017_release.pdf
[3]: http://artica.cc/products/#einstein
[4]: https://www.facebook.com/events/1837875999809165/permalink/1841862182743880/
[5]: http://www.arteseengenhos.com/
[6]: https://en.wikipedia.org/wiki/Prompter_(theatre)
