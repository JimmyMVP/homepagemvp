// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

var hoverColor = 'rgba(0, 0, 200, 0.3)'

$(document).on('page:change', function () {
    

    var leaveColor = $(".div-button").css("background-color")


        $(".div-button").hover(
        function () {
            $(this).animate({backgroundColor: hoverColor }, 500)
    }, function() {
            $(this).stop().animate({backgroundColor: leaveColor}, 500)
        }
    );



});