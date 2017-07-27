
$(document).ready(function(){
  //Get JSON
  var radomQuote="";
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",function(data){
    $("#quote").text(data.quoteText);
    radomQuote=data.quoteText;
  });
  //Get JSON on Button Click
  $("#newQuote").on("click",function(){
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",function(data){
    $("#quote").text(data.quoteText);
    radomQuote=data.quoteText;
  });
  });
  //Tweet the Quote
  $("#tweet").on("click",function(){
    window.open("https://twitter.com/intent/tweet?text="+radomQuote);
  });
});
