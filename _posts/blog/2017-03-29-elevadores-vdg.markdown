---
layout: post
date: 2017-03-29 16:00:00 UTC
title: "Vasco da Gama Elevators"
categories: blog
excerpt: "We were asked to submit a proposal to Sonae Sierra for the remodelling of the elevators in Vasco da Gama, the busiest shopping mall in Portugal."
thumbnail: /assets/thumbs/2017-02-19-vdg-07.jpg
frontimage: /assets/images/2017-02-19-vdg-07.jpg
---

![](/assets/images/2017-02-19-vdg-07.jpg)

One year ago in partnership with [Schindler][2] we refurbished an interactive elevator for the [Amoreiras 360 lookout][1]. Through that partnership we were asked to submit a proposal to [Sonae Sierra][7] for the remodelling of the elevators in [Vasco da Gama][3], the busiest shopping mall in Portugal.

This proposal involved the design and refurbishing of five elevators of the shopping mall. We worked with the architects to come up with an immersive, but not claustrophobic, scenario that worked with the water theme of the entire shopping mall. We came up with an experience where the users can interact with a virtual aquarium. There is a large 4K screen, a Sony Bravia XD85, on each elevator, protected by tempered glass. This screen works as a huge virtual aquarium where our interactive application runs.

{% include youtube.html id="BT-mS5hz4kQ" %}

We not only designed the final aspect of the application but also the entire scenography and decoration of the elevator. Dimensioning the structure and the materials to meet the standards of weight limitation, airflow, fire hazard, etc. We designed a special support for holding the TV, and the pathways for all the cables and electronics.

![](/assets/images/2017-02-19-vdg-01.jpg)

![](/assets/images/2017-02-19-vdg-03.jpg)

![](/assets/images/2017-02-19-vdg-04.jpg)

![](/assets/images/2017-02-19-vdg-02.jpg)

The hardware was custom made, we prepared a box to handle all of the electronic components of the installation which is installed on top of the elevator, the system needed to be fail-proof to electrical discharges and sudden altitude drops. There are multiple couplers to control the seperate electric components. We did a video log with Bruno Serras about the box.

{% include youtube.html id="bu5CacJm3-U" %}

The visuals were made using Unity. We used a mix of assets and plugins developed in-house and purchased from the Unity asset store. We went through several iterations of the underwater scene. Scrapped quite a few of models and effects that the architects didn't find fitting by one reason or another. Some of them we made open source, like for example [the water exiting transition effect][4].

The virtual aquarium has a lot of small details that are not immediately recognized. For example the water level rises and lowers on sync with the elevator height, accompanying the floor the elevator is on. The sky on the screen mimics the real weather that is being experienced in the city outside, whether it's sunny, cloudy, raining, etc. The elevator has it's own an audio system playing water sounds depending on what elements are visible. Users can point and touch the screen to get the attention of the fish swimming by.

The LED strips on the side and top of the elevator are in sync with the whole system and animate accordingly with different behaviors, like for example:

* when people are interacting with the system, it turns on only one LED strip
* each floor has it's own color
* each time of the day has a different base color
* there are LED strip animations reinforcing the movement of the elevator
* there are LED strip animations reinforcing people entering and leaving the elevator platform

![](/assets/images/2017-02-19-vdg-05.jpg)

![](/assets/images/2017-02-19-vdg-06.jpg)

For the computer vision we used [Bonsai][5] and the new [Kinect][6]. The Kinect detects blobs, depending on their height it distinguishes between a head and a hand, enabling our application to have different emerging behaviors for staring and touching. To program the behaviors on Unity we used [Behavior Designer][8], which worked pretty well.

To sync the entire system Tarquinio Mota developed a custom C# application that communicates with the Unity application, with the TV itself and with the [JNIOR][9] automaton controller. JNIOR is used to receive info from the elevator and activate our electronic system. The custom C# application sends control messages to control the LED strip animations, among other things.

It took us a very long time preparing and delivering this project, it involved many of our team members during many months, so we are very excited to see it working on the field and hearing people talk about their experiences in it.

[1]: http://artica.cc/blog/2016/05/11/elevador-miradouro-amoreiras.html
[2]: http://www.schindler.com
[3]: http://www.centrovascodagama.pt
[4]: https://github.com/artica/exitwater
[5]: https://bitbucket.org/horizongir/bonsai
[6]: http://www.xbox.com/en-US/xbox-one/accessories/kinect
[7]: https://www.sonaesierra.com
[8]: https://www.assetstore.unity3d.com/en/#!/content/15277
[9]: http://www.integpg.com/jnior/