// Contains click functions to add burger and devour burger

$(function() {

	// Need "devour" buttons in a partial***
	// checkout cat-block in partials
	$('.change-eat').on('click', function(event) {
		let id = $(this).data('id');
		let newEat = $(this).data('neweat');

		let newEatState = {
			devoured: newEat
		};

		// Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed eat-status to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
	});

});  //Closes document-ready