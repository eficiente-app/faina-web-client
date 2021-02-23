<template>
  <v-container>
    <v-row
      class="mt-4"
      dense
    >
      <v-col cols="2">
        <v-card outlined>
          <v-list-item three-line>
            <v-icon
              class="pa-0 ma-0"
              color="error"
              size="100"
            >
              mdi-playlist-plus
            </v-icon>
            <v-list-item-content>
              <div class="text-right overline mb-2">
                Hoje
              </div>
              <v-list-item-title class="font-weight-bold red--text text-right headline mb-1">
                70
              </v-list-item-title>
              <v-list-item-subtitle class="text-right font-weight-bold">
                Tarefas Criadas Hoje.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="2">
        <v-card outlined>
          <v-list-item three-line>
            <v-icon
              size="100"
              color="secondary"
              class="pa-0 ma-0"
            >
              mdi-loading
            </v-icon>
            <v-list-item-content>
              <div class="text-right overline mb-2">
                Andamento
              </div>
              <v-list-item-title class="font-weight-bold secondary--text text-right headline mb-1">
                3
              </v-list-item-title>
              <v-list-item-subtitle class="text-right font-weight-bold">
                Tarefas Em Andamento.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="2">
        <v-card outlined>
          <v-list-item three-line>
            <v-icon
              class="pa-0 ma-0"
              color="success"
              size="100"
            >
              mdi-calendar-check-outline
            </v-icon>
            <v-list-item-content>
              <div class="text-right overline mb-2">
                Concluidas
              </div>
              <v-list-item-title class="font-weight-bold success--text text-right headline mb-1">
                1
              </v-list-item-title>
              <v-list-item-subtitle class="text-right font-weight-bold">
                Concluidos Hoje.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="2">
        <v-card outlined>
          <v-list-item three-line>
            <v-icon
              color="accent"
              class="pa-0 ma-0"
              size="100"
            >
              mdi-help
            </v-icon>
            <v-list-item-content>
              <div class="text-right overline mb-2">
                Não Classificada
              </div>
              <v-list-item-title class="font-weight-bold text-right headline mb-1">
                1
              </v-list-item-title>
              <v-list-item-subtitle class="text-right font-weight-bold">
                Sem Classificação.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="2">
        <v-card outlined>
          <v-list-item three-line>
            <v-icon
              class="pa-0 ma-0"
              color="warning"
              size="100"
            >
              mdi-timer-off
            </v-icon>
            <v-list-item-content>
              <div class="text-right overline mb-2">
                Atraso
              </div>
              <v-list-item-title class="font-weight-bold warning--text text-right headline mb-1">
                1
              </v-list-item-title>
              <v-list-item-subtitle class="text-right font-weight-bold">
                Tarefas Com Atraso.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card outlined>
          <v-list-item three-line>
            <v-icon
              class="pa-0 ma-0"
              color="accent"
              size="100"
            >
              mdi-pause
            </v-icon>
            <v-list-item-content>
              <div class="text-right overline mb-2">
                Aguardando
              </div>
              <v-list-item-title class="font-weight-bold text-right headline mb-1">
                1
              </v-list-item-title>
              <v-list-item-subtitle class="text-right font-weight-bold">
                Tarefas Em Aguardo.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row dense class="mt-4">
      <v-col cols="4">
        <v-card
          class="mr-2"
          outlined
        >
          <v-card-title>
            Hoje - 20/11/2020
          </v-card-title>
          <v-card-text>
            <pie-chart :data="pieChart" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card
          outlined
          class="ml-2"
        >
          <v-card-title>
            Monitoramento Dos Últimos 30 Dias
          </v-card-title>
          <v-card-text>
            <line-chart
              :data="chart"
              :legend="true"
              decimal=","
              xtitle="Situações"
              ytitle="Quantidade"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="7">
        <v-card
          class="mr-2 mt-4"
          outlined
        >
          <v-card-title>
            Equipe
          </v-card-title>
          <v-card-text class="pa-0 ma-0">
            <v-data-table
              :headers="colunasUsuarios"
              :items="usuarios"
              class="elevation-0"
              flat
              height="390"
              item-key="name"
            >
              <template v-slot:item.foto="{ item }">
                <v-avatar color="red" class="ma-1">
                  <span class="white--text title">
                    {{ item.foto || 'CJ' }}
                  </span>
                </v-avatar>
              </template>
              <template v-slot:item.progresso="{ item }">
                <v-progress-linear
                  v-model="item.progresso"
                  height="25"
                >
                  <strong>
                    {{ item.progresso }}%
                  </strong>
                </v-progress-linear>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="5">
        <v-card
          class="ml-2 mt-4"
          outlined
        >
          <v-card-title>
            Projetos
          </v-card-title>
          <v-card-text class="pa-0 ma-0">
            <v-data-table
              :headers="colunaProjeto"
              :items="projetos"
              :search="search"
              class="elevation-0"
              flat
              height="340"
              item-key="name"
            >
              <template v-slot:top>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  class="px-4"
                  hide-details
                  label="Search"
                  single-line
                />
              </template>
              <template v-slot:item.progresso="{ item }">
                <v-progress-linear
                  v-model="item.progresso"
                  height="25"
                >
                  <strong>
                    {{ item.progresso }}%
                  </strong>
                </v-progress-linear>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'DashboardPage',

  data: () => ({
    search: null,
    pieChart: [
      ['Andamento', 30],
      ['Atraso', 3],
      ['Concluidas', 10],
      ['Aguardando', 15],
      ['Não Classificado', 23],
      ['Abertas', 2]
    ],
    chart: [
      {
        name: 'Andamento',
        data: {
          '01/11/2020': 14,
          '05/11/2020': 15,
          '10/11/2020': 33,
          '15/11/2020': 25,
          '20/11/2020': 19,
          '25/11/2020': 18,
          '30/11/2020': 23
        }
      },
      {
        name: 'Atraso',
        data: {
          '01/11/2020': 1,
          '05/11/2020': 0,
          '10/11/2020': 0,
          '15/11/2020': 0,
          '20/11/2020': 3,
          '25/11/2020': 0,
          '30/11/2020': 2
        }
      },
      {
        name: 'Concluidas',
        data: {
          '01/11/2020': 18,
          '05/11/2020': 20,
          '10/11/2020': 10,
          '15/11/2020': 3,
          '20/11/2020': 8,
          '25/11/2020': 30,
          '30/11/2020': 2
        }
      },
      {
        name: 'Não Classificada',
        data: {
          '01/11/2020': 10,
          '05/11/2020': 5,
          '10/11/2020': 1,
          '15/11/2020': 2,
          '20/11/2020': 5,
          '25/11/2020': 3,
          '30/11/2020': 4
        }
      },
      {
        name: 'Aguardando',
        data: {
          '01/11/2020': 1,
          '05/11/2020': 2,
          '10/11/2020': 2,
          '15/11/2020': 0,
          '20/11/2020': 3,
          '25/11/2020': 4,
          '30/11/2020': 8
        }
      }
    ],
    min: '1000',
    max: '5000',
    colunasUsuarios: [
      {
        align: 'start',
        text: 'Nome',
        sortable: false,
        value: 'nome',
        width: 200
      },
      {
        align: 'start',
        text: 'Foto',
        sortable: false,
        value: 'foto',
        width: 100
      },
      {
        align: 'center',
        text: 'Projetos Andamento',
        sortable: false,
        value: 'qtdProjetos',
        width: 70
      },
      {
        align: 'center',
        text: 'Tarefas',
        sortable: false,
        value: 'tarefasRealizadas',
        width: 70
      },
      {
        align: 'start',
        text: 'Data Inicio',
        sortable: false,
        value: 'dataInicio',
        width: 100
      },
      {
        align: 'start',
        text: 'Data Fim',
        sortable: false,
        value: 'dataFim',
        width: 100
      },
      {
        align: 'start',
        text: 'Progresso',
        sortable: false,
        value: 'progresso'
      }
    ],
    usuarios: [
      {
        id: 1,
        nome: 'Eder Ferraz Caciano',
        foto: '',
        qtdProjetos: '2',
        tarefasRealizadas: 57,
        dataInicio: '01/05/2020',
        dataFim: '01/12/2020',
        progresso: '5'
      },
      {
        id: 2,
        nome: 'Daniel Araujo',
        foto: '',
        qtdProjetos: '2',
        tarefasRealizadas: 57,
        dataInicio: '01/05/2020',
        dataFim: '01/12/2020',
        progresso: '25'
      },
      {
        id: 3,
        nome: 'Ícaro Pereira',
        foto: '',
        qtdProjetos: '2',
        tarefasRealizadas: 57,
        dataInicio: '01/05/2020',
        dataFim: '01/12/2020',
        progresso: '8'
      },
      {
        id: 4,
        nome: 'Rafael Machado',
        foto: '',
        qtdProjetos: '2',
        tarefasRealizadas: 57,
        dataInicio: '01/05/2020',
        dataFim: '01/12/2020',
        progresso: '15'
      },
      {
        id: 5,
        nome: 'Eduardo Rodrigues',
        foto: '',
        qtdProjetos: '2',
        tarefasRealizadas: 57,
        dataInicio: '01/05/2020',
        dataFim: '01/12/2020',
        progresso: '90'
      }
    ],
    colunaProjeto: [
      {
        align: 'start',
        text: 'Projeto',
        sortable: false,
        value: 'projeto',
        width: 150
      },
      {
        align: 'start',
        text: 'Status',
        sortable: false,
        value: 'status',
        width: 100
      },
      {
        align: 'start',
        text: 'Data Inicial',
        sortable: false,
        value: 'dataInicial',
        width: 100
      },
      {
        align: 'start',
        text: 'Data Final',
        sortable: false,
        value: 'dataFinal',
        width: 100
      },
      {
        align: 'end',
        text: 'Quantidade Tarefas',
        sortable: false,
        value: 'qtdTarefas',
        width: 70
      },
      {
        align: 'start',
        text: 'Progresso',
        sortable: false,
        value: 'progresso'
      }
    ],
    projetos: [
      {
        projeto: 'Faina',
        status: 'Andamento',
        dataInicial: '01/11/2020',
        dataFinal: '10/11/2020',
        qtdTarefas: '25',
        progresso: '10'
      },
      {
        projeto: 'PP',
        status: 'Aguardando',
        dataInicial: '01/11/2020',
        dataFinal: '10/11/2020',
        qtdTarefas: '25',
        progresso: '5'
      },
      {
        projeto: 'PP',
        status: 'Aguardando',
        dataInicial: '01/11/2020',
        dataFinal: '10/11/2020',
        qtdTarefas: '25',
        progresso: '5'
      },
      {
        projeto: 'PP',
        status: 'Aguardando',
        dataInicial: '01/11/2020',
        dataFinal: '10/11/2020',
        qtdTarefas: '25',
        progresso: '5'
      },
      {
        projeto: 'PP',
        status: 'Aguardando',
        dataInicial: '01/11/2020',
        dataFinal: '10/11/2020',
        qtdTarefas: '25',
        progresso: '5'
      }
    ]
  }),

  computed: {
    ...mapState('dashboard', [
      'registros'
    ])
  },

  created () {
    this.login()
  },

  methods: {
    ...mapActions('dashboard', [
      'listarTicks'
    ])
  }
}
</script>
