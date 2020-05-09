function umfinder (value) {
  if (value === '엄') {document.getElementById('supersecret-document').style.display = 'block'}
}

function joonsikfinder (value) {
  var bodyClassList = document.getElementsByTagName('body')[0].classList
  var titleIdentifiers = document.getElementsByClassName('title-identifier')
  if (value === '엄준식') {
    bodyClassList.add('joonsik')
    for (i=0; i < titleIdentifiers.length; i++) {
      titleIdentifiers[i].innerHTML = '엄준식'
    }
  } else {
    bodyClassList.remove('joonsik')
    for (i=0; i < titleIdentifiers.length; i++) {
      titleIdentifiers[i].innerHTML = '악질 이름'
    }
  }
}