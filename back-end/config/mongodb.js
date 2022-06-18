const mongoose = require('mongoose')
const { mongo } = require('../.env')

mongoose.connect(`mongodb://${mongo.user}:${mongo.password}@${mongo.host}:${mongo.port}/${mongo.database}?authSource=admin`)
  .catch(err => {
    const msg = 'ERRO! Não foi possível conectar com o MongoDB'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
  })