<HTML>
<HEAD>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-2">
<SCRIPT LANGUAGE= "JavaScript" type= "text/javascript">

function ostatniaModyfikacja()
{
  var miesiace=new Array(
    "stycznia", "lutego", "marca", "kwietnia", "maja",
    "czerwca", "lipca", "sierpnia", "września",
    "października", "listopada", "grudnia"
  );
  data = new Date(document.lastModified);
  var miesiac = miesiace[data.getMonth()];
  var dzien = data.getDate();
  if (dzien < 9){
      dzien = "0" + dzien;
  }
  var rok = data.getYear();
  if (rok < 1000){
      rok = 2000 + rok - 100;
  }
  var tekst = dzien + " " + miesiac + " " + rok + " roku.";
 
  document.write("Strona została zmodyfikowana ");
  document.write(tekst);
}

</SCRIPT>
</HEAD>
<BODY>
<H2>
<SCRIPT LANGUAGE= "JavaScript" type= "text/javascript">



</SCRIPT>
</BODY>
</HTML>
