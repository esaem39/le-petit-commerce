$(document).ready(function () {
    $(function () {
        console.log("page html et jquery complètement chargé !")

    });
    $('.body').hide();
    $(".objet").click(function () {
        console.log("clic");
        $(".body").toggle("slow");

    });
});