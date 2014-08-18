(function() {
    angular
        .module('DRDapp')
        .controller('LinksController', LinksController);

    function LinksController($scope, $routeParams) {
        $scope.setActive('links');
        $scope.name = "LinksController";
        $scope.params = $routeParams;

        $scope.links = [{
            url: 'http://oscarotero.com/jquery/',
            type: 'Reference',
            name: 'jQuery Cheatsheet',
            details: 'JS',
            unc: ''
        }, {
            url: 'http://jshint.com/',
            type: 'Testing',
            name: 'JS Hint',
            details: 'JS',
            unc: ''
        }, {
            url: 'http://www.regular-expressions.info/javascriptexample.html',
            type: 'Reference',
            name: 'Regular-Expression (regex) Builder',
            details: 'JS',
            unc: ''
        }, {
            url: 'http://colorschemedesigner.com/',
            type: 'Reference',
            name: 'Color Scheme Designer',
            details: 'CSS',
            unc: ''
        }, {
            url: 'http://isobar-idev.github.io/code-standards/',
            type: 'Reference',
            name: 'Front-End Best Practices',
            details: '',
            unc: ''
        }, {
            url: 'http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/',
            type: 'Reference',
            name: 'JavaScript: Truth and Equality',
            details: 'JS',
            unc: ''
        }, {
            url: 'https://github.com/johnpapa/angularjs-styleguide/blob/master/README.md',
            type: 'Reference',
            name: 'AngularJS style guide',
            details: 'JS',
            unc: ''
        }, {
            url: '',
            type: '',
            name: '',
            details: '',
            unc: ''
        }, {
            url: '',
            type: '',
            name: '',
            details: '',
            unc: ''
        }];
    }
})();