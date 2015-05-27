var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

$routeProvider
    .when('/', {
      templateUrl: 'js/home/homeTmpl.html',
      controller: 'homeCtrl',
      resolve: {
                miamiTeamData: function($route, teamService){
                return teamService.getTeamData('miamiheat')
        },
                utahTeamData: function($route, teamService){
                return teamService.getTeamData('utahjazz')
        },
                laLakers: function($route, teamService){
                return teamService.getTeamData('losangeleslakers')
        }

      }
    })
    .when('/teams/:team', {
      templateUrl: 'js/teams/teamTmpl.html',
      controller: 'teamCtrl',
      resolve: {
        teamData: function($route, teamService){
          return teamService.getTeamData($route.current.params.team);
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    })


});