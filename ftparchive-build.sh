apt-ftparchive packages "./debian" > public/Packages
bzip2 -c9k Packages > public/Packages.bz2
gzip -c Packages > public/Packages.gz
