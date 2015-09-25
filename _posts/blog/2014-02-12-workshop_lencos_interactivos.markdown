---
layout: post
date: 2014-02-13 19:00:00 UTC
title: "Valentine's Interactive Hanky"
categories: blog
excerpt: "Valentine's Interactive Hanky @ Casa do Conhecimento, Vila Verde."
longexcerpt: "Valentine's Interactive Hanky @ Casa do Conhecimento, Vila Verde"
thumbnail: /assets/thumbs/2014-02-12-lenconamorados.jpg
frontimage: /assets/images/2014-02-12-lenconamorados.jpg
---

{% include youtube.html id="tAVrpWRQsZc" %}

It all started with the idea of creating a workshop around the theme of paper circuits, with great inspiration from the work and research of [Jie Qui][1], [Liza Stark][2] and others. Above all, the main idea was to transfer skills and knowledge to the team at [Casa do Conhecimento][3]. To show how easy it is to create simple things that are both beautiful and can have a great impact. We had this initial idea but we were still lacking a concept on the same level to the technology. The workshop was planned for February, which coincided with the [Namorar Portugal][4] (Flirting Portugal) event and all the Valentine happenings, and being Vila Verde the capital of this event we decided to combine the paper circuits workshop with the famous and acclaimed Lenço dos Namorados (Valentine's handkerchief).

And so it was born the idea of transforming a tradicional Valentine's handkerchief into an interactive object, using different sensors, SMD color leds, arduinos and copper tape.

The handkerchief we used was replicated using volume inks to avoid using the original cloth handkerchief.

![](/assets/images/2014-02-12-lenconamorados_1.jpg)

The circuit was created with a 1:1 printed version.

![](/assets/images/2014-02-12-lenconamorados_2.jpg)

As it evolved it became a kind of work that resembled the craftsmanship of jewelry and [filigree][5], an old reknown Portuguese craft.

![](/assets/images/2014-02-12-lenconamorados_3.jpg)

After demystifying the process of placing the copper tape and soldering the leds, the folks from Casa do Conhecimento were able to finish the circuit on their own while Guilherme prepared the Arduino connections.

![](/assets/images/2014-02-12-lenconamorados_4.jpg)

The circuit completed. We can see on the top left corner a pressure sensor, depending on how hard it is pressed the hearts pulsate with higher or lower intensity. On the right corner there is a hidden infra red proximity sensor, when the hand approaches the sensor the sea waves light up in sequence. In the center there is a microphone, the blowing intensity lights the stems and flowers. On the lower left corner there is an LDR sensor which makes the heart leds react to changes in luminosity. Finally on the lower right corner we have a capacitive sensor, touching it with a finger makes the letter light up and triggers on a small speaker the sound of a little bird.

![](/assets/images/2014-02-12-lenconamorados_5.jpg)

For each of these sensor and actuator systems we used a Motoruino (our very own Arduino clone). You can can see the wiring mess underneath, with such a tight deadline there was no time to arrange the backstage properly.

![](/assets/images/2014-02-12-lenconamorados_6.jpg)

Meanwhile, and because on the 11th of February there was scheduled a formal visit from the councillor Júlia Fernandes and the local newspapers, we wanted to show a little more than just the handkerchief, so we came up with the idea of having a projection wall, where we could show a little of the making-of in the form of a timelapse slideshow, the interaction in realtime, and the logos of the entities involved. After moving a few cubes around we managed to come up with an interesting projection area.

![](/assets/images/2014-02-12-lenconamorados_7.jpg)

To accomplish the video mapping, nothing better than to use our very own [Einstein VideoPlayer][6], which, with a few simple modifications, enabled us to project independent videos to multiple projection areas.

![](/assets/images/2014-02-12-lenconamorados_8.jpg)

We promise to post in the near future a few tutorial videos on how to configure Einstein.

![](/assets/images/2014-02-12-lenconamorados_9.jpg)

Back to the Valentine's handkerchief, the setup was already completed so all there was left was to showcase it to the councillor Júlia Fernandes and journalists.

![](/assets/images/2014-02-12-lenconamorados_10.jpg)

The event ended with a great surprise, it was offered an original Valentine's handkerchief and a documentary book with all the handkerchief's history and photos. Dozens of different handkerchiefs, all of them wonderful.

![](/assets/images/2014-02-12-lenconamorados_11.jpg)

It was an epic event! The involvement of all the team behind Casa do Conhecimento, the sharing, the making, the joint creation of an object with immense potential.

Here are some clips from local newspapers online [Terras do Homem][7] and [O Vilar Verdense][8].

[1]: http://vimeo.com/user1892233
[2]: http://lizastark.com/portfolio/paper-circuits/
[3]: http://www.casadoconhecimento.pt/
[4]: http://www.namorarportugal.pt/
[5]: http://en.wikipedia.org/wiki/Filigree
[6]: http://artica.cc/einstein/
[7]: http://www.terrasdohomem.com/pagina/seccao/17/noticia/13110
[8]: http://www.ovilaverdense.com/noticia.php?n=7629
