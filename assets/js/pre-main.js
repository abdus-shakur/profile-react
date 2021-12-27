const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('redirect');
const userAction = async () => {
    await (await fetch('https://integrated-services.herokuapp.com/data-service/save/?referrer='+myParam)).json();
}
userAction();
console.log(myParam);
localStorage.setItem("email", "testEmail");
$.getJSON('https://api.db-ip.com/v2/free/self', function (data) {
  localStorage.setItem("dt_obj", JSON.stringify(data, null, 2));
  var test = data.ipAddress.split(".");
  var ts = []
  test.forEach(val => {
    ts.push(1 + val);
  })
  localStorage.setItem("formatted", ts);
  localStorage.setItem("dt_obj_parse", "[" + data.ipAddress + "," + data.city + "," + data.stateProv + "," + data.countryName + "," + data.countryCode + "," + data.continentCode + "," + data.continentName + "]");
  localStorage.setItem("dt", data.ipAddress);
});