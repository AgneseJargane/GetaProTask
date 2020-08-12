function getDate(today) {
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
  var date = mm +"."+ dd + "." + yyyy;
  return date
}

function getTime(today) {
  var hh = today.getHours();
  var mm = today.getMinutes();
  var ss = today.getSeconds();
    if(mm<10) mm='0'+mm;
    if(ss<10) ss='0'+ss;
  var time = hh + ":" + mm + ":" + ss;
  return time
}

function getDateTime(){
  var today = new Date();
  var dateTime  = getDate(today) + ", " + getTime(today);
  document.getElementById('date').innerHTML = dateTime;
}
setInterval(getDateTime, 1000);


var secondsTotal = 0;
function counter() {
    ++secondsTotal;
    var minutes = Math.floor(secondsTotal / 60);
    var seconds = Math.floor(secondsTotal)  % 60;
    if(seconds<10) seconds = '0'+ seconds;
    if(minutes<10) minutes = '0'+ minutes;
    document.getElementById('counter').innerHTML = minutes + ":" + seconds;
}
setInterval(counter,1000);


$(document).ready(function(){
      $("#getResponse").click(function () {
      $('#loader').show();
      $("#getResponse").prop('disabled', true);
      $("#randomColorButton").prop('disabled', true);
    $.ajax({url: 'https://cors-anywhere.herokuapp.com/https://getapro.lv/',
      success: function(data,statusText,xtr){
      var statusCode = xtr.status;
      document.getElementById('response_code').value = statusCode;
      $('#loader').hide();
      $("#getResponse").prop('disabled', false);
      $("#randomColorButton").prop('disabled', false);
    }});
  });
});


function generateRandomColor(){
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('changeCircleColor').style.fill = randomColor;
}

function clearInputField() {
    document.getElementById('response_code').value = '';
}

function onLoad() {
clearInputField();
getDateTime();
counter();
}

window.onload = onLoad();
