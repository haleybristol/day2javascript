$(document).ready(function() {
  $("button#invert").click(function() {
    $("body").toggleClass("invert-colors");

    console.log(this.id);

  });
});
