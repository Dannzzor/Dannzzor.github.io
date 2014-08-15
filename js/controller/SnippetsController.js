(function() {
    angular
        .module('DRDapp')
        .controller('SnippetsController', SnippetsController);

    function SnippetsController($scope, $routeParams) {
        $scope.setActive('snippets');
        $scope.name = "SnippetsController";
        $scope.params = $routeParams;

        $scope.snippets = [{
                id: 0,
                name: 'IE friendly console.log',
                code: 'partials/snippets/snippet001.html'
            }, {
                id: 1,
                name: 'Deformat number',
                code: 'partials/snippets/snippet002.html'
            }, {
                id: 2,
                name: 'Get all URL params',
                code: 'partials/snippets/snippet003.html'
            }, {
                id: 3,
                name: 'Format number with commas',
                code: 'partials/snippets/snippet004.html'
            }, {
                id: 4,
                name: 'Process data chunks async',
                code: 'partials/snippets/snippet005.html'
            }, {
                id: 5,
                name: '(grid) Transform decimal number to percent',
                code: 'partials/snippets/snippet006.html'
            }, {
                id: 6,
                name: 'Pad a number with something',
                code: 'partials/snippets/snippet007.html'
            }, {
                id: 7,
                name: 'Add param(s) to URL variable',
                code: 'partials/snippets/snippet008.html'
            }, {
                id: 8,
                name: 'Test if page is in iFrame',
                code: 'partials/snippets/snippet009.html'
            }, {
                id: 9,
                name: 'Save queue / function queue',
                code: 'partials/snippets/snippet010.html'
            }, {
                id: 10,
                name: 'Pre-set a select option based on text or value',
                code: 'partials/snippets/snippet011.html'
            }, {
                id: 11,
                name: 'CSS Browser Hacks',
                code: 'partials/snippets/snippet012.html'
            }, {
                id: 12,
                name: 'Compare dates',
                code: 'partials/snippets/snippet013.html'
            }, {
                id: 13,
                name: 'Find item in array',
                code: 'partials/snippets/snippet014.html'
            }, {
                id: 14,
                name: '(grid) Retain filters on search',
                code: 'partials/snippets/snippet015.html'
            }, {
                id: 15,
                name: 'Filter array for distinct records',
                code: 'partials/snippets/snippet016.html'
            }, {
                id: 16,
                name: 'Sort array by two object keys',
                code: 'partials/snippets/snippet017.html'
            }, {
                id: 17,
                name: 'Document.selectSingleNode() replacement script',
                code: 'partials/snippets/snippet018.html'
            }, {
                id: 18,
                name: 'Format short date',
                code: 'partials/snippets/snippet019.html'
            }
            // {id: 19, name:'Handy browser shortcut link tools', code:'partials/snippets/snippet020.html'}
        ];

        $scope.selectedSnippetId = $scope.params.snippetId || 0;
        console.log("snippet id = " + $scope.params.snippetId);

        $scope.selectedSnippet = $scope.snippets[$scope.selectedSnippetId];

        $scope.setSnippet = function(snippet) {
            $scope.selectedSnippet = snippet;
        };

        $scope.loadHighlighting = function() {
            Prism.highlightAll();
        };
    }
})();