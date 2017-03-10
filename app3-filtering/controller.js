angular.module('filterApp').controller('mainController', function ($scope, filterService) {

    $scope.data = filterService.getData();
});