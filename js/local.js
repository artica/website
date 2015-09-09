(function($, window) {

  // --------------------------------------------------------------------------
  // Google Analytics
  // --------------------------------------------------------------------------

  var Analytics = {
    init: function() {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-45360427-1', 'artica.cc');
      ga('send', 'pageview');
    }
  };

  // --------------------------------------------------------------------------
  // Disqus
  // --------------------------------------------------------------------------

  var Disqus = {
    init: function() {
      (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = '//' + 'artica' + '.disqus.com/count.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
      }());
    }
  };

  // --------------------------------------------------------------------------
  // Google Maps
  // --------------------------------------------------------------------------

  var Map = {
    canvas: $('#google-maps'),
    latitude: 38.660733,
    longitude: -9.203067,
    centerLatitude: 38.681624,
    centerLongitude: -9.198475,
    zoom: 13,
    center: function() {
      return {
        'center': Map.centerLatitude + ',' + this.centerLongitude,
        'zoom': this.zoom,
        'scrollwheel': false,
        'mapTypeId': google.maps.MapTypeId.SATELLITE
      };
    },
    marker: function() {
      return {
        'position': this.latitude + ',' + this.longitude,
        'bounds': false,
        'draggable': false
      };
    },
    init: function() {
      if(typeof google !== 'undefined') {
        Map.canvas
          .gmap(Map.center())
          .bind('init', function() {
            Map.canvas.gmap('addMarker', Map.marker())
          });
      }
    }
  };
  
  // --------------------------------------------------------------------------
  // Word slider
  // --------------------------------------------------------------------------

  var WordSlider = {
    slider: $('#word-slider'),
    words: ['impactful', 'beautiful', 'meaningful', 'inspirational', 'awesome', 'inspiring'],
    width: [107, 102, 128, 140, 106, 95], 
    index: 0,
    timer: 6000,
    init: function() {
      setInterval(function() {
        var position = WordSlider.index++ % WordSlider.words.length;
        
        WordSlider.slider
          .css({'opacity': 0})
          .animate({'width': WordSlider.width[position] + 10 + 'px'}, WordSlider.timer/6)
          .text(WordSlider.words[position])
          .animate({'opacity': 1}, WordSlider.timer/6)
          .delay(WordSlider.timer/2)
          .animate({'opacity': 0}, WordSlider.timer/6);
        
      }, WordSlider.timer);
    }
  };

  // --------------------------------------------------------------------------
  // Functions
  // --------------------------------------------------------------------------

  // ==========================================================================

  // --------------------------------------------------------------------------
  // Displays random blog posts
  // --------------------------------------------------------------------------

  Array.prototype.contains = function(obj) {
    var i = this.length;

    while (i--) {
      if (this[i] === obj) {
        return true;
      }
    }
    return false;
  }

  function printRandomPosts(posts, num) {
    var prs = [];
    var pc = 0;
    var elm = document.getElementById('relatedposts');
    var html = '';
    
    for(var i = 0; i < posts.length; i++) {
      var pid = Math.floor(Math.random() * posts.length);

      if(!prs.contains(pid)) {
        var post = posts[pid];

        if(post.thumbnail.length && post.title.search(/workshop/i) == -1) {
          html += '<li class="column-group gutters bweffect"><div class="large-100"><b><a href="' + post.url + '">' + post.title + '</b></h4><a href="' + post.url + '"><img class="bw" src="' + post.thumbnail + '"><small>' + post.excerpt + '</small></a></div></li>';
          prs.push(pid);
          pc++;

          if(pc >= num) {
            break;
          }
        }
      }
    }

    // Temporary hack to prevent exception if current page is not a blog post

    try { elm.innerHTML = html; } catch(e) {}
  }

  // TODO: Refactor

  // var RandomPost = {};

  // --------------------------------------------------------------------------
  // Set active class to current menu item page
  // --------------------------------------------------------------------------

  var ActivePage = {
    init: function() {
      var id = null;

      if(window.location.pathname.search(/^\/blog\//i) !== -1) { id = 'nav_blog'; }
      if(window.location.pathname.search(/^\/projects\//i) !== -1) { id = 'nav_projects'; }
      if(window.location.pathname.search(/^\/robotics\//i) !== -1) { id = 'nav_robotics'; }
      if(window.location.pathname.search(/^\/einstein\//i) !== -1) { id = 'nav_einstein'; }
      if(window.location.pathname.search(/^\/team\//i) !== -1) { id = 'nav_team'; }

      if(id) {
        var element = document.getElementById(id);
        
        if(element) { element.className = 'active'; }
      }
    }
  };

  // --------------------------------------------------------------------------
  // Fade all the 'fadein' classes
  // --------------------------------------------------------------------------

  function fade(element) {
    var op = 0;  // initial opacity

    element.style.opacity = 0;
    element.style.filter = 'alpha(opacity=0)';
    element.style.visibility = "visible";

    var timer = setInterval(function () {
      if (op >= 1){
        clearInterval(timer);
      }
      op += 0.1;
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    }, 50);
  }

  // TODO: Refactor

  // var FadeElement = {};

  function search(elmid) {
    var term = document.getElementById('searchterm').value;
    var elm = document.getElementById(elmid);

    if(term.length <= 3) {
      return;
    }

    if(searchtimer !== false) clearInterval(searchtimer);

    elm.innerHTML = 'searching...';

    searchtimer = setTimeout(function () {
      var results = index.search(term);
      var html = '';

      if(results.length) {
        for(var i = 0; i < results.length && i < 8; i++) {
          var id = results[i].ref;
          var post = posts[id];
          
          html += '<li class="column-group gutters bweffect"><div class="large-100"><b><a href="' + post.url + '">' + post.title + '</b></h4><a href="' + post.url + '">';

          if(post.thumbnail) {
            html += '<img src="' + post.thumbnail + '">';
          }
          else {
            html += '<br/>';
          }

          html += '<small>' + post.excerpt + '</small></a></div></li>';
        }
      }
      else {
        html = '<li>Nothing found. Try to be more specific, search by keywords.</li>';
      }

      elm.innerHTML = html;
    }, 100);
  }

  function OnLoadTasks() {
    Analytics.init();           // Google Analytics
    Disqus.init();              // Disqus
    Map.init();                 // Google Maps
    WordSlider.init();          // Initializes home page word slideshow
    printRandomPosts(posts, 5); // Displays random blog posts
    ActivePage.init();          // Set active class to current menu item page
    prettyPrint();              // Prettifyer
    
    // Fade all the 'fadein' classes
    var fades = document.getElementsByClassName('fadein');
    
    for (var i = fades.length - 1; i >= 0; i--) {
      fade(fades[i]);
    }
  }

  // window.onload = OnLoadTasks;
  var searchtimer = false;

  $(document).ready(OnLoadTasks);
}(jQuery, window, undefined));