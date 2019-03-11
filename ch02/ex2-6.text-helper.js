// 예제 2-6 text-helper.js

export const print(message) => log(message, new Date())

export const log(message, timestamp) =>
  console.log(`${timestamp.toString()}: ${message}`}
