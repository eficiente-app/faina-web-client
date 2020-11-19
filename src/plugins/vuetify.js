import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#10163A',
        secondary: '#4527A0',
        accent: '#EDEDED',
        error: '#E74C3C',
        info: '#0984E3',
        success: '#079992',
        warning: '#F9A825'
      }
    }
  }
})
