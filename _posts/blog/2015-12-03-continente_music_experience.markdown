---
layout: post
date: 2015-12-02 16:00:00 UTC
title: "Continente Music Experience"
categories: blog
excerpt: "Two years ago we did a project for a Continente Missão Sorriso roadshow, due to several reasons until today we never got around to submitting a blog post about this project until today."
thumbnail: /assets/thumbs/2015-12-03-continente-music-experience-04.jpg
frontimage: /assets/images/2015-12-03-continente-music-experience-04.jpg
---

![](/assets/images/2015-12-03-continente-music-experience-04.jpg)

Around two years ago we did a project for a [Continente Missão Sorriso][3] roadshow, the project was commissioned by [GCI][1] / Herlox as part of [Projeto_80][2]. Our collaboration with them dated back to [Audience Pong][4]. Due to several reasons until today we never got around to submitting a blog post about this project, even though it was already fully documented and is even [open source][5].

{% include youtube.html id="gKpxnx61JYE" %}

The concept was to create an interactive installation for a road-show campaign through several school across Portugal. The project involved developing a band hero clone that could play 3 licensed tracks from Orelha Negra, and use real instruments as input devices instead of the usual plastic replacements.

## Hardware

Using real instruments gave much stronger impact to the project but also opened the door to a lot of potential problems.

We had a total of 4 instruments:

**Drum Set**

We purchased a real drum set and  stripped it down to a few minimum elements: bass drum, snare drum, tom and hi-hat. This was required for portability of the drum set through the road show.

Next we coupled to it an Arduino with several piezo sensors. The piezos were placed inside the instruments and the instruments were muffled to both prevent sound and damage to the piezos.

The Arduino would register the values and send a websockets message by ethernet network to a node.js server.

**Bass Guitar**

The bass guitar was purchased as one of those build at home kits, that saved some work of breaking a new guitar apart.

We actually had 2 bass guitar prototypes, one using frequency analysis of the picks, and the other using actual sensors. The second prototype proved to be both more robust and easy to learn to use, and that’s the one that was used in the end.

The pick was taken apart from a plastic controller of guitar hero. The bass guitar carved up for more space to place it inside along with an Arduino and connections to the triggers placed on the handle bar.

Similar to the drum set, the Arduino would register the values and send a websockets message by ethernet network to a node.js server.

![](/assets/images/2015-12-03-continente-music-experience-01.jpg)

**Keyboard**

The keyboard was a standard midi keyboard, sending midi values that are converted into websockets messages by our node.js server working as a proxy.

![](/assets/images/2015-12-03-continente-music-experience-02.jpg)

**Sampler**

The sampler was a standard MPC. We opened it up to replace the lights with matching colors to the game and remove any buttons without usage. Similar to the keyboard, the MPC sent midi messages that were converted into websockets messages by our node.js server working as a proxy.


## Software

In the software department the whole application is actually a webpage with a localhost server.
- The design is hardcoded to FullHD resolution.
- Web Audio API is used to trigger sounds.
- WebGL (via [pixi.js][7]) is used to give 3d acceleration to the interactive elements.

To sync the tracks we developed an internal editor to add/move/edit/delete track nodes. It was made to easy scroll back and forth with the mousewheel to check for music synchronism. And it included functionality to import and export as json.

An additional requirement was made to input high-scores from each session and export them to a local file, for the client to analyse after the roadshow was done.

As previously mentioned the [sourcecode is open source][5] available under MIT license. Feel free to fork it to add support for frets on fire assets, other controllers, play music directly from youtube / soundcloud, etc.

![](/assets/images/2015-12-03-continente-music-experience-03.jpg)

## Installation

We delivered the project as a turn key solution. Fully pre-tested and ready to operate by the roadshow crew alone. They were touring several schools during 2 months, we wouldn't be able to be present during all of the sessions but were available to provide support when required.

All the hardware was ready to plug and play.

We provided a technical ryder for the cables, labelled all inputs and ducttapped the unused ports. We also provided an operations and troubleshooting manual and provided replacement parts for the more sensitive components that might not resist life on the road.

Despite all of this we were present on the initial setup sessions to make sure things worked smoothly. We caught some early malfunctions and had to repair some parts for the first sessions but overall we were impressed on how the system held up on the road.

## Soap Opera

**Prelude**

As much as we loved the outcome of the project, dealing with the company behind it was a real soap opera nightmare.

We like to think that atleast we learned something from the experience, that we are now better qualified to foresee which projects and companies are worth working with and which ones are "full of it". 

We wrote the core of the next paragraphs in early 2014. So it might be a little outdated and brimming with frustration. We decided against posting about it before, following advice of our lawyer who was afraid it could be used as grounds for breaking the due payment agreement. Today is actually the day we finally got our last due payment for this project, nearly 2 years later and after much legal trouble to get it. So, here it is, for anyone who likes Portuguese industry soap operas to read, maybe cry or laugh a little.

**Proposal Rewrite**

This particular soap opera started in the late days of October 2013, while we were swamped with other projects and proposals, GCI, who were already late in payment for the [Audience Pong][4] project we had done for them earlier that year, requested from us an urgent rewrite of one of our previous proposals, apparently they had managed to sell it to Continente to be used on Missão Sorriso. It's bad policy not to respond to client requests so we made the effort of rewriting the proposal as requested.

The original proposal consisted of building a band hero clone with instruments made out of recycled materials, and a large projector showing a recovering forest as you would progress in the game. The concept was to raise awareness on the importance of recycling.

The newly requested proposal rewrite would change the concept completely: the game background would now be a sad child who would become happy when you would progress the game. And the game would consist of collecting food items as music. A van would travel the country to schools in different cities, and depending on how well the kids would play the game, Continente would donate more or less food to starving people. So kids could contribute to hunger by having fun. Obviously we could not use recycled materials for instruments, since it was no longer the theme. But as a creative alternative, instead of resorting to standard band hero controllers, we could have more impact by using real instruments (hacked with Arduinos, to make them playable by non musicians).

The development time for the original proposal was of 2 months, the rewrite proposal would have around the same development time. But the client required the project to be ready in a month and a half, working through xmas and new year weeks, to be ready early January. The budget for the original proposal also didn't require buying real instruments, while the new one did. So we presented the new proposal, obviously more expensive then the previous one, since it required overtime work and hardware. Their response to the new proposal was that it was too expensive for the final client and that we should bring it down. And that we should be honest about the price, "without bluffing". We were a bit shocked, had to explain that our prices do not incur any bluff rate, that they are estimated on realistic material cost and realistic man hours to ensure the quality of the project. We showed them the excel sheet of costs for each component and tasks. Asked them where they wanted us to lower and why it would be a bad idea to cut any corners in any of the items. They agreed on the items but requested that we lower it 20% anyways and suggested to use a large screen LCD instead of a projector. We explained that this would make for a lower quality experience, they didn't care, we agreed to lower the price (standard work hours fee, no overtime or subcontracting costs charged) and use the LCD screen.

**Collateral Damage**

Since we now had to work overtime, to accept this project we had to decline others that were non profit. In fact we have an SMS from an angry theatre company manager to prove it. Quick parallel story: we were asked if we would be interested in working for free on a new artistic theater project, and of course, we love artistic projects so we accepted the challenge as long as it didn't demand too much work hours from us. After looking at the extensive schedule of rehearsals they were requesting we realized we couldn't invest resources for this huge amount of time and declined the offer, they begged us to try anyways so we tried to attend a few more work sessions, but again concluded that we couldn't afford to allocate fulltime hours to a non paying project as it was becoming clearly required. We informed them we had to withdraw from the project, but would not mind still providing them with the technology for them to use as they see fit, they would just have to find someone to operate it and we would even help the person learn it. They did not find anyone willing to operate and apparently took our honest withdrawal as an insult of some sort, claiming that Artica will forever be scorned by that company for going back on our word (which we never did, we were always honest and straight-forward).

**It's sold, you can start working!**

Back to GCI's project soap opera: at this point in time we had the proposal approved but to make the deadline, we would also have to start ordering the instruments immediately, to be able to start the hardware hacking process which would still require some experimenting and testing. This was contemplated in the proposal contract they accepted, stating clearly that 60% of the value had to be paid upfront to order the hardware, work would only start after that payment was met. And here comes the bullshit.

They would phone us every other day to ask us how the project is developing, and we would reply it's on hold waiting for the initial payment. In return we were told the project was already sold to the final client, that we could advance. And we would mention again that the payment for the hardware had not been made, so we couldn't advance and that the project was at risk because of this. They claimed the check was already in the mail and that we should email the accounting team to speed up the process, we found that odd (how can an email we speed up something that is already in the mail?!), but we did as requested anyways, wasting time explaining once more the situation. That email was ignored, we questioned the issue again by phone, and were told we should email again. We explained that that fight wasn't ours to battle, ensuring the project kickoff payment was their job, if they did indeed want to proceed with the project. Their response was that it was out of their hands and that if we wanted to get paid before the project (as listed on the contract proposal) we had to mail or call the accounting team directly again and force the issue with them again. We phoned the accounting team again to explain the situation once more and were yet again promised that the check (that we were told one week before was already in the mail) would now be issued and arrive next monday.

**It's an acounting delay**

After many weeks of delay they finally did pay, but only a part of what was on the contract. Getting quite tired of dealing with this idiocy and noticing that the deadline for the project was starting to get severily compromised we gave in and decided to proceed ordering the rest of the hardware at our own cost. Advancing without full agreed payment was a mistake from our part. We should have refused the project.

Weeks continue to pass, they call us now and again to ask how the project is moving along, we tell them it's moving along fine except for the partial missing payments. They tell us that it's out of their hands and that we should mail the accounting department once more. It's just a crying shame that their accounting department only works some days of the week and for a very short period of time during those days. We email again explaining the situation. We phone again explaining the situation. Again they promise it's all taken care of. Again nothing arrives. We get really tired of wasting our time dealing with payment burocracy instead of focusing on the creative part of the project.

We decide it's time to stop work altogether and cut our losses. We mail one last email informing the project is stopped until the agreed payment arrives. They call us back with the same promises. At some point we are told that there is a check already signed and ready to be delivered, that it should be picked up in hand by 16pm of the present day, we agree to go get it, one of us went to central Lisbon in the middle of the heavy traffic afternoon to grab the check, arriving in time but wasting an afternoon of his work time. After waiting for 20 minutes at the reception desk, he was told that the check had just been posted and should arrive the next day.

**The check is in the mail**

That check never arrived. We consulted our lawyer which advised us to deliver the project as usual or they could have legal grounds to dismiss the contracted payment later on. So we worked overtime during christmas and new year to get this unpaid project done. We treated it as we would treat any other project, trying to do something we could be proud of. It's easy to demotivate from a project when your client is a lying piece of shit, but atleast if we did a nice job we would have something cool to showcase in our portfolio.

After many weeks of stressful work overload we were happy to see project working, the client happy with the result and the roadshow get on the road. We gave support through-out the whole roadshow tour, providing spares and repairs when required. Had no complaints from the client from the delivery.

When the roadshow campaign was underway we decided to write a [short press release][6] to announce our participation and get some media attention while it's hot. Even though we hadn't been paid, atleast we would now get some visibility out of this damn thing. It was part of the contract proposal that we could use the project to promote our work. Never occured to us they might have a problem with us doing free advertisement for them, but somehow when our press release reached some channels it was also met disaprovingly by them, claiming we should not have released any media communication without their direct consent, that we could be causing grounds for them to get sued by guitar hero copyright holders, and that this was grounds for breach of contract and non payment to us.

**Enough is enough**

At this point we had enough of dealing with these schemers, so we put our lawyer dealing with them, eventually they reached a payment agreement, eventually they failed the payment agreement, eventually we submitted a debt collection warning, eventually they agreed to another payment agreement, this time with real checks, the last of which we collected by hand today (hope it doesn't bounce), nearly 2 years later.

Good riddance to GCI / Herlox from our lives. Hope to never work with them ever again.

Truth be told we could have ended this post without this section, pretend this project never happened, avoid these final bitter lines, just let bygones be bygones.

But if we did that we wouldn't be true to our values of honesty and transparency.

These kind of situations need to be exposed. The industry culture that supports these kind of situations needs to change. This is not an acceptable way to do business and people should not be afraid to speak up against companies whose modus operandi is to lie and rip each other off. Creative companies should spend their days dealing with the pressures of solving technical and creative problems, not burocratical, legal and financial disputes. Final words of wisdom, remember to always protect yourself with a proper contract agreement before starting work.

[1]: http://gci.pt
[2]: http://projeto80.pt/
[3]: http://missao.continente.pt/
[4]: http://artica.cc/blog/2013/09/26/audience-pong.html
[5]: https://bitbucket.org/artica/continente-music-experience
[6]: http://files.artica.cc/press_releases/140122_missao_sorriso_the_music_experience.pdf
[7]: http://www.pixijs.com/