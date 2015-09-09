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
      if (typeof google !== 'undefined') {
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
  // Set active class to current menu item page
  // --------------------------------------------------------------------------

  var ActivePage = {
    init: function() {
      var id = null;

      if (window.location.pathname.search(/^\/blog\//i) !== -1) { id = 'nav_blog'; }
      if (window.location.pathname.search(/^\/projects\//i) !== -1) { id = 'nav_projects'; }
      if (window.location.pathname.search(/^\/robotics\//i) !== -1) { id = 'nav_robotics'; }
      if (window.location.pathname.search(/^\/einstein\//i) !== -1) { id = 'nav_einstein'; }
      if (window.location.pathname.search(/^\/team\//i) !== -1) { id = 'nav_team'; }

      if (id) {
        var element = document.getElementById(id);
        
        if (element) { element.className = 'active'; }
      }
    }
  };

  // --------------------------------------------------------------------------
  // Fade all the elements with a 'fadein' class
  // --------------------------------------------------------------------------

  var FadeElement = {
    elements: $('.fadein'),
    init: function() {
      FadeElement.elements
        .delay(1000)
        .each(function() {
          $(this).animate({'opacity': 1}, 1000);
        });
    }
  };

  // --------------------------------------------------------------------------
  // Displays random blog posts
  // --------------------------------------------------------------------------

  var RandomPost = {
    collection: [],
    count: 0,
    element: $('#relatedposts'),
    source: '',
    max: 5,
    contains: function(array, object) {
      var i = array.length;
      while (i--) { 
        if (array[i] === object) { return true; } 
      }
      return false;
    },
    init: function() {
      for(var i = 0; i < posts.length; i++) {
        var pid = Math.floor(Math.random() * posts.length);

        if (!RandomPost.contains(RandomPost.collection, pid)) {
          var post = posts[pid];

          if (post.thumbnail.length && post.title.search(/workshop/i) == -1) {
            RandomPost.source += '<li class="column-group gutters bweffect"><div class="large-100"><b><a href="' + post.url + '">' + post.title + '</b></h4><a href="' + post.url + '"><img class="bw" src="' + post.thumbnail + '"><small>' + post.excerpt + '</small></a></div></li>';
            RandomPost.collection.push(pid);
            RandomPost.count++;

            if (RandomPost.count >= RandomPost.max) { break; }
          }
        }
      }

      if(!window.location.pathname.search(/^\/blog\//i)) { 
        RandomPost.element
          .hide()
          .html(RandomPost.source)
          .fadeIn(1000); 
      }
    }
  };

  var Search = {
    element: $('#search-form'),
    search: function(elmid) {
      var term = document.getElementById('searchterm').value;
      var elm = document.getElementById(elmid);

      if (term.length <= 3) {
        return;
      }

      if (searchtimer !== false) clearInterval(searchtimer);

      elm.innerHTML = 'searching...';

      searchtimer = setTimeout(function () {
        var results = index.search(term);
        var html = '';

        if (results.length) {
          for(var i = 0; i < results.length && i < 8; i++) {
            var id = results[i].ref;
            var post = posts[id];
            
            html += '<li class="column-group gutters bweffect"><div class="large-100"><b><a href="' + post.url + '">' + post.title + '</b></h4><a href="' + post.url + '">';

            if (post.thumbnail) {
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
    },
    init: function() {
      Search.element.on('change', function(e) {
        e.preventDefault();
        Search.search('relatedposts');
      });
    }
  };

  function search(elmid) {
    var term = document.getElementById('searchterm').value;
    var elm = document.getElementById(elmid);

    if (term.length <= 3) {
      return;
    }

    if (searchtimer !== false) clearInterval(searchtimer);

    elm.innerHTML = 'searching...';

    searchtimer = setTimeout(function () {
      var results = index.search(term);
      var html = '';

      if (results.length) {
        for(var i = 0; i < results.length && i < 8; i++) {
          var id = results[i].ref;
          var post = posts[id];
          
          html += '<li class="column-group gutters bweffect"><div class="large-100"><b><a href="' + post.url + '">' + post.title + '</b></h4><a href="' + post.url + '">';

          if (post.thumbnail) {
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
    ActivePage.init();          // Set active class to current menu item page
    FadeElement.init();         // Fade all the elements with a 'fadein' class
    RandomPost.init();          // Displays random blog posts
    Search.init();              // Search engine
    prettyPrint();              // Prettifyer
  }

  // window.onload = OnLoadTasks;
  var searchtimer = false;

  $(document).ready(OnLoadTasks);
}(jQuery, window, undefined));