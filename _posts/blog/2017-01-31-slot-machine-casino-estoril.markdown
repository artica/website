---
layout: post
date: 2017-01-31 12:00:00 UTC
title: "Slot Machine 85 Anos Casino Estoril"
categories: blog
excerpt: "Altered slot machine for the 85 years exhibition of Casino Estoril."
thumbnail: /assets/thumbs/2017-01-31-slot-machine-02.jpg
frontimage: /assets/images/2017-01-31-slot-machine-02.jpg
---

![](/assets/images/2017-01-31-slot-machine-04.jpg)

This project was commissioned by our partners [State of the Art][1] for the [85 years exhibition of Casino Estoril][2] opening that took place on the 23rd of November 2016, and is still running until the 12th of February 2017.

The project consisted of modifying the look and extended the behavior of a Slot Machine to display videos of the 85 years of the casino. The casino provided us with a classic slot machine for modification, so we brought it to Artica and started working on it.

![](/assets/images/2017-01-31-slot-machine-01.jpg)

There are multiple issues associated with modifying a Slot Machine. First and foremost you have to be very careful not to break any gambling legislation rules. Each slot machine has literally 7 keys and we we're only given access to the external electronics to ensure the algorithm was not tampered with. Accessing the inside would be illegal. We had a series of meetings with the casino staff to provide us with limited access to the machine.

We analyzed the slot machine and tested several connections to different outputs. Since we had no software access, everything was made reading electronic signals. Using an Arduino we were able to read values from the numeric displays and from a light on the display that would dim out whenever you activated the play. We also read from the credits LED display, to infer when a play would be successful. With this data we could handle the "game" logic on  our videoplayer.

We installed an Intel NUC inside the slot machine running a specially adapted version of [Einstein Videoplayer][11]. The output was a monitor mounted on the top of the slot machine, replacing the fiberglass casing.

{% include youtube.html id="wZBcl2GsjRw" %}

We did 3d modelling and video animations. We also spent quite some time editing video content provided by the casino.

We also redesigned and reprinted the paper rolls of the slot machine, giving them the 85 years exhibition theme.

![](/assets/images/2017-01-31-slot-machine-03.jpg)

![](/assets/images/2017-01-31-slot-machine-02.jpg)

Considering gambling legislation the machine had to clearly be labelled as not being part of the gambling circuit in the casino. The coin insertion was disabled and the machine was free to play and not giving out any prizes. It required a person to stand next to it at all times to explain the game logic and ensure people would not mistake it for the standard slot machines.

The project was pretty interesting for us. A good balance of things we already knew how to do and a few motivating challenges. The exhibition opening went pretty well, had a good attendance and both the audience and our clients were impressed with the outcome.

Related media clippings: [1][3] [2][4] [3][5] [4][6] [5][7] [6][8] [7][9] [8][10]

[1]: http://sota.pt/
[2]: http://www.casino-estoril.pt/en/exhibition-85-years-casino-estoril/1126.htm
[3]: https://www.noticiasaominuto.com/cultura/692729/casino-estoril-celebra-85-anos-com-exposicao-e-espetaculo-de-mariza
[4]: http://mag.sapo.pt/showbiz/artigos/casino-estoril-celebra-85-anos-com-exposicao-evocativa-e-espetaculo-de-mariza?artigo-completo=sim
[5]: http://starsonline.pt/casino-estoril-celebrou-85o-aniversario-com-espectaculo-exclusivo-de-mariza/
[6]: http://www.tribunadamadeira.pt/2016/11/26/casino-estoril-celebrou-com-mariza-85-anos-dedicados-a-arte-e-a-cultura/
[7]: http://caras.sapo.pt/famosos/2016-12-18-Casino-Estoril-comemora-o-seu-85.-aniversario-com-concerto-de-Mariza
[8]: http://culturaenaoso.blogspot.pt/2017/01/exposicao-85-anos-casino-estoril-em.html
[9]: http://retratoscontados.pt/retratos-contados-do-casino-do-estoril/
[10]: http://getbliss.pt/projecto/85-anos-casino-do-estoril/
[11]: http://artica.cc/products/#einstein
