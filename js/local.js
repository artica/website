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
                else
                {
                    html+='<br/>';
                }
                html+='<small>'+post.excerpt+'</small></a></div></li>';
            }
        }
        else
        {
            html='<li>Nothing found. Try to be more specific, search by keywords.</li>';
        }
        elm.innerHTML=html;
    },100);
}

window.onload=OnLoadTasks;
var searchtimer = false;
