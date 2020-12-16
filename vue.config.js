const dotenv = require('dotenv')
const env = dotenv.config({ path: '.env' }).parsed
const { version } = require('./package.json')

process.env.VUE_APP_HOST = env.APP_HOST
process.env.VUE_APP_PORT = env.APP_PORT
process.env.VUE_APP_VERSION = version

module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}
