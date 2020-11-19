<template>
  <v-container>
    <v-row dense class="mt-4">
      <v-col cols="4">
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :expanded.sync="expanded"
          item-key="id"
          single-expand
          show-expand
          class="elevation-0 mx-4"
          sort-by="dataFim"
        >
          <template v-slot:top>
            <v-toolbar
              flat
            >
              <v-toolbar-title>
                Lista de Projetos
              </v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              />
              <v-spacer />
            </v-toolbar>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              hide-details
              label="Filtro"
              single-line
            />
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              class="mr-2"
              small
              @click="''"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn
              color="primary"
              @click="initialize"
            >
              Reset
            </v-btn>
          </template>
          <template v-slot:item.progresso="{ item }">
            <v-progress-linear
              v-model="item.progresso"
              :color="getColorProgresso(item.progresso)"
              height="25"
            >
              <strong>
                {{ item.progresso }}%
              </strong>
            </v-progress-linear>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip
              :color="getColorsStatus(item.status)"
              dark
            >
              {{ item.status }}
            </v-chip>
          </template>
          <template v-slot:item.classificacao="{ item }">
            <v-chip
              :color="getColorsClassificacao(item.classificacao)"
              dark
              label
              outlined
            >
              {{ item.classificacao }}
            </v-chip>
          </template>
          <template v-slot:expanded-item="{ item }">
          <v-row dense>
            <td colspan="10" class="pa-0 ma-0">
              {{ item }} // Será implementado os Níveis de expand
              // Projetos
              // Pastas
              // Tarefas
            </td>
            <!-- <v-col>
            </v-col> -->
          </v-row>
        </template>
        </v-data-table>
      </v-col>
      <v-col cols="4">
        <v-card outlined>
          <v-card-title>Tree View</v-card-title>
          <v-card-text>
            <v-treeview
              :items="itemsTree"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :expanded.sync="expanded"
          item-key="id"
          single-expand
          show-expand
          class="elevation-0 mx-4"
          sort-by="dataFim"
        >
          <template v-slot:top>
            <v-toolbar
              flat
            >
              <v-toolbar-title>
                Tarefas da Pasta
              </v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              />
              <v-spacer />
            </v-toolbar>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              hide-details
              label="Filtro"
              single-line
            />
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              class="mr-2"
              small
              @click="''"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn
              color="primary"
              @click="initialize"
            >
              Reset
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProjetosPage',

  data: () => ({
    expanded: [],
    search: null,
    items: [
      { id: 1, status: 'Aberto', nome: 'Faina', descricao: 'Projeto de desenvol.....', tipo: 'Projeto', qtdTarefa: 58 }
    ],
    headers: [
      {
        text: 'Actions',
        align: 'center',
        sortable: false,
        value: 'actions',
        width: 61
      },
      {
        text: 'Status',
        align: 'start',
        sortable: false,
        value: 'status',
        width: 100
      },
      {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'nome',
        width: 150
      },
      {
        text: 'Descrição',
        align: 'start',
        sortable: false,
        value: 'descricao',
        width: 350
      },
      {
        text: 'Tipo',
        align: 'start',
        sortable: false,
        value: 'tipo',
        width: 150
      },
      {
        text: 'Quantidade Tarefa',
        align: 'start',
        sortable: false,
        value: 'qtdTarefa',
        width: 150
      },
      {}
    ],
    itemsTree: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  }),

  methods: {
    getColorsStatus (status) {
      if (status === 'Aberto') return 'info'
      else if (status === 'Atendimento') return 'success'
      else if (status === 'Concluido') return 'accent'
      else if (status === 'Aguardando Informações') return 'secondary'
    },
    getColorsClassificacao (status) {
      if (status === 'Alto') return 'error'
      else if (status === 'Baixo') return 'info'
      else if (status === 'Médio') return 'warning'
    },
    getColorProgresso (progresso) {
      if (progresso <= '10') return 'accent'
      else if (progresso > '10' && progresso <= '30') return 'info'
      else if (progresso > '30' && progresso <= '50') return 'success'
      else if (progresso > '50') return 'secondary'
    }
  }
}
</script>
