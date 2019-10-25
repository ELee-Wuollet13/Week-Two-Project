$(document).ready(function() {
  $("form#intake").submit(function() {
    $("results").hide();
    let num1 = parseInt($("input:radio[name=color]:checked").val());
    let num2 = parseInt($("input:radio[name=hand]:checked").val());
    let num3 = parseInt($("input:radio[name=pet]:checked").val());
    let num4 = parseInt($("input:radio[name=drink]:checked").val());
    let num5 = parseInt($("input:radio[name=career]:checked").val());
    let num = (num1 += num2 += num3 += num4 += num5)

    if (num > 2) {
      console.log("hi")
      $('.result').show(".javascript");
    } else if (num < 2 && num > -2) {
      console.log("mid")
      $('.result').show(".ruby")
    } else {
      console.log("low")
      $('.result').show(".c")
    }
    console.log(num)

    event.preventDefault();
  });
});
