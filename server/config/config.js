var pkg = require('../../package.json');
//console.dir(pkg);

module.exports = exports = {
    domain: 'localhost',
    domainAddress: '0.0.0.0',
    port: 3000,
    grunt: {
        pkg: pkg
    },
    dirs: {
        project: '/Users/Dev/source/jasmine-suites',
        public: 'public',
        test: 'test',
        routes: "./server/routes",
        views: 'views',
        libraries: '/Users/Dev/source/libraries'
    },
    files: {
        appJsFiles: ['<%= dirs.public %>/javascripts/{,*/}*.js'],
        serverJsFiles: ['gruntfile.js', 'server.js', 'app.js'],
        testJsFiles: ['<%= dirs.test %>/app/**/*.js', '<%= dirs.test %>/server/**/*.js',
            '<%= dirs.test %>/vendor/**/*.js'],
        buildJsFile: ['<%= dirs.build %>/js/application.min.js'],
        buildCssFile: ['<%= dirs.build %>/css/application.min.css'],
        buildHtmlFiles: ['<%= dirs.build %>/html/*.html']
    },
    server: {},
    database: {}
};