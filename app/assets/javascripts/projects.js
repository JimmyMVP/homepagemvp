

$(document).on('page:change', function(){

    //Expand wells
    $('.project-well').on("click", function() {
        $(this).find("p").slideToggle()
        console.log("Expanding well")
    });


});