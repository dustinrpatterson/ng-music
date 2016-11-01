angular.module('ng-music')
    .config(function($stateProvider, $sceProvider, $urlRouterProvider) {

        $sceProvider.enabled(false);

        $stateProvider
            .state({
                name: 'home',
                url: '',
                template: 'home'
            })
            .state({
                name: 'albums',
                url: '/albums',
                template: '<albums></albums>',
            })
            .state({
                name: 'album',
                url: '/albums/:id',
                template: '<album><album>'
            })

            $urlRouterProvider.otherwise('/albums')
    })