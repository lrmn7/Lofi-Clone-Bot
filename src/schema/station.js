const { Schema, model } = require('mongoose')

const Radio = new Schema({
  Guild: String,
  Radio: String,
  oldradio: String
})

module.exports = model('station', Radio)
