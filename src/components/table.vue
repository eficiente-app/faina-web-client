<template>
  <v-data-table
    :headers="headers"
    :items="options.items"
    :search="options.search"
    :loading="options.loading"
    :sort-by="options.sort"
    :page.sync="page"
    :items-per-page="itemsPerPage"
    class="elevation-0"
    hide-default-footer
    @page-count="pageCount = $event"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>
          {{ options.title }}
        </v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        />
        <v-spacer />
        <v-btn
          color="secondary"
          fab
          dark
          small
          title="Adicionar Registro"
          @click="$emit('new')"
        >
          <v-icon>
          mdi-plus
          </v-icon>
        </v-btn>
      </v-toolbar>
      <v-row>
        <v-col
          cols="6"
        >
          <v-text-field
            v-model="options.search"
            append-icon="mdi-magnify"
            hide-details
            label="Filtro"
            single-line
          />
        </v-col>
        <v-spacer />
        <v-col
          cols="2"
          align-self="end"
        >
          <v-row
            justify="end"
          >
            <v-btn
              icon
              small
              class="ma-0"
              @click="page = 1"
            >
              <v-icon>
                mdi-page-first
              </v-icon>
            </v-btn>
            <v-btn
              icon
              small
              class="ma-0"
              @click="page = page > 1 ? page - 1 : 1"
            >
              <v-icon>
              mdi-chevron-left
              </v-icon>
            </v-btn>
            {{ page }}
            <v-btn
              icon
              small
              class="ma-0"
              @click="page = page < pageCount ? page + 1 : pageCount"
            >
              <v-icon>
              mdi-chevron-right
              </v-icon>
            </v-btn>
            <v-btn
              small
              icon
              class="ma-0"
              @click="page = pageCount"
            >
              <v-icon>
                mdi-page-last
              </v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-divider
          class="mt-8 mb-2 ml-2"
          inset
          vertical
        />
        <v-col
          cols="1"
          align-self="end"
        >
          <v-icon
            @click="config = true; loadPreferences()"
          >
            mdi-cogs
          </v-icon>

          <!-- Data Table Preferences -->
          <v-dialog
            v-model="config"
            persistent
            max-width="360"
            class="elevation-1"
          >
            <v-card>
              <v-card-title class="headline">
                <div
                  class="subtitle-1"
                >
                  Preferências
                </div>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col
                    cols="6"
                  >
                    <div
                      class="subtitle-2"
                    >
                      Tamanho da Tabela
                    </div>
                    <v-radio-group
                      v-model="rowsPerPage"
                      mandatory
                    >
                      <v-radio
                        v-for="n in 4"
                        :key="n"
                        :label="`${n*10} Linhas`"
                        :value="n*10"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col
                    cols="6"
                  >
                    <div
                      class="subtitle-2"
                    >
                      Colunas Visíveis
                    </div>
                    <v-switch
                      v-model="editPreferences"
                      v-for="n in options.headers"
                      :key="n.text"
                      :label="n.text"
                      :value="n"
                      hide-details
                    />
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="green darken-1"
                  text
                  @click="config = false"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  @click="itemsPerPage = rowsPerPage; config = false; setPreferences()"
                >
                  Confirmar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </template>

    <!-- Data Table Actions -->
    <template v-slot:item.actions="{ item }">
      <v-icon
        class="mr-2"
        small
        @click="$emit('edit', item.id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="dialog = true, registroId = item.id"
      >
        mdi-delete
      </v-icon>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
        class="elevation-1"
      >
        <v-card>
          <v-card-title class="headline">
            Atenção
          </v-card-title>
          <v-card-text>
            <spam v-html="'Deseja deletar este <b>registro?</b>'" />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false, deletarRegistro()"
            >
              Aceitar
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>

    <!-- Data Table Status -->
    <template v-slot:item.status="{ item }">
      <v-chip
        :color="getColorsStatus(item.Status)"
        dark
      >
        {{ item.status }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'TableComponent',

  data: () => ({
    /**
     * @author Rafael Machado
     * @summary optionsDefault
     * @description Objeto padrão para carregamento do componente Tabela. Cada opção pode
     * ser passado de forma dinamica dentro da prop options.
     * Os valores aceitos na prop options são os mesmos da variavel optionsDefault.
     * Caso seja passado valor em options será renderizado, caso não o valor padrão será carregado.
     */
    optionsDefalt: {
      headers: [],
      items: [],
      search: null,
      loading: false,
      sort: null,
      title: 'Form Title'
    },
    config: false,
    dialog: false,
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    rowsPerPage: 10,
    headers: [],
    editPreferences: []
  }),

  props: {
    options: {
      default: () => {}
    }
  },

  async created () {
    this.headers = this.options.headers
  },

  methods: {
    loadPreferences () {
      this.editPreferences = this.headers
    },

    setPreferences () {
      this.headers = this.options.headers.filter(s => this.editPreferences.includes(s))
    }
  }
}
</script>
