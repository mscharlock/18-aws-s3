'use strict';
const debug = require('debug')('cfgram:server');

//express
const express = require('express');
const router = express.Router();
const app = express();

//mongoose
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let mongoConnection = mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

//router middleware
require('../route/route-auth')(router);
require('../route/route-gallery')(router);
