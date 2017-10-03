/**
 * Script enable "Vegas" slider
 */
$(function () {
    'use strict';

    $('.js-bg-slides').vegas({
        slides: [
            {src: 'static/images/backgrounds/slideshow_01.jpg'},
            {src: 'static/images/backgrounds/slideshow_02.jpg'},
            {src: 'static/images/backgrounds/slideshow_03.jpg'}
        ],
        overlay: true,
        transition: 'flash'
    });
});