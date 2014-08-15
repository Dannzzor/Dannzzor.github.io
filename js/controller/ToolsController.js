(function() {
    angular
        .module('DRDapp')
        .controller('ToolsController', ToolsController);

    function ToolsController($scope, $routeParams) {
        $scope.setActive('tools');
        $scope.name = "ToolsController";
        $scope.params = $routeParams;
    }
})();