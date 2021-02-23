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
                <!-- 1-Campos do Cadastro -->
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
              <v-col
                cols="6"
                lg="1"
                md="3"
                xs="6"
              >
                <validation-provider
                  v-slot="{ errors }"
                  name="Ativo"
                  rules="required"
                  vid="ativo"
                >
                  <v-text-field
                    v-model="form.ativo"
                    :error-messages="errors"
                    :hide-details="!errors.length"
                    class="required"
                    label="Ativo"
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

    <fnatable
      :options="loadTableOptions()"
      @new="exibirRegistro()"
      @edit="exibirRegistro"
      @salvar="salvarRegistro()"
      @input="reset()"
    />
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  // 3-Nome
  name: 'EtapasPage',

  data: () => ({
    form: {
      id: null,
      nome: null,
      descricao: null,
      ativo: null,
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
      title: 'Adicionar Etapa',
      width: '1200'
    },
    tableOptions: {
      headers: null,
      items: null,
      search: null,
      loading: null,
      sort: null,
      title: 'Lista de Etapas'
    },
    controle: {
      visualizar: false
    },
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
        width: 150
      },
      {
        text: 'Ativo',
        align: 'start',
        sortable: false,
        value: 'ativo',
        width: 200
      }
    ],
    loading: false,
    registroId: null
  }),

  computed: {
    ...mapState('etapas', [
      'etapas'
    ])
  },

  created () {
    this.listarRegistros()
  },

  methods: {
    ...mapActions('etapas', [
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
          nome: this.form.nome || undefined,
          descricao: this.form.descricao || undefined,
          ativo: this.form.ativo || undefined,
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
        nome: null,
        descricao: null,
        ativo: null,
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
    loadTableOptions () {
      this.tableOptions.headers = this.headers
      this.tableOptions.items = this.etapas
      this.tableOptions.loading = this.loading
      return this.tableOptions
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
