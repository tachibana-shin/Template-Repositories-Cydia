#!/bin/bash

if ! [ -d ./public ]; then
  mkdir ./public
fi

checkCommand() {
  if ! [ command -v $1 ]; then
    echo "\e[1;41m> Please run\e[0m pkg install $1"
    exit 0
  fi
}

checkCommand apt-ftparchive
checkCommand bzip2
checkCommand gzip

apt-ftparchive packages "./debian" > public/Packages
bzip2 -c9k public/Packages > public/Packages.bz2
gzip -c public/Packages > public/Packages.gz

exit 0
