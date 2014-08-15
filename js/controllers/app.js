function AppCtrl ($scope) {
  $scope.setActive = function (type) {
    $scope.toolsActive = '';
    $scope.snippetsActive = '';
    $scope.projectsActive = '';
    $scope.tasksActive = '';

    $scope[type + 'Active'] = 'active';
    $scope.activePage = type;
  },

  $scope.activePage = null;

  $scope.airports = {
    "PDX": {
      "code": "PDX",
      "name": "Portland International Airport",
      "city": "Portland",
      "destinations": [
        "LAX",
        "SFO"
      ]
    },
    "STL": {
      "code": "STL",
      "name": "Lambert-St. Louis International Airport",
      "city": "St. Louis",
      "destinations": [
        "LAX",
        "MKE"
      ]
    },
    "MCI": {
      "code": "MCI",
      "name": "Kansas City International Airport",
      "city": "Kansas City",
      "destinations": [
        "LAX",
        "DFW"
      ]
    }
  };
  $scope.sidebarURL = 'partials/airport.html';
  $scope.currentAirport = null;

  $scope.setAirport = function (code) {
    $scope.currentAirport = $scope.airports[code];
  };
}

function SnippetCtrl ($scope) {
  $scope.snippets = [
    {name:'IE friendly console.log', code:'partials/snippets/snippet001.html'},
    {name:'Deformat number', code:'partials/snippets/snippet002.html'},
    {name:'Get all URL params', code:'partials/snippets/snippet003.html'},
    {name:'Format number with commas', code:'partials/snippets/snippet004.html'},
    {name:'Process data chunks async', code:'partials/snippets/snippet005.html'},
    {name:'(grid) Transform decimal number to percent', code:'partials/snippets/snippet006.html'},
    {name:'Pad a number with something', code:'partials/snippets/snippet007.html'},
    {name:'Add source to URL variable', code:'partials/snippets/snippet008.html'},
    {name:'Test if page is in iFrame', code:'partials/snippets/snippet009.html'},
    {name:'Save queue / function queue', code:'partials/snippets/snippet010.html'},
    {name:'Pre-set a select option based on text or value', code:'partials/snippets/snippet011.html'},
    {name:'snippet', code:'partials/snippets/snippet012.html'},
    {name:'snippet', code:'partials/snippets/snippet013.html'},
    {name:'snippet', code:'partials/snippets/snippet014.html'},
    {name:'snippet', code:'partials/snippets/snippet015.html'},
    {name:'snippet', code:'partials/snippets/snippet016.html'},
    {name:'snippet', code:'partials/snippets/snippet017.html'},
    {name:'snippet', code:'partials/snippets/snippet018.html'},
    {name:'snippet', code:'partials/snippets/snippet019.html'},
    {name:'snippet', code:'partials/snippets/snippet020.html'}
  ];

  $scope.selectedSnippet = null;

  $scope.setSnippet = function (inputArr, $index) {
    $scope.selectedSnippet = inputArr[$index];
  };

}