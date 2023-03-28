$(function(){
    // Video Modal
    let btnPlay = $('.video-play');
    let btnVideoClose = $('.btn-close-video');
    let videoWrapper = $('.video-wrapper');
    let video = $('.video');

    btnPlay.on('click', function () {
        let videoEmbed = $(this).data('video-embed');
        let videoPlaylist = $(this).data('video-playlist');

        video.append('<iframe src="https://www.youtube.com/embed/' + videoEmbed + '?showinfo=0&autoplay=1&repeat=1&loop=1&rel=0&controls=0&playlist=' + videoPlaylist + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen" autoplay="autoplay"></iframe>');
        videoWrapper.fadeIn();
    });

    btnVideoClose.on('click', function () {
        videoWrapper.hide();
        video.empty();
    });
});