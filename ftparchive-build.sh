#!/bin/bash

if ! [ -d ./public ]; then
  mkdir ./public
fi

apt-ftparchive packages "./debian" > public/Packages
bzip2 -c9k public/Packages > public/Packages.bz2
gzip -c public/Packages > public/Packages.gz

exit 0
