/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])


// test unit
.factory('Social', function($http, $q) {
    return {
        // twitterAPI: 'http://urls.api.twitter.com/1/urls/count.json?callback=angular.callbacks._0&url=',
        getTiwtterCompte: function() {
            // q = $q.defer();
            // $http.jsonp(this.twitterAPI + url)
            //     .then(function(result){
            //         q.resolve(result.data.count);
            //     });
            // return q.promise;
        }
    };
})



.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {                   // 'home' est le nom du href (ui-sref) dans le html
    url: '/home',                                   // url défini ICI
    views: {
      "main": {                                     // 'main' est le nom du bloc de vue (ui-view) dans le html
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data: {
        pageTitle: 'HomePierre',                   // 'pageTitle' est le nom d'una variable (ng-bind dans la html)   |   config dans le fichier app.js
        myVar1: 'myVar1...'
    }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope ) {
    var test1 = 'toto';
})

;

