var totalJob = []

for (i=0; i<jobs.length; i++) {
  totalJob = totalJob.concat(jobs[i])
}

function generate (varName, varLocation, targetID) {
  if (isLimitedCheckbox.checked && isLimitedNumInput.value >= 12) {
    result = 'N'.repeat(isLimitedNumInput.value + 2)
    while (result.length > isLimitedNumInput.value) {
      result = generateResult(varName, varLocation)
    }
  } else {
    result = generateResult(varName, varLocation)
  }
  
  document.getElementById(targetID).innerHTML = result
}

function generateResult (varName, varLocation) {
  var result = ''

  if (Math.random() < 0.8) { /* 일반 장소 처리 */
    var randomDetailLocation = locations[0][Math.floor(Math.random() * locations[0].length)]
    var randomDetailJob = totalJob[Math.floor(Math.random() * totalJob.length)]
    // debug: console.log(randomDetailLocation, randomDetailJob)

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
    if ((randomDetailLocation === '지하철' || randomDetailLocation === '지하철역') && randomDetailJob === '앞에서절두번하는' ) {
      // debug: console.log('지하철', '절두번하는')
      while (randomDetailJob === '앞에서절두번하는') {
        // debug: console.log('지하철', '절두번하는', '루프')
        randomDetailJob = totalJob[Math.floor(Math.random() * totalJob.length)]
      }
      // debug: console.log('지하철', '절두번하는', randomDetailJob)
    }
    // 특별한 문장 정의 완료

    if (jobs[0].indexOf(randomDetailJob) >= 0) {
      result = generateSpecificCase(1, [varLocation, randomDetailLocation, randomDetailJob, varName])
    } else if (jobs[1].indexOf(randomDetailJob) >= 0) {
      result = generateSpecificCase(2, [varLocation, randomDetailLocation, randomDetailJob, varName])
    }
  } else { /* 특별한 위치 변수 정의 처리 */
    var randomDetailLocation = locations[1][Math.floor(Math.random() * locations[1].length)]
    // 여기서 문제가 발생한다면 특별한 위치 변수를 제대로 정의하지 않은것.
    // debug: console.log('specificLocations', specificLocations[randomDetailLocation], randomDetailLocation)
    if (specificLocations[randomDetailLocation][1]) {
      result = generateSpecificCase(2, [varLocation, randomDetailLocation, specificLocations[randomDetailLocation][0], varName])
    } else {
      result = generateSpecificCase(3, [varLocation, randomDetailLocation, specificLocations[randomDetailLocation][0], varName])
    }
  }
  //debug: console.log(randomDetailLocation, randomDetailJob, result)

  return result
}

/* params = [varLocation, randomDetailLocation, randomDetailJob, varName] */
function generateSpecificCase (caseCode, params) {
  if (caseCode === 1) {
    var randomObject = objects[Math.floor(Math.random() * objects.length)]

    // 특별한 문장 정의
    if (params[1] === '산채비빔밥먹는스님앞에서') {
      return params[1] + randomObject + '먹는' + params[3]
    }
    if (params[2] === '교제사실을들킨'){
      return params[0] + params[1] + josa.r(randomObject, '와/과') + params[2] + params[3]
    }
    // 특별한 문장 정의 완료

    return params[0] + params[1] + randomObject + params[2] + params[3]
  } else if (caseCode === 2) {

    // 특별한 문장 정의
    if (params[1] === '납골당') {
      params[2] = ['유골항아리도둑', '유골항아리파괴자'][Math.floor(Math.random() * 2)]
    }
    // 특별한 문장 정의 완료

    return params[0] + params[1] + params[2] + params[3]
  } else if (caseCode === 3) {

    // 특별한 문장 정의
    if (params[1] === '틀니') {
      params[1] = (Math.floor(Math.random() * 11)+1) + '주' + params[1]
    }
    // 특별한 문장 정의 완료

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