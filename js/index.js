$(document).ready(function(){ 

 $("#botonazo").click(function() { 
   $("#quote").fadeOut(150).delay(1500).fadeIn(1000);
   $("#author").fadeOut(150).delay(1500).fadeIn(1000);
});
});

function getQuote() {

  console.log('entro en getQuote');
  console.log('voy a crear script');
  
  var script = document.createElement('script');
  
  console.log('script creado');
  
  script.src = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote&lang=en';
  script.id = 'quoteID'
  
  console.log('script src metido');
  console.log(script.src);
  console.log('El script es : ', script);
  
  document.getElementsByTagName('head')[0].appendChild(script);
  document.getElementsByTagName('head')[0].removeChild(script);
}

  
  function parseQuote(response)
  {
    console.log('entro en parseQuote')
    document.getElementById("quote").innerHTML = response.quoteText;
    console.log(response.quoteText);
    document.getElementById("author").innerHTML = '― ' + response.quoteAuthor;
    console.log(response.quoteAuthor);
  }