import { ValidationObserver, ValidationProvider, extend, setInteractionMode } from 'vee-validate'
import { email, length, max, numeric, required } from 'vee-validate/dist/rules'
import Vue from 'vue'

extend('email', {
  ...email,
  message: 'Email inválido.'
})

extend('numeric', {
  ...numeric,
  message: 'O campo {_field_} deve ser numérico'
})
extend('required', {
  ...required,
  message: 'O campo {_field_} é obrigatório'
})

extend('max', {
  ...max,
  message: 'Valor máximo para {_field_} é: {max}'
})

extend('length', {
  ...length,
  message: 'Quantidade de caracteres para {_field_} deve ser de {length}'
})

setInteractionMode('passive')

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
