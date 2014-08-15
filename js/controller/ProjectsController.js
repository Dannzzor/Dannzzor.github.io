(function() {
    angular
        .module('DRDapp')
        .controller('ProjectsController', ProjectsController);

    function ProjectsController($scope, $routeParams) {
        $scope.setActive('projects');
        $scope.name = "ProjectsController";
        $scope.params = $routeParams;

        $scope.clientList = [{
            url: '#',
            imgUrl: '',
            name: 'test',
            version: '2.0',
            unc: ""
        }, {
            url: '#',
            imgUrl: '',
            name: 'test2',
            version: '3.0',
            unc: ""
        }];
    }
})();