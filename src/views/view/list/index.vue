<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="registros"
      :search="search"
      :loading="loading"
      class="elevation-0"
      disable-pagination
      hide-default-footer
      height="100%"
      sort-by="due_date"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            Lista
          </v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-spacer />
          <v-btn
            icon
            class="mt-3"
            title="Refresh"
            @click="listarRegistros()"
          >
            <v-icon>
              mdi-refresh
            </v-icon>
          </v-btn>
        </v-toolbar>
        <v-row dense>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            hide-details
            label="Filtro"
            single-line
          />
        </v-row>
      </template>
      <template v-slot:no-data>
        <v-row class="text-center justify-center">
          <span>Nenhum Registro</span>
        </v-row>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ListPage',

  data: () => ({
    headers: [
      {
        text: 'Nome',
        align: 'start',
        value: 'name',
        sortable: true,
        width: 200
      },
      {
        text: 'Descrição',
        align: 'start',
        value: 'description',
        sortable: true
      },
      {
        text: 'Data de Vencimento',
        align: 'start',
        value: 'due_date',
        sortable: true,
        width: 200
      },
      {
        text: 'Status',
        align: 'start',
        value: 'status_name',
        sortable: true,
        width: 100
      }
    ],
    search: null,
    loading: false
  }),

  created () {
    this.listarRegistros()
  },

  computed: {
    ...mapState('viewList', [
      'registros'
    ])
  },

  methods: {
    ...mapActions('viewList', [
      'listar'
    ]),
    async listarRegistros () {
      this.loading = true
      await this.listar()
      this.loading = false
    }
  }
}
</script>
