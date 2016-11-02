(function () {
    angular.module('ng-music')
        .component('albums', {
            templateUrl: 'app/components/music/albums.html',
            controller: AlbumsController
        })

    AlbumsController.$inject = ['MusicService']
    
    function AlbumsController(MusicService) {
        var cc = this;
        cc.showDetails = function (album) {
            cc.show = true;
            cc.selectedAlbum = album;
        }
        cc.albums = MusicService.getAllAlbums();
    }

} ())