/**
 * Script enable video in background
 */
$(function () {
    'use strict';

    $('.js-bg-video').vide({
        mp4: '~/assets/static/video/video.mp4',
        ogv: '~/assets/static/video/video.ogv',
        webm: '~/assets/static/video/video.webm',
        poster: '~/assets/static/video/poster.jpg'
    }, {
        resizing: true,
        muted: true,
        loop: true,
        autoplay: true
    });
});