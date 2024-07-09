'use strict'
const {merge} = require('webpack-merge')
console.log('-------------------merge', merge)
const prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
  NODE_ENV: 'development',
  BASE_API: '/'
})