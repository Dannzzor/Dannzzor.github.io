(function() {
    angular
        .module('DRDapp')
        .controller('TasksController', TasksController);


    function TasksController($scope, $routeParams, $filter, $http) {
        $scope.setActive('tasks');
        $scope.name = "TasksController";
        $scope.params = $routeParams;

        $scope.taskData = null;

        $http.get('partials/tickets.json').success(function(data) {
            $scope.taskData = data;
        });

        $scope.ticketData = null;

        $http.get('partials/tasks.json').success(function(data) {
            $scope.ticketData = data;
        });

        $scope.getTicketURL = function(ticketID) {
            return (~ticketID.toUpperCase().indexOf('B')) ? "/Bugs/EditForm.aspx?ID=" + ticketID.slice(1) : "/tickets/EditForm.aspx?ID=" + ticketID;
        };
    }
})();