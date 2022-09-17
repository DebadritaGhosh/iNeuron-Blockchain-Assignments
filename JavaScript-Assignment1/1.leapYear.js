const LeapYearFinder = (year) => {
  if (year % 4 == 0 && (year % 400 == 0 || year % 100 !== 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
};

(function () {
  console.warn("Leap Year");
})();

LeapYearFinder(2020);
LeapYearFinder(2019);
