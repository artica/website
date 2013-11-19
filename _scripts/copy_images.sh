#!/bin/bash

# from inside the /_scripts/ directory invoke:
# ./copy_images.sh path_to_image_toconvert/image.jpg YYYY-MM-DD-post-name-1.jpg

imagesize="1024x768"
convert "$1" -resize "$imagesize^" -gravity center -crop $imagesize+0+0 +repage ../assets/images/"$2"

thumbsize="270x175"
convert "$1" -resize "$thumbsize^" -gravity center -crop $thumbsize+0+0 +repage ../assets/thumbs/"$2"
