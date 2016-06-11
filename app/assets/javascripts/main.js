//Place all the behaviors and hooks related to the matching controller here.
//All this logic will automatically be available in application.js.
//You can use CoffeeScript in this file: http://coffeescript.org/


function split(element) {

    if(element == null) return
    var text = element.find("h1").text().trim()
    text = text.split("")
    var rep = "";
    for(var i = 0; i < text; i++) {
        element.appendChild("AAA")
    }
    console.log(element)
    element.show()
    return element


}



$(document).ready(function () {


    var el = $(".page-notice")
    children = split(el)

    if(children.length !== 0)
    for(var i = 0; i < children.length; i++) {

        //children[i].wobble()
        console.log(i)


    }


})