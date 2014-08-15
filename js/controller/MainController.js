(function() {
    angular
        .module('DRDapp')
        .controller('MainController', MainController);


    function MainController($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;

        $scope.activePage = null;

        $scope.setActive = function(type) {
            $scope.toolsActive = '';
            $scope.snippetsActive = '';
            $scope.projectsActive = '';
            $scope.tasksActive = '';
            $scope.linksActive = '';

            $scope[type + 'Active'] = 'active';
            $scope.activePage = type;
        };
    }
})();