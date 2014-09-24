/*:
	@test-configuration:
		{
			"packageName": "traverse-directory",
			"fileName": "traverse-directory-test.js",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/traverse-directory.git",
			"referenceFile": "traverse-directory.js",
			"referenceModule": "traverseDirectory"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"traverse-directory@github.com/volkovasystems": "traverseDirectory",
			"child_process@nodejs": "childprocess",
			"assert@nodejs": "assert",
			"os@nodejs": "os"
		}
	@end-include
*/

var removeDirectory = function removeDirectory( directory, done ){
	var command = [ ];
	if( os.platform( ) == "win32" ){
		command = [ "rd", "/Q", "/S", directory ].join( " " );

	}else{
		command = [ "rm", "-Rf", directory ].join( " " );
	}

	childprocess.exec( command, done )
};

var removeFile = function removeFile( file, done ){
	var command = [ ];
	if( os.platform( ) == "win32" ){
		command = [ "del", "/Q", file ].join( " " );

	}else{
		command = [ "rm", "-f", file ].join( " " );
	}

	childprocess.exec( command, done )
};

describe( "traverseDirectory",
	function testCheckDirectoryExists( ){
		it( "should return true for directory 'hello' when hello directory was created",
			function testCase( done ){
				childprocess.exec( "mkdir hello",
					function onDirectoryCreated( ){
						try{
							assert.strictEqual( checkDirectoryExists( "hello" ), true );

						}finally{
							removeDirectory( "hello", done );
						}
					} );
			} );

		
	} );

var traverseDirectory = require( "./traverse-directory.js" );

var os = require( "os" );
var childprocess = require( "child_process" );
var assert = require( "assert" );