angular.module('apiApp').service('apiService', function ($http) {
     var pokemon = [];

    this.getPokemon = function (index) {
        return $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v2/pokemon/' + index + '/'
        }).then(function (response) {
            return response.data;
        });
    };

});