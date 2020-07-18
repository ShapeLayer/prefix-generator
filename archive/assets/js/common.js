var isLimitedCheckbox = document.getElementById('is-limited')
var isLimitedNumInput = document.getElementById('is-limited-num-input')
var isLimitedAlerter = document.getElementById('is-limited-alerter')

window.onload = function () {
  document.getElementsByTagName('body')[0].classList.remove('preload')
}
isLimitedCheckbox.onchange = function () {
  if (isLimitedCheckbox.checked) {
    document.getElementById('is-limited-wrapper').style = "background-color: #fff;"
  } else {
    document.getElementById('is-limited-wrapper').style = "background-color: rgba(0, 0, 0, 0);"
  }
}
isLimitedNumInput.onchange = function () {
  if (isLimitedNumInput.value < 12) {
    isLimitedAlerter.innerHTML = '12자리 이상!'
  } else {
    isLimitedAlerter.innerHTML = '글자수 제한'
  }
}


function umfinder (value) {
  if (value === '엄') {document.getElementById('supersecret-document').style.display = 'block'}
}

function joonsikfinder (value) { 
  // 이걸 보고 있는 넌 너무 많은걸 알아버렸어
  var bodyEle = document.getElementsByTagName('body')[0]
  var titleIdentifiers = document.getElementsByClassName('title-identifier')
  if (value === '엄준식') {
    bodyEle.className = ''	
    //bodyEle.classList.add('joonsik')	
    titleIdentifiers[0].innerHTML = '엄준식'	
    titleIdentifiers[1].innerHTML = '엄준식을'
  } else if (value === '박원순') {
  } else if (value === '트럼프') {
  } else {
    bodyEle.className = ''
    titleIdentifiers[0].innerHTML = '악질 이름'
    titleIdentifiers[1].innerHTML = '악질 이름을'
  }
}

var checkboxLabelers = document.getElementsByClassName('checkboxlabeler-input')
for (checkboxLabeler in checkboxLabelers) {
  checkboxLabeler.onchange = function () {
    if (checkboxLabeler.checked) {
    } else {
    }
  }
}

