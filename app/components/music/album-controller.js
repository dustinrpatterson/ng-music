(function () {
    angular.module('ng-music')
        .component('album', {
            templateUrl: 'app/components/music/album.html',
            controller: AlbumController
        })

    AlbumController.$inject = ['$stateParams', 'MusicService']

    function AlbumController($stateParams, MusicService) {

        var ac = this;
        var id = $stateParams.id
        ac.songs = MusicService.getAlbumById(id);
        console.log(ac.songs)

        // you will need to utilize the $stateParams and MusicService to get the correct album by its id
        //Be sure to get the desired album on some property that you can use in the view

        //Once you get the basics built out can you modify the MusicService to use the Itunes API???
    }
} ())
