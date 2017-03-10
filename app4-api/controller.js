angular.module('apiApp').controller('apiController', function ($scope, apiService) {
    $scope.ind = 1;

     apiService.getPokemon($scope.ind).then(function (response) {
            $scope.pokemon = response;

     });

    $scope.nextPoke = function () {
        $scope.ind++;
        apiService.getPokemon($scope.ind).then(function (response) {
            $scope.pokemon = response;

        });
    };

    $scope.prevPoke = function () {
        $scope.ind--;
            apiService.getPokemon($scope.ind).then(function (response) {
            $scope.pokemon = response;

        });
    };

    $scope.getPoke = function (index) {

        apiService.getPokemon(index).then(function (response) {
            $scope.pokemon = response;

        });
    }
});