var emptyTicket = [{"Active" : "","ReportedByID" : "","Location" : "","Priority" : "","Category" : "","Issue" : "","Status" : "","AssignedTo" : "","Due_old" : "","DateResolved" : "","RootCause" : "","Resolution" : "","VerifiedBy" : "","Comments" : "","A_Created" : "","A_CreatedBy" : "","A_Modified" : "","A_ModifiedBy" : "","Verified" : "","ID" : "No open tickets found","Created" : "","Age" : "","LocationShort" : "","Year" : "","Month" : "","MonthYear" : "","ReportedOld" : "","Resolved_old" : "","DaysToResolveOLD" : "","DaysToResolve" : "","Title" : "","ReportedBy" : "","RequestorLegacy" : "","TicketType" : "","DataID" : "","Followup1" : "","Followup2" : "","Today" : "","Reported" : "","Resolved" : "","Due" : "","Modified" : "","KnowledgeBase" : "","ReportedDATE" : ""}];

var myApp = angular.module('DRDapp', ['myFilters']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'partials/tools.html', 
         controller: function ($scope) {
            $scope.setActive('tools');
         }})
        .when('/snippets', {templateUrl: 'partials/snippets.html', 
         controller: function ($scope) {
            $scope.setActive('snippets');
         }})
        .when('/snippets/:snippetId', {templateUrl: 'partials/snippets.html', 
         controller: function ($scope) {
            $scope.setActive('snippets');
            $scope.snippetId = $routeParams.snippetId;
         }})
        .when('/projects', {templateUrl: 'partials/clients.html', 
         controller: function ($scope) {
            $scope.setActive('projects');
         }})
        .when('/tasks', {templateUrl: 'partials/tasks.html', 
         controller: function ($scope) {
            $scope.setActive('tasks');
         }});
      }
]);

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
    if( !status ){
      for(var i = 0; i < tickets.length; i++ ) {
        var ticket = tickets[i];
        if( ticket.Status != 'Resolved' && ticket.Status != 'Closed' ) {//
          out.push(ticket);
        }
      }
      
      if (out.length == 0) {
        return emptyTicket;
      }
      return out;// || emptyTicket;
    }
    return tickets;
  };
});


myApp.controller('ctrlDRD', function ($scope, $filter, $http) {

  $scope.activePage = null;

  $scope.setActive = function (type) {
    $scope.toolsActive = '';
    $scope.snippetsActive = '';
    $scope.projectsActive = '';
    $scope.tasksActive = '';

    $scope[type + 'Active'] = 'active';
    $scope.activePage = type;
  };

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
    {name:'CSS Browser Hacks', code:'partials/snippets/snippet012.html'},
    {name:'Compare dates', code:'partials/snippets/snippet013.html'},
    {name:'Find item in array', code:'partials/snippets/snippet014.html'},
    {name:'(grid) Retain filters on search', code:'partials/snippets/snippet015.html'},
    {name:'Filter array for distinct records', code:'partials/snippets/snippet016.html'},
    {name:'Sort array by two object keys', code:'partials/snippets/snippet017.html'},
    {name:'snippet18', code:'partials/snippets/snippet018.html'},
    {name:'snippet19', code:'partials/snippets/snippet019.html'},
    {name:'snippet20', code:'partials/snippets/snippet020.html'}
  ];

  $scope.selectedSnippetId = $scope.snippetId || 0; 
  console.log("snippet id = " + $scope.snippetId);

  $scope.selectedSnippet = $scope.snippets[$scope.selectedSnippetId];

  $scope.setSnippet = function ( snippet ){
    $scope.selectedSnippet = snippet;
  };

  $scope.loadHighlighting = function() {
    Prism.highlightAll();
  };

  $scope.taskData = null;

  $http.get('web/TasksJSON.aspx?Status=IP').success(function(data){
    $scope.taskData = data;
  });

  $scope.ticketData = null;

  $http.get('web/TicketsJSON.aspx?Status=IP').success(function(data){
    $scope.ticketData = data;
  });

  $scope.clientList = [
    {url: 'http://jesps.jecsi.com/mppg_variance/default.aspx', imgUrl:'images/amcor-orora-(2)-small.png', name: 'Amcor / Orora', version: '2.0', unc: ""},
    {url: 'http://ondemand.jecsi.com/clients/BAXTER/default.aspx', imgUrl:'images/baxter-(3)-small.png', name: 'Baxter', version: '3.0', unc: ""},
    {url: 'http://ondemand.jecsi.com/clients/BAKERH/default.aspx', imgUrl:'images/bakerh-(jetro)-small.png', name: 'Baker Hughes', version: 'JETRO', unc: "\\ondemand.jecsi.com\clients\bakerh"},
    {url: 'http://it.jecsi.com/jesqma/default.aspx', imgUrl:'images/jesqma-jecs-(2)-small.png', name: 'JESQMA', version: '4.0', unc: ""},
    {url: 'http://www.ktxcwaste.net/default.aspx', imgUrl:'images/toxco-retriev-ktxc-(2)-small.png', name: 'Toxco / Retriev / KTXC', version: '2.0', unc: ""},
    {url: 'http://www.ktrlwaste.net/default.aspx', imgUrl:'images/toxco-retriev-ktxc-(2)-small.png', name: 'Toxco / Retriev / KTRL', version: '2.0', unc: ""},
    {url: 'http://jesharepoint.jecsi.com/sites/jets/default.aspx', imgUrl:'images/jet-(2)-small.png', name: 'JET', version: '2.0', unc: ""},
    {url: 'http://ondemand.jecsi.com/sites/jets/default.aspx', imgUrl:'images/jet-(jetro)-small.png', name: 'JET', version: 'JETRO', unc: ""},
    {url: 'http://ondemand.jecsi.com/clients/vanf/default.aspx', imgUrl:'images/vanf-(3)-small.png', name: 'VANF', version: '3.0', unc: ""},
    {url: 'http://ondemand.jecsi.com/clients/jank/default.aspx', imgUrl:'images/jank-(3)-small.png', name: 'JANK', version: '3.0', unc: ""},
    {url: 'http://jesharepoint.jecsi.com/sites/TUBE/default.aspx', imgUrl:'images/tube-(2)-small.png', name: 'Tube 2.0', version: '2.0', unc: ""},
    {url: 'http://ondemand.jecsi.com/clients/tube/default.aspx', imgUrl:'images/tube-(3)-small.png', name: 'Tube 3.0', version: '3.0', unc: ""},
    {url: 'http://ondemand.jecsi.com/clients/gemxtx/default.aspx', imgUrl:'images/ge-(jetro)-small.png', name: 'GE', version: 'JETRO', unc: ""},
    {url: 'http://ondemand.jecsi.com/clients/mkln/default.aspx', imgUrl:'images/markland-(3)-small.png', name: 'Markland', version: '3.0', unc: ""},
    {url: 'http://ondemand.jecsi.com/clients/amfabr/default.aspx', imgUrl:'images/ams-(3)-small.png', name: 'AMS', version: '3.0', unc: ""},
    {url: 'http://jesharepoint.jecsi.com/clients/VMET/default.aspx', imgUrl:'images/vmet-(2)-small.png', name: 'VMET / Vista Metals', version: '2.0', unc: ""},
    {url: 'http://ondemand.jecsi.com/clients/vmetal/default.aspx', imgUrl:'images/vmet-(3)-small.png', name: 'VMET / Vista Metals', version: '3.0', unc: ""},
    {url: 'http://wilbur.ondemandehs.net/default.aspx', imgUrl:'images/wilbur-(3)-small.png', name: 'Wilbur', version: '3.0', unc: ""},
    {url: 'http://ondemand.jecsi.com/clients/HALB/default.aspx', imgUrl:'images/haliburton-(jetro)-small.png', name: 'Haliburton', version: 'JETRO', unc: ""},
    {url: 'https://www.jet-bso.com/default.aspx', imgUrl:'images/jetbso-(3)-small.png', name: 'JET BSO', version: '3.0', unc: ""}
  ];

});

