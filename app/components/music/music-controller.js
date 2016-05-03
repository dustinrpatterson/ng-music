angular.module('ng-music')
    .controller('CatalogController', function(MusicService){
        var cc = this;
        cc.showDetails = function(album){
            cc.show = true;
            cc.selectedAlbum = album;
        }
        cc.albums = MusicService.getAllAlbums();
    })