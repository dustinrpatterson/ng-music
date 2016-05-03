angular.module('ng-music')
    .config(function($stateProvider, $sceProvider) {

        $sceProvider.enabled(false);

        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'app/components/home/home.html'
            })
            .state('catalog', {
                url: '/catalog',
                templateUrl: 'app/components/music/catalog.html',
                controller: 'CatalogController',
                controllerAs: 'cc'
            })
            .state('details', {
                url: '/details/:id',
                templateUrl: 'app/components/music/details.html',
                controller: 'DetailsController',
                controllerAs: 'dc'
            })
    })