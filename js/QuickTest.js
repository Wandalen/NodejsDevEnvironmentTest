'use strict';

let assert = require( 'assert' );
let path = require( 'path' );
const bindingPath = path.join( __dirname, '../build/Release/binding' );
const binding = require( bindingPath );
const status =  binding.status();
assert.strictEqual( status, true );
