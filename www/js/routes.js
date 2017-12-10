angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.postagensRecentes', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/postagensRecentes.html',
        controller: 'postagensRecentesCtrl'
      }
    }
  })

  .state('menu.categorias', {
    url: '/categorias',
    views: {
      'side-menu21': {
        templateUrl: 'templates/categorias.html',
        controller: 'categoriasCtrl'
      }
    }
  })
  
  .state('menu.postDetail', {
    url: '/postDetail/:postId',
    views: {
      'side-menu21': {
        templateUrl: 'templates/postDetail.html',
        controller: 'postDetailCtrl'
      }
    }
  })  
  .state('menu.favorites', {
    url: '/favorites',
    views: {
      'side-menu21': {
        templateUrl: 'templates/favorites.html',
        controller: 'favCtrl'
      }
    }
  })  
  .state('menu.contentByCategory', {
    url: '/contentByCategory/:catId',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contentByCategory.html',
        controller: 'catCtrl'
      }
    }
  })  
  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});