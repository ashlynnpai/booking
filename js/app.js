    $("document").ready(function(){
  
      $("#amount").slider({
        range: true,
        min: 0,
        max: 500,
        values: [50, 100],
        slide: function(evt, elem) {
          $("#amtVal1").text(elem.values[0]);
          $("#amtVal2").text(elem.values[1]);
        }
      });
      $("#amtVal1").text($("#amount").slider("values", 0));
      $("#amtVal2").text($("#amount").slider("values", 1));
    });