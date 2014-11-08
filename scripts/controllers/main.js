angular.module('txgSbc')
.controller('mainCtrl', ['$scope', 'appMetadata', function($scope, appMetadata) {
  $scope.app = appMetadata;
}]);