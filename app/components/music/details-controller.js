(function () {
    angular.module('ng-music')
        .component('album', {
            templateUrl: 'app/components/music/details.html',
            controller: AlbumController
        })

    AlbumController.$inject = ['$sce', '$stateParams', 'MusicService']

    function AlbumController($sce, $stateParams, MusicService) {
        var dc = this;
        var id = $stateParams.id;

        dc.selectedAlbum = MusicService.getAlbumById(id);

        dc.trustedUrl = dc.selectedAlbum.previewUrl;

        if (dc.selectedAlbum.error) {
            dc.error = dc.selectedAlbum.error
        }

    }
} ())
