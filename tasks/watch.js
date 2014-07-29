module.exports = function(grunt, config) {
    return {
        js: {
            files: ['<%= config.dirs.public %>/scripts/{,*/}*.js'],
            tasks: [''],
            options: {
                livereload: true
            }
        },
        jsTestAppUnit: {
//            files: ['test/specs/app/unit/*.js'],
            files: ['<%= config.dirs.testModule %>/**/*.js'],
            tasks: ['jasmine_node:appUnit']
        },
        gruntfile: {
            files: ['./gruntfile.js'],
            tasks: ['jasmine_node:appUnit']
        }
    };
};