'use strict';

const faker = require('faker');
const mocks = require('../lib/mocks');
const server = require('../../lib/server');
const Gallery = require('../../model/gallery');
const superagent = require('superagent');
require('jest');

describe('Testing Gallery Routes', function() {
  beforeAll(server.start);
  afterAll(server.stop);
  afterEach(mocks.user.removeAll);
})
