// MVC Configuration
module.exports = {
    // Model configurations
    models: {
        directory: 'src/models',
        files: ['User.js']
    },
    
    // View configurations
    views: {
        directory: 'src/views',
        engine: 'handlebars',
        layouts: 'layouts',
        partials: 'partials',
        pages: ['auth/login', 'auth/register', 'dashboard']
    },
    
    // Controller configurations
    controllers: {
        directory: 'src/controllers',
        files: ['UserController.js']
    },
    
    // Route configurations
    routes: {
        directory: 'src/routes',
        files: ['auth.js', 'health.js']
    }
};