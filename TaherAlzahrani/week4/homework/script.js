console.log("JS connected"); // this to check that our script is connected to out HTML

var body = document.querySelector("body"); // query select body 
// change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties
// change the backgroundColor to a color of your choice

body.style = 'font-family: Arial, sans-serif; background-color: LightGray';

var nickname = document.querySelector("#nickname"); // qurey select the ID nickname
//add some value to nickname Hint: innerHTML

nickname.innerHTML = "TAZ"

var favorites = document.querySelector("#favorites"); // query select favorites byID
var hometown = document.querySelector("#hometown"); // query select hometown byID
// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';

favorites.innerHTML = "Cooding";
hometown.innerHTML = "Jubail";

//change the color of all selectors to colors of your choice, it better be good LOL

nickname.style = favorites.style = hometown.style = "color: blue"



// https://www.w3schools.com/jsref/prop_style_color.asp