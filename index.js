


function displayTime()
{
     let dateTime = new Date();
     let hr = padZero(dateTime.getHours());
     let mins = padZero(dateTime.getMinutes());
     let sec = padZero(dateTime.getSeconds());

     if(hr>12)
    {
        hr = hr - 12
     document.getElementById('ampm').innerHTML = 'PM'
     }  
     if (hr<10)
     {
        hr = "0" + hr;
     }
     document.getElementById('hours').innerHTML = hr
     document.getElementById('mins').innerHTML = mins
     document.getElementById('seconds').innerHTML = sec
}
 

function padZero(num){
    return num<10?"0"+num:num
}




setInterval(displayTime,500)


