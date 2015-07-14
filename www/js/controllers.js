angular.module('starter.controllers', [])

.controller( 'TabsCtrl', function($scope) {
  $scope.vehicles = [{
    name: '2007 Lincoln Navigator',
    imgsrc: '/img/navigator.png'
  }
  , {
    name: '2010 Lincoln Town Car',
    imgsrc: '/img/towncar.png'
  }];
  $scope.vehicle = {
    selected: $scope.vehicles[0]
  };  
})

.controller('DashCtrl', function($scope) {

})

.controller('MaintenanceCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('RewardsCtrl', function($scope) {})

.controller('FeedbackCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableNotificationEmail: true,
    enableNotificationSMS: true,
    enableNotificationMobile: true
  };
});

