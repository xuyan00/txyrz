/*
  Created by S.T
  Nov 21st, 2014
*/


var __nextNumber = 10000;
function nextNumber() {
  return __nextNumber++;
}

function popupAlert(text) {
  var id = "alert-box-" + nextNumber();
  $("body").prepend('<div class="alert alert-info" id="'+id+'" style="position: fixed; z-index: '+nextNumber()+'; width: 100%">'+text+'</div>');
  setTimeout(function() {
    $("#" + id).fadeOut(500);
  }, 1200);
}

$(document).ready(function() {
  // Delegate all forms!
  $("form[class~=ajax]").submit(function() {
    $.post($(this).attr("action"), $(this).serialize(), function(data) {
      popupAlert(data);
    });
    return false;
  });

  // Delegate all anchor
  $("a[class~=ajax]").click(function() {
    $.get($(this).attr("href"), function(data) {
      popupAlert(data);
    });
    return false;
  });
});
