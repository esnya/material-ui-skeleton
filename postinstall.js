'use strict';

var fs = require('fs');

fs.exists('node_modules/material-ui', function(exists) {
    if (exists) {
        var cp = require('child_process');
        var os = require('os');

        var options = {
            cwd: 'node_modules/material-ui',
            stdio: 'inherit',
        };

        var npm = os.type() == 'Windows_NT' ? 'npm.cmd' : 'npm';

        var cleanup = function() {
            fs.exists('node_modules/material-ui/node_modules', function(exists) {
                if (exists) {
                    console.log('Clean Up');
                    fs.readdir('node_modules/material-ui/node_modules', function(error, dir) {
                        if (error) throw error;

                        dir.filter(function(module) {
                            return module.charAt(0) != '.';
                        }).forEach(function(module) {
                            console.log(module);
                            cp.spawn(npm, ['remove', module], options);
                        });
                    });
                }
            });
        };

        fs.exists('node_modules/material-ui/lib', function(exists) {
            if (!exists) {
                console.log('Install & Build');
                cp.spawn(npm, ['install'], options)
                    .on('exit', function() {
                        cleanup();
                    });
            } else {
                cleanup();
            }
        });
    }
});
