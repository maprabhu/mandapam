var mandapam = angular.module('mandapam', []);

mandapam.controller('ListController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $stateParams.itemId;
    $scope.artistOrder = 'name';
  });
}]);

// mandapam.controller('DetailsController', ['$scope', '$http','$stateParams', function($scope, $http, $stateParams) {
//   $http.get('js/data.json').success(function(data) {
//     $scope.artists = data;
//     $scope.whichItem = $stateParams.itemId;
//   });
// }]);
