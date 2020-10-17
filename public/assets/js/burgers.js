$(function(){
$(".devour-btn").on("click", function (event) {
    const id = $(this).data("id");


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

$("#new-burger-btn").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
        burger_name: $("#name").val().trim(),
    };

    // Send the POST request.
    if(newBurger.burger_name != ""){
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("Created a new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
}

});
$(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("hid the evidence", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})