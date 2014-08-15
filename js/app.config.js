(function() {
    angular
        .module('DRDapp')
        .config(DRDappConfig);

    function DRDappConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/tools', {
                templateUrl: 'partials/tools.html',
                controller: 'ToolsController'
            })
            .when('/snippets', {
                templateUrl: 'partials/snippets.html',
                controller: 'SnippetsController'
            })
            .when('/links', {
                templateUrl: 'partials/links.html',
                controller: 'LinksController'
            })
            .when('/snippets/:snippetId', {
                templateUrl: 'partials/snippets.html',
                controller: 'SnippetsController'
            })
            .when('/projects', {
                templateUrl: 'partials/clients.html',
                controller: 'ProjectsController'
            })
            .when('/', {
                templateUrl: 'partials/tasks.html',
                controller: 'TasksController'
            });
    }
})();