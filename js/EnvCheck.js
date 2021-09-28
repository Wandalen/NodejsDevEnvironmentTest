#!/usr/bin/env node

( function _EnvCheck_()
{

  'use strict';

  const ChildProcess = require( 'child_process' );
  const Path = require( 'path' );

  let o =
  {
    stdio: 'inherit',
    cwd : Path.join( __dirname, '..' ),
  }
  let npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

  build();

  /* */

  function build()
  {
    let pnd = ChildProcess.spawn( npm, [ 'run', 'rebuild' ], o );
    pnd.on( 'exit', ( exitCode ) =>
    {
      test();
    });
  }

  /* */

  function test()
  {
    let pnd = ChildProcess.spawn( npm, [ 'run', 'quick-test' ], o );
    pnd.on( 'exit', ( exitCode ) =>
    {
      if( exitCode !== 0 )
      {
        console.log( 'Your environment is not ready for development of native nodejs modules. Check the output above.' );
      }
      else
      {
        console.log( 'Your environment is ready for development of native nodejs modules.' );
      }
      return process.exit( exitCode );
    });
  }

})();
