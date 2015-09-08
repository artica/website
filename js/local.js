(function($, window) {

  // --------------------------------------------------------------------------
  // Google Analytics
  // --------------------------------------------------------------------------

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    console.log('google analytics');
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-45360427-1', 'artica.cc');
  ga('send', 'pageview');

  // --------------------------------------------------------------------------
  // Disqus
  // --------------------------------------------------------------------------

  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var disqus_shortname = 'artica'; // required: replace example with your forum shortname

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function () {
    var s = document.createElement('script'); s.async = true;
    s.type = 'text/javascript';
    s.src = '//' + disqus_shortname + '.disqus.com/count.js';
    (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
  }());

  // --------------------------------------------------------------------------
  // Google Maps
  // --------------------------------------------------------------------------

  var lat=38.660733;
  var lon=-9.203067;
  var center_lat=38.681624;
  var center_lon=-9.198475;
  var map_zoom=13;

  var map=$('#map_canvas').gmap({
      'center': center_lat + ',' + center_lon,
      'zoom': map_zoom,
      'scrollwheel': false
  }).bind('init', function() {

      $('#map_canvas').gmap('option', 'mapTypeId', google.maps.MapTypeId.SATELLITE);

      var latlng = new google.maps.LatLng(lat,lon);

      $('#map_canvas').gmap('addMarker', {
          'position': lat + ',' + lon,
          'bounds': false,
          'draggable': true
      });
  });
  
  // --------------------------------------------------------------------------
  // Functions
  // --------------------------------------------------------------------------

  function printRandomPosts(posts,num) {
    var prs=[];
    var pc=0;
    var elm = document.getElementById('relatedposts');
    var html='';
    
    for(var i=0;i<posts.length;i++) {
      var pid=Math.floor(Math.random() * posts.length);
    
      if(!prs.contains(pid)) {
        var post=posts[pid];
    
        if(post.thumbnail.length && post.title.search(/workshop/i)==-1) {
          html+='<li class="column-group gutters bweffect"><div class="large-100"><b><a href="'+post.url+'">'+post.title+'</b></h4><a href="'+post.url+'"><img class="bw" src="'+post.thumbnail+'"><small>'+post.excerpt+'</small></a></div></li>';
          prs.push(pid);
          pc++;
          if(pc>=num) break;
        }
      }
    }
    elm.innerHTML=html;
  }

  Array.prototype.contains = function(obj) {
    var i = this.length;
   
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
  }

  function NavbarSelect() {
    var id = null;

    if(window.location.pathname.search(/^\/blog\//i)!==-1) id="nav_blog";
    if(window.location.pathname.search(/^\/projects\//i)!==-1) id="nav_projects";
    if(window.location.pathname.search(/^\/robotics\//i)!==-1) id="nav_robotics";
    if(window.location.pathname.search(/^\/einstein\//i)!==-1) id="nav_einstein";
    if(window.location.pathname.search(/^\/team\//i)!==-1) id="nav_team";
    if(id) {
      var elm = document.getElementById(id);
      
      if(elm) elm.className = 'active';
    }
  }

  function OnLoadTasks() {
    // Set active class to current menu item page
    NavbarSelect();

    // Prettifyer
    prettyPrint();
    
    // Fadein all the "fadein" classes
    var fades = document.getElementsByClassName("fadein");
    for (var i = fades.length - 1; i >= 0; i--) fade(fades[i]);
  }

  function fade(element) {
    var op = 0;  // initial opacity
   
    element.style.opacity = 0;
    element.style.filter = 'alpha(opacity=0)';
    element.style.visibility="visible";
   
    var timer = setInterval(function () {
        if (op >= 1){
          clearInterval(timer);
        }
        op += 0.1;
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    }, 50);
  }

  function search(elmid) {
    var term=document.getElementById('searchterm').value;
    var elm = document.getElementById(elmid);

    if(term.length<=3) {
        return;
    }

    if(searchtimer!==false) clearInterval(searchtimer);

    elm.innerHTML='searching...';

    searchtimer = setTimeout(function () {
      var results=index.search(term);
      var html='';

      if(results.length) {
        for(var i=0;i<results.length && i<8;i++) {
            var id=results[i].ref;
            var post=posts[id];
            html+='<li class="column-group gutters bweffect"><div class="large-100"><b><a href="'+post.url+'">'+post.title+'</b></h4><a href="'+post.url+'">';
        
            if(post.thumbnail) {
                html+='<img src="'+post.thumbnail+'">';
            }
            else {
              html+='<br/>';
            }
            html+='<small>'+post.excerpt+'</small></a></div></li>';
        }
      }
      else {
        html='<li>Nothing found. Try to be more specific, search by keywords.</li>';
      }
      elm.innerHTML=html;
    },100);
  }

  window.onload = OnLoadTasks;
  var searchtimer = false;
}(jQuery, window, undefined));