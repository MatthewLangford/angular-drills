angular.module('arrayApp').controller('arrayController', function($scope, arrayService){
    $scope.data = arrayService.getData();
});