---
title: List of Posts in Javascript
---

var posts=[];
{% for post in site.posts %}{% for category in post.categories %}{% if category == "blog" and post.excerpt != "" %}
posts.push({url: '{{ post.url }}',thumbnail: '{{ post.thumbnail }}',title: '{{ post.title | escape }}',excerpt: '{{ post.excerpt | escape }}'});
{% endif %}{% endfor %}{% endfor %} 

var index = lunr(function () {
    this.field('title', {boost: 10})
    this.field('excerpt')
    this.field('url')
    this.field('thumbnail')
    this.ref('id')
});

for(var i=0;i<posts.length;i++) {
    var post=posts[i];
    if(post.title.search(/workshop/i)==-1) {
        index.add({
            id: i,
            title: post.title,
            excerpt: post.excerpt,
            url: post.url
        });
    }
}