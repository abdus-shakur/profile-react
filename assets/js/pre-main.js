localStorage.setItem("email","testEmail");
  $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
  localStorage.setItem("dt_obj",JSON.stringify(data, null, 2));
  localStorage.setItem("dt_obj_parse","["+data.city+","+data.stateProv+","+data.countryName+","+data.countryCode+","+data.continentCode+","+data.continentName+"]");
//   localStorage.setItem("dt_obj_parse","["+data.ipAddress+","+data.city+","+data.stateProv+","+data.countryName+","+data.countryCode+","+data.continentCode+","+data.continentName+"]");
  localStorage.setItem("dt",data.ipAddress);
  });