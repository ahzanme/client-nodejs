'use strict';

var assert = require('assert');
var Chuck = require('../lib/chuck');
var Joke = require('../lib/chuck/joke');
var nock = require('nock');

describe('Chuck', function() {

    describe('Constructor', function() {
        it('Creates a new instance', function() {
            var client = new Chuck();
            assert(client instanceof Chuck);
        });
    });

    describe('getClientVersion', function() {
        it('Should return the current version of the api client', function() {
            var client = new Chuck();
            assert(client.getClientVersion() == require('../package.json').version);
        });
    });

    describe('getRandomJoke', function() {
        it('Should return a random joke from the api', function() {
            var client = new Chuck();
            var response = client.getRandomJoke(function(error, response) {
                assert(response instanceof Joke);
            });
        });
    });
    
});
