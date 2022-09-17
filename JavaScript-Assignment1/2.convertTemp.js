const tempConverter = (temp, convertTo) => {
  if (temp === undefined || convertTo === undefined) {
    console.log("Please Enter Correct Values");
    return;
  }
  if (convertTo == "c") {
    let cel = (5 * (temp - 32)) / 9;
    console.log(`${temp}° Fahrenheit = ${cel}° Celsius`);
  } else {
    let far = temp * 1.8 + 32;
    console.log(`${temp}° Celsius = ${far}° Fahrenheit`);
  }
};

(function () {
  console.warn("Temperature Converter");
})();

tempConverter(45, "c"); // Temperature,ConvertTo
tempConverter(60, "f"); // Temperature,ConvertTo
tempConverter(100);
