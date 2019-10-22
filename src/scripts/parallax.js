// var parallax = (function () {
//   var background = document.querySelectorAll('.parallax__layer');


//   return {
//     move: function (layer, windowScroll, strafeAmount) {
//       var strafe = windowScroll / -strafeAmount + '%';
//       var transformString = 'translate3d(0,' + strafe  +', 0)';

//       var style = block.style;

//       style.transform = transformString
//       style.webkitTransform = transformString
//     },

//     init: function (wScroll) {
//       this.move(background, wScroll, 45);
//     }
//   }
// }() );

// window.onscroll = function () {
//   var wScroll = window.pageYOffset;

//   parallax.init(wScroll);
// }