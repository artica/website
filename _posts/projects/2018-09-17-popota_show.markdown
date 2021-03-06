---
layout: post
date: 2018-09-17 11:00:00 UTC
title: "POPOTA XMAS SHOW"
categories: projects interactive
excerpt: "Popota Xmas Show"
thumbnail: /assets/thumbs/2018-09-17-popota_thumbs.jpg
frontimage: /assets/images/2018-09-17-popota.jpg
---

In 2017 we were invited by [UAU][2] to participate in Popota's Christmas Show, that took place in [Campo Pequeno][7], Lisbon. 

It was a big challenge due to the requirements of the performance:
- Ultra-Large LED Wall
- 40 minutes of continuous video
- Videos triggered in sync with the actors/performers
- Real-time interactive contents

![](/assets/images/2018-09-17-popota_showpopota_led_walls.JPG)

Having this, we created all the visual contents plus the scene props. 

The visuals were created 3D Max, edited and rendered in Unity 3D, then post processed. 
Real-time interactive graphics generation was also developed in Unity 3D. 

![](/assets/images/2018-09-17-popota_show-IMG_2488.JPG)
![](/assets/images/2018-09-17-popota_show-IMG_2674.JPG)
![](/assets/images/2018-09-17-popota_show-IMG_2827.JPG)

During the creative process we wanted to have a glimpse of the size relations between the screens and the stage, so we developed a VR stage.

![](/assets/images/2018-09-17-popota_show-vr.JPG)

Our [Einstein VideoPlayer][1] had to be updated to run large video dimensions with high performance, to achieve this peak performance we used [HAP codec][3]. Einstein also received real-time video from a computer vision server running [Bonsai][4] linked to Unity, and finally connected to a [Spout][6]server (if you are a MAC user, [Syphon][5] does the same job), using HAP also allowed us to use multi-layered contents with alpha transparency videos. 

This is an image of the two control screens, the left screen is showing an infra-red camera image being analysed in Bonsai, the right screen is our EinsteinVP. 

![](/assets/images/2018-09-17-popota_show-regie_2_cv.JPG)

We also created the props, this included a big school rubber, pencils, compass, pencil sharpener and a gramophone. 

![](/assets/images/2018-09-17-popota_show-props_1.JPG)
![](/assets/images/2018-09-17-popota_show-props_6.JPG)
![](/assets/images/2018-09-17-popota_show-props_3.JPG)


Popota is a SonaeSierra's brand.

<b>Production:</b><br>
UAU

<b>Artica's Cast:</b><br>

<b>Visual Art Direction:</b><br>
Guilherme Martins

<b>3D Modeling:</b><br>
Filipe Barbosa

<b>Video Editing:</b><br>
Guilherme Martins, Filipe Barbosa, João Ribeiro

<b>Software Development, Realtime Interaction:</b><br>
André Almeida, Gonçalo Lopes, Ricardo Imperial 

<b>Software Development, Einstein Video Player:</b><br>
Guilherme Martins

<b>Props Concept and Direction:</b><br>
Eric Costa

<b>Props Construction:</b><br>
Eric Costa, José Noronha, Paula Espanha

[1]: http://artica.cc/products/#einstein
[2]: http://www.uau.pt/
[3]: http://hap.video/
[4]: https://bonsai-rx.org/
[5]: http://syphon.v002.info/
[6]: http://spout.zeal.co/
[7]: http://www.campopequeno.com/espetaculoseeventos/
