const https = require('https')
https.get(
  'https://api.randomuser.me/?nat=US&results=10',
  res => {
    let results = ''

    res.setEncoding('utf8')
    res.on('data', chunk => results += chunk)

    res.on('end', () => printNames(results))
  }
}
