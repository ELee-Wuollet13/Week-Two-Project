//Front End Logic
$(document).ready(function() {
  $("form#intake").submit(function() {
    $("results").hide(".javascript .ruby .c");
    let num1 = parseInt($("input:radio[name=color]:checked").val());
    let num2 = parseInt($("input:radio[name=hand]:checked").val());
    let num3 = parseInt($("input:radio[name=pet]:checked").val());
    let num4 = parseInt($("input:radio[name=drink]:checked").val());
    let num5 = parseInt($("input:radio[name=career]:checked").val());
    let num = (num1 += num2 += num3 += num4 += num5);
//Back End Logic
    if (isNaN(num)) {
      alert("Please fill out all fields")
    } else if (num > 2) {
      $('.result').html("javascript!")
    } else if (num < 2 && num > -2) {
      $('.result').html("Ruby!")
    } else {
      $('.result').html("C#!")
    }
    console.log(num)
    event.preventDefault();
  });
});
