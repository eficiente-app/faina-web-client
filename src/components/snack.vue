<template>
  <v-snackbar
    v-model="snackbar"
    color="error"
    multi-line
    top
    app
    dark
    timeout="-1"
  >
    {{ text }}
    {{ notificacao }}

    <template v-slot:action="{ attrs }">
      <v-btn
        text
        v-bind="attrs"
        dark
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SnackBarComponnent',

  computed: {
    ...mapState('app', [
      'notificacao'
    ])
  },

  data: () => ({
    snackbar: false,
    text: 'Teste'
  })
}
</script>
