#!/usr/bin/env node

'use strict';

var express = require('express');
var node_path = require('path');

var app = express();
var SERVER_ROOT = node_path.join(__dirname, '..', 'www');

app.listen(9075);

app.use(express.static(SERVER_ROOT));
app.use(express.directory(SERVER_ROOT));

require('child_process').exec('open http://localhost:9075');