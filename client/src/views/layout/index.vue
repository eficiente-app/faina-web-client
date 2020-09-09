<template>
  <div>
    <v-app-bar
      app
      color="primary"
      clipped-left
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-toolbar-title class="text-h4 font-weight-bold">Faina Title</v-toolbar-title>

      <v-spacer />

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="white"
            dark
            v-bind="attrs"
            v-on="on"
            outlined
          >
            <v-icon
              left
              size="25"
            >
              mdi-cogs
            </v-icon>
            Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="''"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :color="$vuetify.theme.dark ? 'secondary' : 'white'"
      :dark="$vuetify.theme.dark"
      absolute
      app
      clipped
    >
      <v-list
        dense
        nav
        class="py-0 px-0"
      >
        <v-list-item
          two-line
          class="px-1 mx-2"
        >
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Usuário Fulano de Tal</v-list-item-title>
            <v-list-item-subtitle>usuario.fulano@hotmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.src"
          link
          class="px-1 mx-2"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="px-1">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="px-1 mx-2">
          <v-list-item-icon>
            <v-icon>mdi-weather-night</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              Nigth Mode
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-switch
              v-model="$vuetify.theme.dark"
              :ripple="false"
              class="pa-0 na-0"
            />
          </v-list-item-action>
        </v-list-item>

      </v-list>
      <v-footer
        absolute
        color="accent"
        outlined
      >
        <!-- padless -->
        <v-divider />
        <v-col
          class="text-center justify-bottom pa-0 ma-0"
          cols="12"
        >
          <strong>Faina</strong> - {{ new Date().getFullYear() }}
        </v-col>
      </v-footer>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage',

  data: () => ({
    drawer: true,
    items: [
      {
        icon: 'mdi-home',
        title: 'Home',
        src: '/'
      },
      {
        icon: 'mdi-chart-gantt',
        title: 'Chart Gantt',
        src: ''
      },
      {
        icon: 'mdi-cogs',
        title: 'Settings',
        src: ''
      },
      {
        icon: 'mdi-help-circle-outline',
        title: 'About',
        src: '/about'
      }
    ]
  })
}
</script>

<style>

</style>
