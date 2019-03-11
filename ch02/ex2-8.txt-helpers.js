// 예제 2-8 ./txt-helpers.js

const print(message) => log(message, new Date())

const log(message, timestamp) =>
      console.log(`${timestamp.toString()}: ${message}`)

module.exports = {print, log}

