//CLick to cross out list item
$("ul").on("click", "li", function () {
    $(this).toggleClass("crossed");
});

//Click X to delete list item
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
    event.stopPropagation();
});

//Entering a list item
$("input").on("keypress", function (event) {
    if (event.which === 13) {
        //grabbing new list item
        var todoText = $(this).val();
        $(this).val("");
        //creating new li
        $("ul").append("<li><span><img src=\"trash-alt-regular.svg\"></span> " + todoText + "</li>");
    }
});

$(".plus").on("click", function () {
    $("input").fadeToggle();
});