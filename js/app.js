var emptyTicket = [{"Active" : "","ReportedByID" : "","Location" : "","Priority" : "","Category" : "","Issue" : "","Status" : "","AssignedTo" : "","Due_old" : "","DateResolved" : "","RootCause" : "","Resolution" : "","VerifiedBy" : "","Comments" : "","A_Created" : "","A_CreatedBy" : "","A_Modified" : "","A_ModifiedBy" : "","Verified" : "","ID" : "No open tickets found","Created" : "","Age" : "","LocationShort" : "","Year" : "","Month" : "","MonthYear" : "","ReportedOld" : "","Resolved_old" : "","DaysToResolveOLD" : "","DaysToResolve" : "","Title" : "","ReportedBy" : "","RequestorLegacy" : "","TicketType" : "","DataID" : "","Followup1" : "","Followup2" : "","Today" : "","Reported" : "","Resolved" : "","Due" : "","Modified" : "","KnowledgeBase" : "","ReportedDATE" : ""}];

angular.module('myFilters', [])
.filter('decode', function () {
  return function (string, type) {
    string = decodeURIComponent(string);
    switch (type) {
      case 'priority' :
        string = string.split(') ')[1];
      break;
      default:
    }
    return string;
  };
})
.filter('openTickets', function () {
  return function (tickets, status) {
  var out = [];
    if( tickets && !status ){
      for(var i = 0; i < tickets.length; i++ ) {
        var ticket = tickets[i];
        if( ticket.Status != 'Resolved' && ticket.Status != 'Closed' ) {//
          out.push(ticket);
        }
      }
      
      if (out.length === 0) {
        return emptyTicket;
      }
      return out;
    }
    return tickets;
  };
});

var myApp = angular.module('DRDapp', ['myFilters'])

.controller('MainController', function($scope, $route, $routeParams, $location) {
   $scope.$route = $route;
   $scope.$location = $location;
   $scope.$routeParams = $routeParams;

   $scope.activePage = null;

   $scope.setActive = function (type) {
     $scope.toolsActive = '';
     $scope.snippetsActive = '';
     $scope.projectsActive = '';
     $scope.tasksActive = '';
     $scope.linksActive = '';

     $scope[type + 'Active'] = 'active';
     $scope.activePage = type;
   };
})

.controller('ToolsController', function($scope, $routeParams) {
  $scope.setActive('tools');
  $scope.name = "ToolsController";
  $scope.params = $routeParams;
})

.controller('SnippetsController', function($scope, $routeParams) {
    $scope.setActive('snippets');
   $scope.name = "SnippetsController";
   $scope.params = $routeParams;

   $scope.snippets = [
     {id: 0, name:'IE friendly console.log', code:'partials/snippets/snippet001.html'},
     {id: 1, name:'Deformat number', code:'partials/snippets/snippet002.html'},
     {id: 2, name:'Get all URL params', code:'partials/snippets/snippet003.html'},
     {id: 3, name:'Format number with commas', code:'partials/snippets/snippet004.html'},
     {id: 4, name:'Process data chunks async', code:'partials/snippets/snippet005.html'},
     {id: 5, name:'(grid) Transform decimal number to percent', code:'partials/snippets/snippet006.html'},
     {id: 6, name:'Pad a number with something', code:'partials/snippets/snippet007.html'},
     {id: 7, name:'Add source to URL variable', code:'partials/snippets/snippet008.html'},
     {id: 8, name:'Test if page is in iFrame', code:'partials/snippets/snippet009.html'},
     {id: 9, name:'Save queue / function queue', code:'partials/snippets/snippet010.html'},
     {id: 10, name:'Pre-set a select option based on text or value', code:'partials/snippets/snippet011.html'},
     {id: 11, name:'CSS Browser Hacks', code:'partials/snippets/snippet012.html'},
     {id: 12, name:'Compare dates', code:'partials/snippets/snippet013.html'},
     {id: 13, name:'Find item in array', code:'partials/snippets/snippet014.html'},
     {id: 14, name:'(grid) Retain filters on search', code:'partials/snippets/snippet015.html'},
     {id: 15, name:'Filter array for distinct records', code:'partials/snippets/snippet016.html'},
     {id: 16, name:'Sort array by two object keys', code:'partials/snippets/snippet017.html'},
     {id: 17, name:'Document.selectSingleNode() replacement script', code:'partials/snippets/snippet018.html'},
     {id: 18, name:'Format short date', code:'partials/snippets/snippet019.html'},
     {id: 19, name:'Handy browser shortcut link tools', code:'partials/snippets/snippet020.html'}
   ];

   $scope.selectedSnippetId = $scope.params.snippetId || 0;
   console.log("snippet id = " + $scope.params.snippetId);

   $scope.selectedSnippet = $scope.snippets[$scope.selectedSnippetId];

   $scope.setSnippet = function ( snippet ){
     $scope.selectedSnippet = snippet;
   };

   $scope.loadHighlighting = function() {
     Prism.highlightAll();
   };
})

.controller('ProjectsController', function($scope, $routeParams) {
  $scope.setActive('projects');
   $scope.name = "ProjectsController";
   $scope.params = $routeParams;

   $scope.clientList = [
     {url: '#', imgUrl:'', name: 'test', version: '2.0', unc: ""},
     {url: '#', imgUrl:'', name: 'test2', version: '3.0', unc: ""}
   ];
})


.controller('LinksController', function($scope, $routeParams) {
  $scope.setActive('links');
  $scope.name = "LinksController";
  $scope.params = $routeParams;

  $scope.links = [
    {url: 'http://oscarotero.com/jquery/', type: 'Reference', name: 'jQuery Cheatsheet', details: 'JS', unc: ''},
    {url: 'http://jshint.com/', type: 'Testing', name: 'JS Hint', details: 'JS', unc: ''},
    {url: 'http://www.regular-expressions.info/javascriptexample.html', type: 'Reference', name: 'Regular-Expression (regex) Builder', details: 'JS', unc: ''},
    {url: 'http://colorschemedesigner.com/', type: 'Reference', name: 'Color Scheme Designer', details: 'CSS', unc: ''},
    {url: 'http://isobar-idev.github.io/code-standards/', type: 'Reference', name: 'Front-End Best Practices', details: '', unc: ''},
    {url: 'http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/', type: 'Reference', name: 'JavaScript: Truth and Equality', details: 'JS', unc: ''},
    {url: '', type: '', name: '', details: '', unc: ''},
    {url: '', type: '', name: '', details: '', unc: ''},
    {url: '', type: '', name: '', details: '', unc: ''}
  ];
})


.controller('TasksController', function($scope, $routeParams, $filter, $http) {
  $scope.setActive('tasks');
   $scope.name = "TasksController";
   $scope.params = $routeParams;

   $scope.taskData = null;

   $http.get('web/TasksJSON.aspx?Status=IP').success(function(data){
     $scope.taskData = data;
   });

   $scope.ticketData = null;

   $http.get('web/TicketsJSON.aspx?Status=IP').success(function(data){
     $scope.ticketData = data;
   });

   $scope.getTicketURL = function(ticketID) {
      return ( ~ticketID.toUpperCase().indexOf('B') ) ? "http://it.jecsi.com/Lists/Bugs/EditForm.aspx?ID=" + ticketID.slice(1) : "http://ondemand.jecsi.com/sites/ITTickets/Lists/InternalIssues/EditForm.aspx?ID=" + ticketID;
   };
})

.config(function($routeProvider, $locationProvider) {
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
      
});
