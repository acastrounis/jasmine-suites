module.exports = function(grunt, config) {
    return {
        custom: {
            options: {
                'web-port': 8080,
                'web-host': 'localhost',
                'debug-port': 5858,
                'save-live-edit': false,
                'no-preload': false,
                'stack-trace-limit': 50,
                'hidden': ['node_modules']
            }
        }
    };
};