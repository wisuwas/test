#!/bin/bash

# JUST IN CASE
chown -R cmnadpl:webadm /logs
chmod 777 /logs
# JUST IN CASE

mkdir -p /logs/supervisor

supervisord -n