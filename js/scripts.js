$(document).ready(function() {
  $("form#intake").submit(function(event) {
    let num1 = parseInt($("input:radio[name=color]:checked").val());
    let num2 = parseInt($("input:radio[name=color]:checked").val());
    let num3 = parseInt($("input:radio[name=color]:checked").val());
    let num4 = parseInt($("input:radio[name=color]:checked").val());
    let num5 = parseInt($("input:radio[name=color]:checked").val());
    let numTotal = (num1 + num2 + num3 + num4 + num5)

    if (numTotal => 2) {
      $('.result').show(javascript);
    } else if (numTotal < 2 && num total > -2) {
      $('.result').show(ruby)
    } else {
      $('.result').show(c#)
    }
    console.log(num1)
    console.log(num2)
    console.log(num3)
    console.log(num4)
    console.log(num5)
    event.preventDefault();
  });
});
