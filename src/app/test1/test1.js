angular.module( 'ngBoilerplate.test1', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'test1', {
    url: '/test1',
    views: {
      "main": {
        controller: 'Test1Ctrl',
        templateUrl: 'test1/test1.tpl.html'
      }
    },
    data: {
        pageTitle: 'My test 1'
    }
  });
})



.controller( 'Test1Ctrl', function Test1Ctrl( $scope ) {
    // This is simple a demo for UI Boostrap.
    $scope.dropdownDemoItems = [
        "aaa",
        "zzz",
        "bbb"
    ];
})

;