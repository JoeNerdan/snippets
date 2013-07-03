/*
   see what a mobile client does by sending the messages as requests to the server log
   could use some kind of script on the server to filter out the messages and not have
   to tail -f the log files
 * */


function serverLog(msg){
  var xmlhttp = new XMLHttpRequest;
  xmlhttp.onreadystatechange=function(){ 
  //do nothing here
  }

  //TODO needs improvement, should go together with the server-side script
  //add some marks or something which we than can use with cut
  msg = "Client=====:"+msg;
  xmlhttp.open("GET", msg, true);
  xmlhttp.send();
}

