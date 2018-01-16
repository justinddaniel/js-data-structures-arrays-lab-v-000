const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (name) {
   drivers.push(name);
}

function destructivelyPrependDriver (name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver (name) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver (name) {
  drivers.shift()
}

function appendDriver (name) {
  const newdrivers = [...drivers, name];
  return newdrivers;
}

function prependDriver (name) {
  const newdrivers = [name, ...drivers];
  return newdrivers
}

function removeLastDriver () {
  drivers.slice(0, -1)
}
