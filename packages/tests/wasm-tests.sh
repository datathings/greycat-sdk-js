#!/bin/bash

# Serve ./dist content on localhost:5000
yarn serve dist &
SERVE_PID=$!

sleep 2;

# run tests using puppeteer
mocha-headless-chrome -f http://localhost:5000 -a no-sandbox -a disable-setuid-sandbox
RESULT=$?

kill $SERVE_PID;
exit $RESULT;
