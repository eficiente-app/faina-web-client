<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
      flat
      height="35px"
    >
      <v-img
        :src="logo"
        alt="Faina Logo"
        class="shrink mr-2"
        contain
        transition="scale-transition"
        width="20px"
      />
      <v-toolbar-title
        class="ml-0 pl-0 title font-weight-bold"
      >
        Faina
      </v-toolbar-title>

      <!-- ListView -->
      <v-menu
        offset-y
        close-on-content-click
        transition="slide-y-transition"
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            text
            plain
            v-bind="attrs"
            class="caption font-weight-light ml-4"
            v-on="on"
          >
            Serviços
            <v-icon
              small
            >
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </template>

        <v-list
          v-for="(list, indx) in menuList"
          :key="indx"
          subheader
          flat
          dense
          style="max-height: 250px"
          class="overflow-y-auto"
        >
          <v-subheader>
            {{ list.menu }}
          </v-subheader>

          <v-list-item
            v-for="(itens, idx) in list.itens"
            :key="idx"
            link
            :to="itens.path"
          >
            <v-list-item-icon
            >
              <v-icon
                class="ma-0 pa-0"
                v-text="itens.icon"
              />
            </v-list-item-icon>

            <v-list-item-content
              class="ma-0 pa-0"
            >
              <v-list-item-title
                class="ma-0 pa-0"
                v-text="itens.descricao"
              />
              <!-- <v-list-item-subtitle>Change your Google+ profile photo</v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider />

        <!-- <v-list
          subheader
          two-line
          dense
        >
          <v-subheader>
            Hangout notifications
          </v-subheader>

          <v-list-item-group
            v-model="settings"
            multiple
          >
            <v-list-item>
              <template v-slot:default="{ active, }">
                <v-list-item-action>
                  <v-checkbox
                    :input-value="active"
                    color="primary"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Notifications</v-list-item-title>
                  <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>

            <v-list-item>
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox
                    :input-value="active"
                    color="primary"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Sound</v-list-item-title>
                  <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>

            <v-list-item>
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox
                    :input-value="active"
                    color="primary"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Video sounds</v-list-item-title>
                  <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>

            <v-list-item>
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox
                    :input-value="active"
                    color="primary"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Invites</v-list-item-title>
                  <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list> -->
      </v-menu>

      <v-spacer />

      <!-- avatar -->
      <v-badge
        color="warning"
        content="2"
        class="mx-4"
        overlap
        offset-x="6"
        offset-y="15"
      >
        <v-btn
          dark
          icon
          small
        >
          <v-icon>
            mdi-bell
          </v-icon>
        </v-btn>
      </v-badge>

      <v-btn
        dark
        icon
        small
      >
        <v-icon>
          mdi-cogs
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        dark
        outlined
        height="30px"
      >
        <v-avatar
          size="20"
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
          color="grey darken-2"
          dark
        >
          <!-- background-color="primary" -->
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
          <!-- <v-tab to="/pastas">
            <v-icon left>
              mdi-folder
            </v-icon>
            Pastas
          </v-tab>
          <v-tab to="/etapas">
            <v-icon left>
              mdi-clock
            </v-icon>
            Etapas
          </v-tab> -->
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer
      app
      padless
      height="25px"
      color="primary"
    >
      <v-col
        class="text-center ma-0 pa-0 white--text"
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
    logo: require('../assets/logo_faina_t.png'),
    menuList: [
      {
        menu: 'Cadastros',
        itens: [
          {
            descricao: 'Pastas',
            path: '/pastas',
            icon: 'mdi-folder'
          },
          {
            descricao: 'Etapas',
            path: '/etapas',
            icon: 'mdi-clock'
          },
          {
            descricao: 'Tipos',
            path: '/tipos',
            icon: 'mdi-select'
          },
          {
            descricao: 'Projetos',
            path: '/projetos',
            icon: 'mdi-home'
          },
          {
            descricao: 'Classificacões',
            path: '/classificacoes',
            icon: 'mdi-bookmark-plus'
          },
          {
            descricao: 'Status',
            path: '/status',
            icon: 'mdi-pin'
          }
        ]
      }
    ]
  })
}
</script>
