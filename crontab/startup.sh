#!/bin/ash

echo "Initialize log symlink"

echo '' >> /logs/smeweb_DEBUG.log.$(date +%Y%m%d)
(cd /logs/; unlink smeweb_DEBUG.log; ln -s smeweb_DEBUG.log.$(date +%Y%m%d) smeweb_DEBUG.log)
#unlink /logs/smeweb_DEBUG.log
#ln -s /logs/smeweb_DEBUG.log.$(date +%Y%m%d) /logs/smeweb_DEBUG.log

echo "chown cmnadpl"
chown -R cmnadpl:webadm /logs/smeweb_*

crond -f
