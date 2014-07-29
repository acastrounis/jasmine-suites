var path = require('path');

module.exports = function(grunt, config) {
    return {
        dev: {
            script: 'server.js',
            options: {
                args: ['dev'],
                nodeArgs: ['--debug'],
                callback: function (nodemon) {
                    nodemon.on('log', function (event) {
                        console.log(event.colour);
                    });
                },
                env: {
//                    PORT: config.port
                },
                cwd: process.cwd(),
                ignore: ['node_modules/**', '<%= config.dirs.public %>/vendor/**'],
                ext: 'js, coffee, css, styl, jade, html, json',
                //watch: ['server'],
                delay: 1000,
                legacyWatch: true
            }
        },
        exec: {}
    };
};

//module.exports = {
//    dev: {
//        script: 'server.js',
//        options: {
//            args: ['dev'],
//            nodeArgs: ['--debug'],
//            callback: function (nodemon) {
//                nodemon.on('log', function (event) {
//                    console.log(event.colour);
//                });
//            },
//            env: {
//                PORT: '3000'
//            },
//            cwd: process.cwd(),
//            ignore: ['node_modules/**', 'public/vendor/**'],
//            ext: 'js, coffee, css, styl, jade, html, json',
//            //watch: ['server'],
//            delay: 1000,
//            legacyWatch: true
//        }
//    },
//    exec: {}
//};