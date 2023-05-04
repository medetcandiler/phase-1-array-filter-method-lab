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

    if (driver.toLowerCase() === letter || driver.startsWith(letter) || driver.indexOf(letter) === 0) {

      matchingDrivers.push(driver);
    }
  }

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