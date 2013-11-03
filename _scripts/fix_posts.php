#!/usr/bin/php -q
<?php

date_default_timezone_set("Europe/Lisbon");

if($argc!=2) {
	echo "syntax: ".$argv[0]." post_file_path.markdown\n";
	exit;
}

if($post=@file_get_contents($argv[1])) {
	// 0. get permalink
	if(preg_match_all("/(.*)(\d{4})-(\d{2})-(\d{2})-(.*)\.markdown/",$argv[1],$perma)) {
        $date=$perma[2][0]."-".$perma[3][0]."-".$perma[4][0];
		$pi=pathinfo($argv[1]);
		file_put_contents("/tmp/".$pi['basename'],$post);
		echo "Backup at /tmp/".$pi['basename']."\n";
		$images_path=$pi['dirname']."/../../assets/";
        $perma=$perma[5][0];
	}
	else
	{
		echo "File ".$argv[1]." has the wrong name.\n";
		exit;
	}

	// 1. fix photos with <a>, making them local
    preg_match_all("/<a href=\"(.*)\"(.*)?><img(.*)src=\"(.*)\"(.*)?><\/a>/U",$post,$images);
    for($i=0;$i<sizeof($images[0]);$i++) {
    	$link=$images[1][$i];
    	$src=$images[4][$i];

    	// find extension
    	$exts=preg_split("/\./",$src);
        $iext=strtolower($exts[sizeof($exts)-1]);
        if(!preg_match("/(png|jpg|jpeg|gif|bmp)/i", $iext)) $iext="jpg";
    	$local=$date."-".$perma."-".($i+1).".".$iext;
    	$local_path=$images_path."images/".$local;

    	// fint title and alt
    	preg_match_all("/title=\"(.*)\"/U",$images[0][$i],$metas);
    	$alt='';
    	$title='';
        if(sizeof($metas[0])) {
        	$title=$metas[1][0];
        }
        preg_match_all("/alt=\"(.*)\"/U",$images[0][$i],$metas);
        if(sizeof($metas[0])) {
        	$alt=$metas[1][0];
        }
        // download photos, make them local
        // if it is a flick url, lets make it's the "b" (1024) size

        if(!@file_exists($local_path)) {

            echo "Downloading ".$src."\n";

        	$gi=false;
	        if(strstr($src,"staticflickr.com")) {
	        	$src_b=preg_replace("/(.*)staticflickr\.com\/(.*)_(.*).jpg/","$1staticflickr.com/$2_b.jpg",$src);
	        	// try the 1024 image
	        	if($data=http_get_contents($src_b)) {
	        		file_put_contents($local_path,$data);
	        		$gi=true;
	        	}
	        }

        	if($gi==false && $data=http_get_contents($src)) {
        		file_put_contents($local_path,$data);
        	}

    	}

    	$post=str_replace($images[0][$i],'<a href="'.$link.'" title="'.$title.'"><img src="/assets/images/'.$local.'" alt="'.$alt.'"></a>',$post);

        // set frontimage and thumbnail
        if($i==0) {
            $post=preg_replace("/frontimage: (.*)/","frontimage: /assets/images/".$local,$post);
            $post=preg_replace("/thumbnail: (.*)/","thumbnail: /assets/thumbs/".$local,$post);
        }

    	/*
	    echo "title: ".$title."\n";
	    echo "alt: ".$alt."\n";
	    echo "link: ".$link."\n";
	    echo "src: ".$src."\n";
	    echo "local: ".$local."\n";
	    echo "local_path: ".$local_path."\n";
	    echo "\n";
	    */

    }

    file_put_contents($argv[1],$post);

    echo "\nDone. Now go to /assets/ and\n\n";
    echo "  git add images/*\n";
    echo "  git add thumbs/*\n";
    echo "\nYou may want to run mkthumbs.sh too\n";
}
else
{

	echo "Can't open file ".$argv[1]."\n";
	exit;
}


function generate_user_permalink($str){
	setlocale(LC_ALL, 'en_US.UTF8');
	$plink = iconv('UTF-8', 'ASCII//TRANSLIT', $str);
	$plink = preg_replace("/[^a-zA-Z0-9\/_| -]/", '', $plink);
	$plink = strtolower(trim($plink, '-'));
	$plink = preg_replace("/[\/_| -]+/", '-', $plink);
 	return $plink; 
}

function http_get_contents($url,$proxy=false,$user=null,$pass=null,$cookies=null) {
	#echo "Getting $url\n";
	$ch = curl_init();
	curl_setopt ($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US; rv:1.8.1.14) Gecko/20080404 Firefox/2.0.0.14');
	curl_setopt ($ch, CURLOPT_URL, $url);
	curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt ($ch, CURLOPT_FOLLOWLOCATION,1);
	curl_setopt ($ch, CURLOPT_HEADER,0);
	#curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "Expect:");
	curl_setopt($ch,  CURLOPT_COOKIEJAR, "/tmp/".sha1($url).".cookie");
	curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 10);
	curl_setopt ($ch, CURLOPT_TIMEOUT, 10);
	if($cookies) {
		curl_setopt($ch, CURLOPT_COOKIE, $cookies);
	}
	curl_setopt($ch,CURLOPT_VERBOSE,false);

	if($user!=null) {
		curl_setopt($ch,CURLOPT_USERPWD,$user.":".$pass);
	}
	$r=curl_exec($ch);
	$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
	curl_close($ch);
	if($http_code==200||$http_code==302) {
		return($r);
	}
return(false);
}

?>
