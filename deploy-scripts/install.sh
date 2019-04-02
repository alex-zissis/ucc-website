#!/usr/bin/env bash
set -e

# update instance
yum -y update

# add nodejs to yum
curl --silent --location https://rpm.nodesource.com/setup_10.x | bash -
yum -y install nodejs

# install pm2
npm install -g pm2
