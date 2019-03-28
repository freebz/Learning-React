var printNames = response => {
  var people = JSON.parse(response).results,
      names = people.map(({name}) => `${name.last}, ${name.first}`)
  console.log(names.join('\n'))
}
