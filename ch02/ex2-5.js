// 예제 2-5 새로운 방식과 예저 방식의 객체 선언 문법 비교

// 예전 방식
var skier = {
  name: name,
  sound: sound,
  powderYell: function() {
    var yell = this.sound.toUpperCase()
    console.log(`${yell} ${yell} ${yell}!!!`)
  },
  speed: function(mph) {
    this.speed = mph
    console.log('속력(mph):', mph)
  }
}

// 새로운 방식
const skier = {
  name,
  sound,
  powerYell() {
    let yell = this.sound.toUpperCase()
    console.log(`${yell} ${yell} ${yell}!!!`)
  },
  speed(mph) {
    this.speed = mph
    console.log('속력(mph):', mph)
  }
}
