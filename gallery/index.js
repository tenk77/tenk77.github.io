// $(document).ready(function() {
//     //Thumbnailer.config.shaderOpacity = 1;
//     var tn1 = $('#gallery').tn3({
//         skinDir: "../modules/tn3/skins",
//         imageClick: "fullscreen",
//         image: {
//             maxZoom: 1.5,
//             crop: true,
//             clickEvent: "dblclick",
//             transitions: [{
//                 type: "blinds"
//             }, {
//                 type: "grid"
//             }, {
//                 type: "grid",
//                 duration: 460,
//                 easing: "easeInQuad",
//                 gridX: 1,
//                 gridY: 8,
//                 // flat, diagonal, circle, random
//                 sort: "flat",
//                 sortReverse: false,
//                 diagonalStart: "bl",
//                 // fade, scale
//                 method: "fade",
//                 partDuration: 360,
//                 partEasing: "easeOutSine",
//                 partDirection: "left"
//             }]
//         }
//     });
// });

$(document).ready(function() {
    var tn1 = $('#gallery').tn3({
        skinDir: "../modules/tn3/skins",
        responsive: "width",
        width: "100%",
        height: "100%",
        // height: $(document).height() - $(".nav").height() * (50 / 100),
        mouseWheel: true,
        image: {
            crop: false,
            transitions: [{
                type: "fade"
            }]
        },
        touch: {
            skin: "tn3",
            fsMode: "../modules/tn3/skins/tn3/touch.html"
        },
        content: [{
            plugin: "mediaelement",
            options: {
                features: ['current', 'progress', 'duration', 'fullscreen'],
                useFullScreen: true
            }
        }]
    });
});