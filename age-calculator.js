const ageCalculator = function(name, yearOfBirth, currentYear) {
  var years = currentYear - yearOfBirth
  return name + " is " + years + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Aliya", 1986, 2023));