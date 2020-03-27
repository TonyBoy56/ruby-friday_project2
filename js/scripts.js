$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var result1 = $("input[name=q1]:checked").val();
    var result2 = $("input[name=q2]:checked").val();
    var result3 = $("input[name=q3]:checked").val();
    var result4 = $("input[name=q4]:checked").val();
    var result5 = $("input[name=q5]:checked").val();

    if (result1 === result2) {
      $("#output").show().text("Nice choice! Try some HTML/CSS!");
    } else if (result2 === result3) {
      $("#output").show().text("Hmmm... It seems back-end programming may be suitable for you."); 
    } else if (result3 === result4) {
      $("#output").show().text("Nice! plenty of caffiene is a great choice for some front-end focused development!" );
    } else if (result4 === result5) {
      $("#output").show().text("You know, maybe it's worth considering taking up something else.");
    }
  });
});