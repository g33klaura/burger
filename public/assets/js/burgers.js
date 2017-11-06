// Contains click functions to add burger and devour burger

$(function() {

	// Need 'devour' buttons in a partial***
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

	// Click function for '#add-burger' button
	$('#add-burger').on('submit', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $('#new-burger').val().trim(),
      // devoured: $('[name=sleepy]:checked').val().trim()
      // My app doesn't have a sleepy/not sleepy radio button...
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new delicious burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});  //Closes document-ready