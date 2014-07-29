module.exports = function(grunt, config) {
    return {
        unit: {
            configFile: 'karma.conf.js',
            singleRun: true
        }
    };
};