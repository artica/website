Artica's Website
================

*Last update: Tue Sep  8 10:38:59 WEST 2015*

This is the new Artica's website built around Jekyll and GitHub pages.

Setting up your environment
---------------------------

Before you start editing and modifying this website, you need to install a few tools first.

You will need a GitHub account and familiarity with git and its basic operations. If not, please take 30 minutes and read this [Guide][2] and these [Pages][3].

You should start by cloning this repository in a local folder of your choice.

```
git clone git@github.com:Artica/website.git ~/Documents
```

Congratulations! You just cloned this repository to `~/Documents/website`.

You now have a local copy of our website on your computer that you can edit and browse.

Jekyll
------

Artica's website uses [GitHub Pages][1], which runs with [Jekyll][4]. Jekyll is a simple, blog-aware static site generator. 

Please follow these steps to install Jekyll on your computer:

```
sudo gem update --system
sudo gem install jekyll
```

*Note that using `sudo`, you will be asked for you password.*

For more information on getting started with Jekyll, check [this page][5].

Jekyll uses the [Liquid templating][8] system.

Running the website
-------------------

Running your local copy of the Artica's website couldn't be easier. Open a terminal window and type the following:

```
cd ~/Documents/website
jekyll serve
```

At this point, you should see something similar to this:

```
$ jekyll serve --watch --baseurl '' -t
Configuration file: ~/Documents/website/_config.yml
            Source: ~/Documents/website
       Destination: ~/Documents/website/_site
      Generating... done.
 Auto-regeneration: enabled
  Server running... press ctrl-c to stop.
```

*Note that the path to the configuration file, source and destination might change depending on where you cloned the repository.*

Congratulations! You can open [http://localhost:4000](http://localhost:4000) with your favorite browser and browse just as usual. Pretty cool huh?

InK
---

This website uses [InK][6], a set of tools for quick development of web interfaces. It offers a fluid and responsive grid, common UI elements, interactive components, a design-first approach with ease of use and simplicity at its core. Start integrating Ink into your projects and remove the hassle of building the basics, focusing on what matters.

InK provides modern responsive CSS patterns different devices, which means this website will work well on desktop, phones or tablets.

So, how do I, like, do stuff and all?
-------------------------------------

Writing a blog post, or changing any section of the website might seem tricky at first. But as soon as you get comfortable with [git][3], [Jekyll] [7], [Liquid templating] [8] and [Ink] [6], you'll find that not only it's easy and simple to operate, but also clean and powerful. 

And again, everything is local and static, no external dependencies, databases or dynamic languages to worry about.

So let's get busy. Here are your recipes:

 * Writing a [blog post](BLOGPOST.md)

[1]: http://pages.github.com/                                        "GitHub Pages"
[2]: https://help.github.com/articles/set-up-git                     "Set Up Git"
[3]: https://help.github.com/categories/19/articles                  "Using Git"
[4]: https://help.github.com/articles/using-jekyll-with-pages        "Using Jekyll with Pages"
[5]: http://jekyllrb.com/docs/installation/                          "Jekyll Installation"
[6]: http://ink.sapo.pt/                                             "InK - Interface Kit"
[7]: http://jekyllrb.com/                                            "Jekyll"
[8]: https://github.com/Shopify/liquid/wiki/Liquid-for-Designers     "Liquid templating"
