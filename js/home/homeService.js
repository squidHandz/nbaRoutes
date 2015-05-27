var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q){



/*this.getAllData = function(){
	var teamNames = ['utahjazz', 'losangeleslakers', 'miamiheat'];
	var homeArr = [];
	var getData = teamService.getTeamData;

	teamNames.forEach(function(e){
			var mainObj = {}
			var results = getData(e).$$state
			mainObj['results'] = results
			homeArr.push(mainObj);
		})
		return homeArr;
	}


    var deferred = $q.defer();
    var url = 'https://api.parse.com/1/classes/' + team;
        $http.get(url)
        .then(function(data){
        var results = data.data.results
        , wins = 0
        , losses = 0;
        for (var i=0; i<results.length; i++){
          (results[i].won) ? wins++ : losses++;
        }

        results['wins'] = wins;
        results['losses'] = losses;
        deferred.resolve(results);
    });
    return deferred.promise;
  }
*/

});




/*		if (getData.hasOwnProperty['key']) {
			topObjs.push(getData['key'])
			}*/


/*
function firstGood(arr){
    var i = 0;
    return $q.when().then(function consume(){
        if(i >= arr.length) return $q.reject(Error("No Number Found"));
        return isGood(arr[i++]).catch(consume);
    });
}*/
