/*
 ******************** Function: Add viewport width to screen with URL parameter ?=width
 */

//Append the div when the URL contains ?=width
(function() {
    var location = window.location.href;
    if (location.indexOf("width") > -1) {
        $('body').prepend('<div class="width"></div>');
    }
})();
//Style the appended div
$('.width').css({
    'padding': '15px',
    'background-color': '#333',
    'color': '#fff',
    'font-family': 'Helvetica',
    'text-align': 'center',
    'font-size': '18px',
    'position': 'fixed',
    'width': '100%',
    'z-index': '1500'
});
//Calculate the width initally and adjust it on resize
$(window).resize(function() {
    var wi = $(window).width();
    $('.width').text(+wi + 'px');
});
var wi = $(window).width();
$('.width').text(+wi + 'px');
