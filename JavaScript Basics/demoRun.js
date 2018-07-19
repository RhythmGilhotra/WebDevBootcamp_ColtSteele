
// This piece of code gives us some animation .It expands the width of the logo by 5px every 100millisec
var logo = document.querySelector("#hplogo");
setInterval(function(){
    logo.width+=5;
},100)

// We get a pop-up using this piece of code 
alert("Hello everyone!");