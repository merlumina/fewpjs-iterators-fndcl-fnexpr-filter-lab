function findMatching(drivers, name) {
  return drivers.filter(n => n.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(n => n[0] === name[0])
}

function matchName(drivers, name) {
  return drivers.filter(n => n.name === name)
}