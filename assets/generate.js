var totalVarLen = 0
var totalVar = []

for (i=0; i<4; i++) {
    totalVarLen += locations[i].length
    for (j=0; j<locations[i].length; j++) {
        totalVar = totalVar.concat(locations[i][j])
    }
}

function generate (isExmapled, targetID) {
    var varName = ''
    if (isExmapled) {
        varName = exampleName[Math.floor(Math.random() * exampleName.length)]
    } else {
        varName = document.getElementById('name').value
    }
    var varLocation = document.getElementById('location').value
    var location = totalVar[Math.floor(Math.random() * totalVar.length)]
    var result = ''
    if (locations[0].indexOf(location) >= 0) {
        result = '미구현'
    } else if (locations[1].indexOf(location) >= 0) {
        var randomObject = objects[Math.floor(Math.random() * objects.length)]
        result = varLocation + location + randomObject + '도둑' + varName
    } else if (locations[2].indexOf(location) >= 0) {
        result = varLocation + location + '절대강자' + varName
    } else /*if (locations[3].indexOf(location) >= 0)*/ {
        result = varLocation + location + '스피드레이서' + varName
    }
    document.getElementById(targetID).innerHTML = result
}

setInterval(function () {
    generate(true, 'example')
}, 5000)