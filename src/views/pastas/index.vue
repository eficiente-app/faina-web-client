<template>
  <v-container>
    <modal
      v-model="modal"
      :options="modalOptions"
      @salvar="salvarRegistro()"
      @input="reset()"
    >
      <v-form>
        <validation-observer
          ref="observer"
        >
          <v-container
            fluid
            grid-list-xs
          >
            <v-row dense>
              <v-col
                cols="6"
                lg="1"
                md="3"
                xs="6"
              >
                <!-- rules="required" -->
                <validation-provider
                  v-slot="{ errors }"
                  name="id"
                  vid="id"
                >
                  <v-text-field
                    v-model="form.id"
                    :disabled="true"
                    :error-messages="errors"
                    :hide-details="!errors.length"
                    class="required"
                    label="id"
                    dense
                    outlined
                    @keydown.enter="salvarRegistro()"
                  />
                </validation-provider>
              </v-col>
              <v-col
                cols="6"
                lg="1"
                md="3"
                xs="6"
              >
                <validation-provider
                  v-slot="{ errors }"
                  name="Tipo"
                  rules="required"
                  vid="tipo_id"
                >
                  <v-text-field
                    v-model="form.tipo_id"
                    :error-messages="errors"
                    :hide-details="!errors.length"
                    class="required"
                    label="Tipo"
                    dense
                    outlined
                    @keydown.enter="salvarRegistro()"
                  />
                </validation-provider>
              </v-col>
              <v-col
                cols="6"
                lg="1"
                md="3"
                xs="6"
              >
                <validation-provider
                  v-slot="{ errors }"
                  name="Projeto"
                  rules="required"
                  vid="projeto_id"
                >
                  <v-text-field
                    v-model="form.projeto_id"
                    :error-messages="errors"
                    :hide-details="!errors.length"
                    class="required"
                    label="Projeto"
                    dense
                    outlined
                    @keydown.enter="salvarRegistro()"
                  />
                </validation-provider>
              </v-col>
              <v-col
                cols="10"
                lg="4"
                md="5"
                xs="10"
              >
                <validation-provider
                  v-slot="{ errors }"
                  name="Nome"
                  rules="required"
                  vid="nome"
                >
                  <v-text-field
                    v-model="form.nome"
                    :error-messages="errors"
                    :hide-details="!errors.length"
                    class="required"
                    label="Nome"
                    dense
                    outlined
                    @keydown.enter="salvarRegistro()"
                  />
                </validation-provider>
              </v-col>
              <v-col
                cols="12"
                lg="5"
                md="6"
                xs="12"
              >
                <validation-provider
                  v-slot="{ errors }"
                  name="Descricao"
                  rules="required"
                  vid="descricao"
                >
                  <v-text-field
                    v-model="form.descricao"
                    :error-messages="errors"
                    :hide-details="!errors.length"
                    class="required"
                    label="Descrição"
                    dense
                    outlined
                    @keydown.enter="salvarRegistro()"
                  />
                </validation-provider>
              </v-col>
            </v-row>
          </v-container>
        </validation-observer>
      </v-form>
    </modal>

    <v-data-table
      :headers="headers"
      :items="pastas"
      :search="search"
      :loading="loading"
      class="elevation-0"
      sort-by="dataFim"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>
            Lista de Pastas
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
            @click="exibirRegistro()"
          >
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-toolbar>
        <v-row
          class="justify-left"
        >
          <v-col
            cols="12"
          >
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              hide-details
              label="Filtro"
              single-line
            />
          </v-col>
        </v-row>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          class="mr-2"
          small
          @click="exibirRegistro(item.id)"
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
      <template v-slot:item.status="{ item }">
        <v-chip
          :color="getColorsStatus(item.Status)"
          dark
        >
          {{ item.status }}
        </v-chip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'PastasPage',

  data: () => ({
    form: {
      id: null,
      tipo_id: null,
      projeto_id: null,
      nome: null,
      descricao: null,
      origem_incluido_id: null,
      origem_alterado_id: null,
      origem_excluido_id: null,
      incluido_id: null,
      incluido_em: null,
      alterado_id: null,
      alterado_em: null,
      excluido_id: null,
      excluido_em: null
    },
    modal: false,
    modalOptions: {
      title: 'Adicionar Pasta',
      width: '1200'
    },
    controle: {
      visualizar: false
    },
    search: null,
    headers: [
      {
        text: 'Actions',
        align: 'center',
        sortable: false,
        value: 'actions',
        width: 61
      },
      {
        text: 'ID',
        align: 'start',
        sortable: false,
        value: 'id',
        width: 100
      },
      {
        text: 'Tipo',
        align: 'start',
        sortable: false,
        value: 'tipo_id',
        width: 150
      },
      {
        text: 'Projeto',
        align: 'start',
        sortable: false,
        value: 'projeto_id',
        width: 150
      },
      {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'nome',
        width: 200
      },
      {
        text: 'Descrição',
        align: 'start',
        sortable: false,
        value: 'descricao',
        width: 100
      }
    ],
    loading: false,
    dialog: false,
    registroId: null
  }),

  computed: {
    ...mapState('pastas', [
      'pastas'
    ])
  },

  created () {
    this.listarRegistros()
  },

  methods: {
    ...mapActions('pastas', [
      'listar',
      'exibir',
      'inserir',
      'editar',
      'deletar'
    ]),
    async listarRegistros () {
      this.loading = true

      await this.listar()

      this.loading = false
    },
    async salvarRegistro () {
      if (await this.$refs.observer.validate()) {
        const formulario = {
          id: this.form.id || undefined,
          tipo_id: this.form.tipo_id || undefined,
          projeto_id: this.form.projeto_id || undefined,
          nome: this.form.nome || undefined,
          descricao: this.form.descricao || undefined,
          incluido_id: this.form.incluido_id || undefined,
          incluido_em: this.form.incluido_em || undefined,
          alterado_id: '1',
          alterado_em: '2021-01-07 00:00:00',
          excluido_id: this.form.excluido_id || undefined,
          excluido_em: this.form.excluido_em || undefined
        }

        let resposta
        if (formulario.id) {
          resposta = await this.editar(formulario)
        } else {
          resposta = await this.inserir(formulario)
        }
        console.log(resposta)
        if (resposta && !resposta.erro) {
          this.modal = false
          this.reset()
          this.listarRegistros()
        }
      }
    },
    async exibirRegistro (id) {
      if (id) {
        const res = await this.exibir(id)
        if (res && !res.erro) {
          this.form = res
        }
      }
      this.modal = true
    },
    async deletarRegistro () {
      const res = await this.deletar(this.registroId)
      console.log(res)
      if (res && !res.erro) {
        this.reset()
        this.listarRegistros()
        this.registroId = null
      }
    },
    async limpar () {
      this.form = {
        id: null,
        tipo_id: null,
        projeto_id: null,
        nome: null,
        descricao: null,
        origem_incluido_id: null,
        origem_alterado_id: null,
        origem_excluido_id: null,
        incluido_id: null,
        incluido_em: null,
        alterado_id: null,
        alterado_em: null,
        excluido_id: null,
        excluido_em: null
      }
    },
    reset () {
      this.limpar()
    },

    getColorsStatus (status) {
      if (status === 'Aberto') return 'info'
      else if (status === 'Atendimento') return 'success'
      else if (status === 'Concluido') return 'accent'
      else if (status === 'Aguardando Informações') return 'secondary'
    }
  }
}
</script>
