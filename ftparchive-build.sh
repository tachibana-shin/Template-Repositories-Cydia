apt-ftparchive packages "./debian" > Packages
bzip2 -c9k Packages > Packages.bz2
gzip -c Packages > Packages.gz
