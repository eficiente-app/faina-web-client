const dotenv = require('dotenv')
const env = dotenv.config({ path: '../.env' }).parsed

process.env.VUE_APP_HOST = env.APP_HOST
process.env.VUE_APP_PORT = env.APP_PORT
process.env.VUE_APP_TITLE = env.APP_TITLE

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  outputDir: '../server/public',
  productionSourceMap: false,
  pwa: {
    name: 'Tarefas',
    themeColor: '#00613B',
    msTileColor: '#00613B',
    manifestOptions: {
      background_color: '#00613B'
    }
  }
}
