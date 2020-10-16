$(function(){
$(".devour-btn").on("click", function (event) {
    var id = $(this).data("id");


    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: { devoured: true }
    }).then(
        function () {
            console.log("You ate the burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(".new-burger-btn").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        name: $("#name").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/cats", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("Created a new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

})