$(document).ready(function () {
    $("#brandSearch").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#bsearch *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

