var config = require("./server/config/config"),
    path = require('path');

var banner = config.grunt.banner;

module.exports = function(grunt) {
    console.log('grunt process.cwd() = ' + process.cwd());
    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'tasks'),
        init: true, //auto grunt.initConfig
        data: { //passed to config
            config: config
        },
        loadGruntTasks: {
        }
    });
};