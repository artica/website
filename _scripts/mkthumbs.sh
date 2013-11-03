#!/bin/bash

thumbsize="270x175"
cd ../assets/images/

for f in `ls -t *-1.*`
do
  if [ ! -f ../thumbs/$f ]
  then
  echo "Convering $f to ../assets/thumbs/$f"
  convert $f -resize "$thumbsize^" -gravity center -crop $thumbsize+0+0 +repage ../thumbs/$f
  fi
done
