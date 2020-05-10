var totalJob = []

for (i=0; i<jobs.length; i++) {
  totalJob = totalJob.concat(jobs[i])
}

function generate (varName, varLocation, targetID) {
  var result = ''

  if (Math.random() < 0.8) { /* 일반 장소 처리 */
    var randomDetailLocation = locations[0][Math.floor(Math.random() * locations[0].length)]
    var randomDetailJob = totalJob[Math.floor(Math.random() * totalJob.length)]
    // 특별한 문장 정의
    if (randomDetailLocation === '시내버스') {
      if (Math.random() > 0.3) {
        randomDetailLocation = (Math.floor(Math.random() * 999)+1) + '번' + randomDetailLocation
      }
    } else if (randomDetailLocation.indexOf('학교') >=0) {
      if (Math.random() > 0.5) {
        randomDetailLocation = randomDetailLocation + (Math.floor(Math.random() * 2)+1) + '학년' + (Math.floor(Math.random() * 9)+1) + '반'
      }
    }
    //
    if (jobs[0].indexOf(randomDetailJob) >= 0) {
      result = generateSpecificCase(1, [varLocation, randomDetailLocation, randomDetailJob, varName])
    } else if (jobs[1].indexOf(randomDetailJob) >= 0) {
      result = generateSpecificCase(2, [varLocation, randomDetailLocation, randomDetailJob, varName])
    }
  } else { /* 특별한 위치 변수 정의 */
    var randomDetailLocation = locations[1][Math.floor(Math.random() * locations[1].length)]
    if (specificLocations[randomDetailLocation][1]) {
      result = generateSpecificCase(2, [varLocation, randomDetailLocation, specificLocations[randomDetailLocation][0], varName])
    } else {
      result = generateSpecificCase(3, [varLocation, randomDetailLocation, specificLocations[randomDetailLocation][0], varName])
    }
  }

  document.getElementById(targetID).innerHTML = result
  //debug: 
  console.log(randomDetailLocation, randomDetailJob, result)
}

/* params = [varLocation, randomDetailLocation, randomDetailJob, varName] */
function generateSpecificCase (caseCode, params) {
  if (caseCode === 1) {
    var randomObject = objects[Math.floor(Math.random() * objects.length)]
    // 특별한 문장 정의
    if (params[1] === '산채비빔밥먹는스님앞에서') {
      return params[1] + randomObject + '먹는' + params[3]
    }
    //
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

function debug (a, b, c) {
  for (i=0; i<100; i++) {
    generate(a, b, c)
  }
}