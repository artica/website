Artica's Website
================

This is the new Artica's website built around Jekyll and Github pages.


Setting up your environment
---------------------------

Before you start editing and modifying this website, you need to install a few tools first.

We assume you have a Github account and are familiar with git at this point, or at leat you understand the concept of cloning, branches, pushing, pulling and commiting code. If not, please take 30 minutes and read this [Guide] [2] and these [Pages] [3]

Now that you're done with git, start by cloning this repository in a local folder of your choice.

```
cd ~/Documents
git clone git@github.com:celso/articacc.git
cd articacc
```

Congratulations, you now have a fully working, editable and browseable website on your computer.

Jekyll
------

Artica's website uses [Github Pages] [1], which in turn uses [Jekyll] [4], a simple, blog aware static site generator. To install Jekyll in your computer, follow these steps:

```
sudo gem update --system
sudo gem install jekyll
```

For more information on how to install Jekyll, check [this page] [5].

Jekyll uses the [Liquid templating] [8] system.

Running the website
-------------------

Running your local copy of the Artica's website couldn't be easier. Open a terminal and type this:

```
cd ~/Documents/articacc
jekyll serve --watch --baseurl '' -t
```

This is what your should see:

```
$ jekyll serve --watch --baseurl '' -t
Configuration file: /servers/articacc/_config.yml
            Source: /servers/articacc
       Destination: /servers/articacc/_site
      Generating... done.
 Auto-regeneration: enabled
  Server running... press ctrl-c to stop.
```

Congratulations, you can now head up to [http://localhost:4000](http://localhost:4000) with your favorite browser and navigate normally, as if it was the production website. This allows to change anything you want locally, then commit and push the changes to the real website. Pretty cool eh?

InK
---

The Website uses [InK] [6], a set of tools for quick development of web interfaces. It offers a fluid and responsive grid, common interface elements, interactive components, a design-first approach with ease of use and simplicity at its core. Start integrating Ink in your projects and remove the hassle of building the basics, staying free to focus on what's important.

InK provides modern responsive CSS patterns for many devices, meaning this website will work well on the desktop, smartphones or tablets.

So, how do I, like, do stuff and all?
-------------------------------------

Writing a blog post, or changing any section of the website can be complicated at first, but as soon as you get familiarized with [git] [3], [Jekyll] [7], [Liquid templating] [8] and [Ink] [6], you'll find not only it's easy and simple to operate, but also clean and powerful. And again, everything is local and static, no external dependencies, databases or dynamic languages to worry about.

So let's get busy. Here's your recipes:

 * Writing a [blog post](BLOGPOST.md)
 * Changing the [homepage](HOMEPAGE.md)

  [1]: http://pages.github.com/                                        "Github Pages"
  [2]: https://help.github.com/articles/set-up-git                     "Set Up Git"
  [3]: https://help.github.com/categories/19/articles                  "Using Git"
  [4]: https://help.github.com/articles/using-jekyll-with-pages        "Using Jekyll with Pages"
  [5]: http://jekyllrb.com/docs/installation/                          "Jekyll Installation"
  [6]: http://ink.sapo.pt/                                             "InK - Interface Kit"
  [7]: http://jekyllrb.com/                                            "Jekyll"
  [8]: https://github.com/Shopify/liquid/wiki/Liquid-for-Designers     "Liquid templating"

