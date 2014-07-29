module.exports = function(grunt, config) {
    return {
        options: {
            forceExit: true,
            match: '.',
            matchall: false,
            extensions: 'js',
            specNameMatcher: 'spec',
            helperNameMatcher: 'helpers',
            showColors: true,
            includeStackTrace: true,
            useHelpers: false,
            coffee: false,
            jUnit: {
                report: true,
                savePath : "./build/reports/jasmine/",
                useDotNotation: true,
                consolidate: true
            }
        },
        all: ['test/specs/'],
//        appUnit: ['test/specs/app/unit/'],
        appUnit: ['<%= config.dirs.testModule %>/**/'],
        appE2E: ['test/specs/app/e2e/'],
        serverUnit: ['test/specs/server/unit/'],
        serverE2E: ['test/specs/server/e2e/'],
        vendor: ['test/specs/vendor/'],
        browser: ['test/specs/browser/']
    };
};