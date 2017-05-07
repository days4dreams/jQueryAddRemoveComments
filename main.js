/* event delegation in building a comment form. Includes functionality for user to fill out comment form and add comment to the list. Then allows user to delete comments.*/

// When user submits form; Prevent the default action
// Clears errors and error messages that might be showing when user submits form
// If user hasn't entered a value in #comment field; add the error class to the #comment input; use after() method to add message below

// If user has entered a comment add to the #commentList

Use event delegation so that we can add this click event to comments that have not yet been created.


$('form').on('submit', function(e){
 e.preventDefault(); 
  var commentContent = $('#comment').val();
  $('input').removeClass('error');
    $('.error-message').remove();

  if (commentContent == ""){
    $('#comment').addClass('error');
    $('#comment').after('<p class="error-message">This field is required.</p>'); }
  else { 
    $('#commentList').append('<li><p>' + commentContent + '</p><i class="fa fa-trash-o delete"></i></li>'); }
});

$('#commentList').on('click', '.delete', function() {
    $(this).parent().remove();
// If user clicks on a trash icon (.delete), list item is removed from the comment list.
});

