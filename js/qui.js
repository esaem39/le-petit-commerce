$(document).ready(function () {
    $(function () {
        console.log("page html et jquery complètement chargé !")

    });

    $(".objet").hover(function () {
        console.log("clic");
        $(".body").toggle("slow");

    });
});