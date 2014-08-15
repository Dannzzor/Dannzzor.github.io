angular.module('DRD-app', [])
    .config(dannzzorPageRoute);

function dannzzorPageRoute ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'partials/tools.html', 
         controller: function ($scope) {
            $scope.setActive('tools');
         }})
        .when('/snippets', {templateUrl: 'partials/snippets.html', 
         controller: function ($scope) {
            $scope.setActive('snippets');
         }})
        .when('/projects', {templateUrl: 'partials/projects.html', 
         controller: function ($scope) {
            $scope.setActive('projects');
         }})
        .when('/tasks', {templateUrl: 'partials/tasks.html', 
         controller: function ($scope) {
            $scope.setActive('tasks');
         }});
}

