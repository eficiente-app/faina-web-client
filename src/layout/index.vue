<template>
  <div>
    <v-app-bar
      app
      color="secondary"
      dark
      flat
    >
      <v-img
        :src="logo"
        alt="Faina Logo"
        class="shrink mr-2"
        contain
        transition="scale-transition"
        width="50"
      />
      <v-toolbar-title class="ml-0 pl-0 display-2 font-weight-bold">ina</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        dark
        icon
      >
        <v-icon>
          mdi-bell
        </v-icon>
      </v-btn>
      <v-btn
        dark
        icon
      >
        <v-icon>
          mdi-cogs
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        dark
        large
        outlined
      >
        <!-- <v-icon
          left
          size="25"
        >
          mdi-account-circle
        </v-icon> -->
         <v-avatar
            size="38"
            class="mr-2 ml-0 pl-0"
          >
            <v-img
              :src="`https://avataaars.io/?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun`"
            />
          </v-avatar>
        Fazer Login
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          align-with-title
          class="ml-5"
        >
          <v-tab to="/dashboard">
            <v-icon left>
              mdi-desktop-mac-dashboard
            </v-icon>
            Dashboard
          </v-tab>
          <v-tab to="/tarefas">
            <v-icon left>
              mdi-format-list-bulleted-type
            </v-icon>
            Tarefas
          </v-tab>
          <v-tab to="/projetos">
            <v-icon left>
              mdi-view-dashboard-outline
            </v-icon>
            Projetos
          </v-tab>
          <v-tab to="/quadros">
            <v-icon left>
              mdi-trello
            </v-icon>
            Quadro
          </v-tab>
          <v-tab to="/gantt">
            <v-icon left>
              mdi-chart-gantt
            </v-icon>
            Gantt
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer
      app
      padless
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Faina</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage',

  data: () => ({
    logo: require('../assets/logo_faina.png')
  })
}
</script>
