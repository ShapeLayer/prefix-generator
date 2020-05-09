var totalJob = []

for (i=0; i<jobs.length; i++) {
  totalJob = totalJob.concat(jobs[i])
}

function generate (varName, varLocation, targetID) {
  var randomDetailLocation = locations[Math.floor(Math.random() * locations.length)]
  var randomDetailJob = totalJob[Math.floor(Math.random() * totalJob.length)]
  var result = ''

  if (specificLocations[randomDetailLocation] !== undefined) {
    if (specificLocations[randomDetailLocation][1]) {
      result = generateSpecificCase(2, [varLocation, randomDetailLocation, specificLocations[randomDetailLocation][0], varName])
    } else {
      result = generateSpecificCase(3, [varLocation, randomDetailLocation, specificLocations[randomDetailLocation][0], varName])
    }
  } else {
    if (jobs[0].indexOf(randomDetailJob) >= 0) {
      result = generateSpecificCase(1, [varLocation, randomDetailLocation, randomDetailJob, varName])
    } else if (jobs[1].indexOf(randomDetailJob) >= 0) {
      result = generateSpecificCase(2, [varLocation, randomDetailLocation, randomDetailJob, varName])
    }
  }
  document.getElementById(targetID).innerHTML = result
  // debug: console.log(randomDetailLocation, randomDetailJob, result)
}

/* params = [varLocation, randomDetailLocation, randomDetailJob, varName] */
function generateSpecificCase (caseCode, params) {
  if (caseCode === 1) {
    var randomObject = objects[Math.floor(Math.random() * objects.length)]
    return params[0] + params[1] + randomObject + params[2] + params[3]
  } else if (caseCode === 2) {
    return params[0] + params[1] + params[2] + params[3]
  } else if (caseCode === 3) {
    if (params[0] === '' || Math.floor(Math.random() * 2) === 0) {
      return params[1] + params[2] + params[3]
    } else {
      if (Math.floor(Math.random() * 2) === 0) {
        return params[1] + params[2] + params[0] + '의아들' + params[3]
      } else {
        return params[1] + params[2] + params[0] + '의딸' + params[3]
      }
    }
  } else {
    return undefined
  }
}

setInterval(function () {
  var exampleName = exampleNames[Math.floor(Math.random() * exampleNames.length)]
  var exampleLocation = exampleLocations[Math.floor(Math.random() * exampleLocations.length)]
  generate(exampleName, exampleLocation, 'example-result')
  document.getElementById('example-location').innerHTML = exampleLocation
  document.getElementById('example-name').innerHTML = exampleName
}, 5000)