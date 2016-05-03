angular.module('ng-music')
    .controller('DetailsController', function($sce, $stateParams, MusicService){
        var dc = this;
        var id = $stateParams.id;
        
        dc.selectedAlbum = MusicService.getAlbumById(id); 
        
        dc.trustedUrl = dc.selectedAlbum.previewUrl;
        
        if(dc.selectedAlbum.error){
            dc.error = dc.selectedAlbum.error
        }
        
        
    })