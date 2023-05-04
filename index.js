// Code your solution here
const drivers = [ 'Sammy', 'Sarah', 'Sally' ];

function findMatching( drivers, name ){
  const findedMatch = drivers.filter( item => item.toLowerCase() === name.toLowerCase())
  return findedMatch
}

function fuzzyMatch(drivers, letter) {

  const matchingDrivers = [];

  for (let i of drivers) {
    const driver = i;
    // Check if the driver name matches the query exactly, starts with the query, or has the query as a prefix
    if (driver.toLowerCase() === letter || driver.startsWith(letter) || driver.indexOf(letter) === 0) {
      // If a match is found, add the driver name to the matchingDrivers array
      matchingDrivers.push(driver);
    }
  }

  // Return the array of matching driver names
  return matchingDrivers;
}

console.log(fuzzyMatch('s', drivers));

const arrOfObj = [
  {
    name:'medet',
    hometown: 'kartal',
  },
  {
    name:'onur',
    hometown: 'bayramoglu'
  }
]

function matchName(drivers, name){
  const passedMatch = drivers.filter( driver => {
    return driver.name === name;
  })
  return passedMatch
}