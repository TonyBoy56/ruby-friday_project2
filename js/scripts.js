$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var result1 = $("input[name=q1]:checked").val();
    var result2 = $("input[name=q2]:checked").val();
    var result3 = $("input[name=q3]:checked").val();
    var result4 = $("input[name=q4]:checked").val();
    var result5 = $("input[name=q5]:checked").val();
  });
});