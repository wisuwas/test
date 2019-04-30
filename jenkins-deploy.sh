#!/bin/bash

echo "Initializing"
USER=deployment
HOST=th-cloud-3.findx.co.th
PATH=/home/deployment/domains/findx.co.th/sub/smeweb-client

echo "Stop running service"
/usr/bin/ssh $USER@$HOST "cd $PATH; docker-compose down;"

echo "Copy file to server"
/usr/bin/ssh $USER@$HOST "rm -rf $PATH"
/usr/bin/rsync -avz . -e '/usr/bin/ssh' $USER@$HOST:$PATH

echo "Resolve dependencies"
/usr/bin/ssh $USER@$HOST "cd $PATH; sh build-images.sh"

echo "Start smeweb-client docker"
/usr/bin/ssh $USER@$HOST "cd $PATH; docker-compose up -d"
