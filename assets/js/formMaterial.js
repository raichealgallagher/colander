//FORM
$(".md-input").focus(function() {
  $(this).parent().addClass("is-active is-completed");
});

$(".md-input").focusout(function() {
  if ($(this).val() === "") {
    $(this).parent().removeClass("is-completed");
  }
  $(this).parent().removeClass("is-active");
});
