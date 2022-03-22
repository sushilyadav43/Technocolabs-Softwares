// The forcast is 293 kelvin, this stays constant.
var kelvin = 293;

// Celcius is always 273 degree less than kelvin 
var celcius = kelvin - 273;

var Fahrenheit = celcius*(9/5)+32;
 
var fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);