module.exports = function(grunt) {
    return {
        "dev": ['nodemon:dev', 'node-inspector'],
        "server": [''],
        "build": [''],
        "test": ['jasmine_node:appUnit', 'watch:jsTestAppUnit'],
        "convert": ['']
    };
};