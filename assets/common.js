window.onload = function () {document.getElementsByTagName('body')[0].classList.remove('preload')}

function umfinder (value) {
  if (value === '엄') {document.getElementById('supersecret-document').style.display = 'block'}
}

function joonsikfinder (value) { 
  // 이걸 보고 있는 넌 너무 많은걸 알아버렸어
  var bodyEle = document.getElementsByTagName('body')[0]
  var titleIdentifiers = document.getElementsByClassName('title-identifier')
  if (value === '엄준식') {
    //bodyEle.className = ''
    //bodyEle.classList.add('joonsik')
    //titleIdentifiers[0].innerHTML = '엄준식'
    //titleIdentifiers[1].innerHTML = '엄준식을'
  } else if (value === '박원순') {
    //bodyEle.className = ''
    //bodyEle.classList.add('sibal')
    //titleIdentifiers[0].innerHTML = '씨발아저씨'
    //titleIdentifiers[1].innerHTML = '씨발아저씨를'
  } else if (value === '트럼프') {
    //bodyEle.className = ''
    //bodyEle.classList.add('trump')
    //titleIdentifiers[0].innerHTML = '트럼프'
    //titleIdentifiers[1].innerHTML = '트럼프를'
  } else {
    bodyEle.className = ''
    titleIdentifiers[0].innerHTML = '악질 이름'
    titleIdentifiers[1].innerHTML = '악질 이름을'
  }
}
