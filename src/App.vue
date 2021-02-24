<template>
  <v-app>
    <router-view />
    <snack />
  </v-app>
</template>

<script>

export default {
  name: 'App',

  metaInfo: {
    title: 'Faina',
    titleTemplate: '%s - Tarefas',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },

  components: {
    //
  },

  data: () => ({
    //
  })
}
</script>
