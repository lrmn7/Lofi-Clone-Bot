const { Schema, model } = require('mongoose')

const mode = new Schema({
  Guild: String,
  mode: String,
  oldmode: String
})

module.exports = model('mode', mode)
