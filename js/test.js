'use strict';
const assert = require( 'assert' );
const path = require( 'path' );
const bindingPath = path.join( __dirname, './build/Release/binding' );
const binding = require( bindingPath );
const status =  binding.status();
assert.strictEqual( status, 'OK' );
console.log( status );