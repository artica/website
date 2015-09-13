Writing a blog post
===================

A blog post is nothing but a simple text file in the [_posts/blog](_posts/blog) folder, following this notation:

```
YYYY-MM-DD-simple-and-unique-permalink-name.markdown
```

The file is split in two parts.

First the YAML section (aka Jekyll [Front-matter][1]):

```
---
layout: post
date: 2011-03-14 19:31:24 UTC
title: "Farrusco Road Trip"
categories: blog
excerpt: "Now that you\'ve met Farrusco, we can explain you some our work."
longexcerpt: "Now that you\'ve met Farrusco, we can explain you some our work.
  In one of it initial iterations, Farrusco had a camera on it and was controlled
  remotely via xbee."
thumbnail: /assets/thumbs/2010-12-29-articas-headquarters-1.jpg
frontimage: /assets/images/2010-12-29-articas-headquarters-1.jpg
---
```

And then the content of you blog post in Markdown/HTML: 

```
<p>
In one of it initial iterations, Farrusco had a camera on it and was controlled remotely
via xbee. It was developed by Guilherme Martins in a project called
<a href="http://lab.guilhermemartins.net/2010/04/11/swars/">SWARS (See What A Robot Sees)</a>.
</p>

<div class="video-container">
    <iframe src="http://player.vimeo.com/video/20996176?portrait=0" frameborder="0" allowfullscreen></iframe>
</div>

<p>
Guilherme purposed to Nuno Morgadinho and Ana Aires to develop a remote control via
web application during the AZResidency, an artistic residency promoted by Rui Horta
that took place in the beautiful Convento da Saudação in Montemor-o-Novo.
</p>

<img src="/assets/images/2012-09-04-farrusco-v2-stage-0-1.jpg">
```

Here's an [example of a post](_posts/blog/2011-03-14-farrusco-road-trip.markdown) (press the RAW button to see the source)

YAML section
------------

This section is made of **key: value** pairs, one per line. Here's the list we use:

<table>
    <tr>
        <td>key</td>
        <td>value</td>
        <td><em>observations</em></td>
    </tr>
    <tr>
        <td><b>layout</b></td>
        <td>post</td>
        <td>always use the <em>post</em> layout for blog posts</td>
    </tr>
    <tr>
        <td><b>date</b></td>
        <td>YYYY-MM-DD HH:MM:SS UTC</td>
        <td>date of the post, 24 hour format, with leading zeros</td>
    </tr>
    <tr>
        <td><b>title</b></td>
        <td>"Jekyll\'s escaped title"</td>
        <td>JSON escaped post title</td>
    </tr>
    <tr>
        <td><b>categories</b></td>
        <td>blog<br/>projects<br/>projection<br/>physical<br/>interactive<br/>education<br/>customrobotics<br/>workshop</td>
        <td>list of space separated categories. The <em>blog</em> category is obligatory</td>
    </tr>
    <tr>
        <td><b>excerpt</b></td>
        <td>"Post\'s first paragraph"</td>
        <td>An excerpt of the post. Short paragraph</td>
    </tr>
    <tr>
        <td><b>longexcerpt</b></td>
        <td>"Post\'s first two paragraphs"</td>
        <td>A longer excerpt of the post. Two paragraphs is ok</td>
    </tr>
    <tr>
        <td><b>thumbnail</b></td>
        <td>/assets/thumbs/post.png</td>
        <td>(optional) Thumbnail image path. Used for search results and recommendations.</td>
    </tr>
    <tr>
        <td><b>frontimage</b></td>
        <td>/assets/images/post.png</td>
        <td>(optional) Big image, representative of the content, path. Used in listings and headlines.</td>
    </tr>
</table>

Notes:

 * The string values must be JSON escaped. " and ' should become \" and \'
 * The order of the keys is irrelevant

Markdown/HTML section
---------------------

This is the body of the blog post. You can use both pure HTML or [Markdown] [3]. We're using the [Redcarpet] [4] parser.

Our CSS stylesheet uses a few classes to improve the display and responsiveness of some elements:

 ___videocontainer___

Use it around the vimeo or youtube embed code.

```
<div class="video-container">
    <iframe src="//www.youtube.com/embed/H9W1wmIl8YU" frameborder="0" allowfullscreen></iframe>
</div>
```

Notes:

 * Do not use any other custom classes on your HTML, just pure non styled HTML.
 * Images should be local. Do not reference images from flickr or external services.
 * Do not specify the height and width of an image. Just use img src="..."
 * Normal post images should be hosted at [assets/images/](assets/images/) with width 1024px
 * Thumbnail images should be hosted at [assets/thumbs/](assets/thumbs/) width width 270px
 * In images and local assets, always use relative links starting with / (ie: /assets/images/post.png), never absolute.

Here's a [boilerplate](_templates/2013-10-31-template-post.markdown) to start a new post.

[back to main](README.md)

[1]: http://jekyllrb.com/docs/frontmatter/                           "Front-matter"
[2]: https://help.github.com/articles/github-flavored-markdown       "Github flavored markdown"
[3]: http://daringfireball.net/projects/markdown/                    "Markdown"
[4]: https://github.com/vmg/Redcarpet                                "Redcarpet"

