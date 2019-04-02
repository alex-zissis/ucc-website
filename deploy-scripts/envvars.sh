#!/bin/bash

echo "CLOUDINARY_URL=$CLOUDINARY_URL" > .env
echo "COOKIE_SECRET=$COOKIE_SECRET" >> .env
echo "UCC_EMAIL=$UCC_EMAIL" >> .env
echo "UCC_PASS=$UCC_PASS" >> .env
echo "NODE_ENV=production" >> .env