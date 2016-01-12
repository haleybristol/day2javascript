$(document).ready(function() {
  $('#blanks form').submit(function(event){
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var messageInput = $("input#message").val();

/* Entry append section */
    $('.name').append(nameInput);
    $('.address').append(addressInput);
    $('.message').append(messageInput);

    event.preventDefault();
  });
});
