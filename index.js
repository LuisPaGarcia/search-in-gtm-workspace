const json = require('./GTM-WK2377_ORG.json')
const string = JSON.stringify(json)
const object = JSON.parse(string)
const tags = object.containerVersion.tag

tags.map(tag => {
  tag.parameter.map(parameter => {
    if (parameter.value && parameter.value.includes('')) {
      console.log(tag.name)
    }
  })
})

