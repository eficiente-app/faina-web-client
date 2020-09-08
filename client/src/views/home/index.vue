<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawerLeft"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              @click="abrirTarefa()"
            >
              Nova Tarefa
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawerRight"
      app
      clipped
      expand-on-hover
      mini-variant
      right
      absolute
      dark
    >
      <v-list dense>
        <v-list-item two-line class="ma-2 px-0">
          <v-list-item-avatar>
            <v-img src="http://igerp.com.br/imgs/logo.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">Rafael Machado</v-list-item-title>
            <v-list-item-subtitle>rafmco@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>My Files</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

      <!-- shrink-on-scroll -->
    <v-app-bar
      app
      clipped-left
      clipped-right
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click.stop="drawerLeft = !drawerLeft"></v-app-bar-nav-icon>
      <v-toolbar-title>Tarefas</v-toolbar-title>
    </v-app-bar>

    <v-main>
        <!-- class="fill-height" -->
      <v-container
        fluid
      >
        <v-row>
          <v-card
            class="d-flex justify-center"
            width="100%"
            height="50px"
          >
            <v-card-title
              class="align center"
            >
              Lista de Tarefas
            </v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-card
            class="overflow-auto"
            width="100%"
            ref="scroll"
            height="100%"
            flat
            dense
          >
              <!-- background-color="deep-purple accent-4" -->
            <v-tabs
              grow
              centered
              icons-and-text
            >
              <v-tab
                class="mt-1 elevation-1"
                id="Home"
              >
                Tarefas
                <v-icon>mdi-home</v-icon>
              </v-tab>
              <v-tab
                class="mt-1 elevation-1"
                id="List"
              >
                Projetos
                <v-icon>mdi-view-list</v-icon>
              </v-tab>
              <v-tab
                class="mt-1 elevation-1"
                id="Calendar"
              >
                Calendário
                <v-icon>mdi-calendar</v-icon>
              </v-tab>
              <v-tab
                class="mt-1 elevation-1"
                id="Gantt"
              >
                Gantt
                <v-icon>mdi-chart-gantt</v-icon>
              </v-tab>

              <v-tab-item>
                Hoje, {{ new Date().toJSON().slice(0, 10).replace(/-/g,'/') }}
                <v-card
                  v-for="tarefa in tarefas"
                  :key="tarefa.id"
                  tile
                  raised
                  outlined
                >
                  <v-card-text>
                    <v-list-item two-line class="pa-0 ma-0 pl-2 align-start">
                      <v-list-item-content class="pt-0">
                        <v-list-item-title class="font-weight-bold headline text-start d-inline-flex">
                          <v-icon
                            color='error'
                            class="px-1 ma-0"
                            left
                            size="20"
                          >
                            mdi-radiobox-blank
                          </v-icon>
                          <!-- <span><h6>Realizar Tarefa 1</h6></span> -->
                          <span><h6>{{ tarefa.titulo }}</h6></span>
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-start ma-0 pa-0">
                          {{ tarefa.inicio }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-text>
                </v-card>

                <!-- <v-card
                  tile
                  raised
                  outlined
                >
                  <v-card-text>
                    <v-list-item two-line class="pa-0 ma-0 pl-2 align-start">
                      <v-list-item-content class="pt-0">
                        <v-list-item-title class="font-weight-bold headline text-start d-inline-flex">
                          <v-icon
                            color='success'
                            class="px-1 ma-0"
                            left
                            size="20"
                          >
                            mdi-check-circle-outline
                          </v-icon>
                          <span><h6>Realizar Tarefa 2</h6></span>
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-start ma-0 pa-0">
                          7:00 a.m.
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-text>
                </v-card>

                2020/07/14
                <v-card
                  tile
                  raised
                  outlined
                >
                  <v-card-text>
                    <v-list-item two-line class="pa-0 ma-0 pl-2 align-start">
                      <v-list-item-content class="pt-0">
                        <v-list-item-title class="font-weight-bold headline text-start d-inline-flex">
                          <v-icon
                            color='error'
                            class="px-1 ma-0"
                            left
                            size="20"
                          >
                            mdi-radiobox-blank
                          </v-icon>
                          <span><h6>Realizar Tarefa 3</h6></span>
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-start ma-0 pa-0">
                          02:00 p.m.
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-text>
                </v-card> -->

                <!-- <div id="app">
                  <quill-editor
                    class="editor"
                    ref="myTextEditor"
                    :value="content"
                    :options="editorOption"
                    @change="onEditorChange"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)"
                  />
                </div> -->

              </v-tab-item>

              <v-tab-item>
                <v-card
                  class="d-inline-flex"
                >
                  <v-col>
                    <v-card
                      tile
                      raised
                      outlined
                      max-width="200"
                      min-width="200"
                      max-height="100"
                      min-height="100"
                    >
                      <v-list-item three-line class="pa-0 ma-0 pl-2 align-start">
                        <v-list-item-content class="pt-0">
                          <v-list-item-title class="font-weight-bold headline text-start">
                            <v-icon
                              color='blue'
                              class="px-1 ma-0"
                              left
                              size="20"
                            >
                              mdi-radiobox-marked
                            </v-icon>
                          </v-list-item-title>
                          <v-list-item-subtitle class="text-start ma-0 pa-0">
                            Frigon
                          </v-list-item-subtitle>
                          <v-card-text class="text-start ma-0 pa-0">
                            10 Tarefas
                          </v-card-text>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card
                      tile
                      raised
                      outlined
                      max-width="200"
                      min-width="200"
                      max-height="100"
                      min-height="100"
                    >
                      <v-list-item two-line class="pa-0 ma-0 pl-2 align-start">
                        <v-list-item-content class="pt-0">
                          <v-list-item-title class="font-weight-bold headline text-start">
                            <v-icon
                              color='success'
                              class="px-1 ma-0"
                              left
                              size="20"
                            >
                              mdi-radiobox-marked
                            </v-icon>
                          </v-list-item-title>
                          <v-list-item-subtitle class="text-start ma-0 pa-0">
                            IGWMS
                          </v-list-item-subtitle>
                          <v-card-text class="text-start ma-0 pa-0">
                            5 Tarefas
                          </v-card-text>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-col>
                </v-card>
              </v-tab-item>

              <v-tab-item>
                <v-card
                  flat
                  tile
                >
                  <v-card-text>
                    <v-calendar
                      ref="calendar"
                      v-model="value"
                      :weekdays="weekday"
                      :type="type"
                      :events="events"
                      :event-overlap-mode="mode"
                      :event-overlap-threshold="30"
                      :event-color="getEventColor"
                      @change="getEvents"
                    ></v-calendar>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab-item>
                <gantt
                  :options="options"
                  :tasks="tasks"
                  @tasks-changed="tasksUpdate"
                  @options-changed="optionsUpdate"
                  @dynamic-style-changed="styleUpdate"
                >
                </gantt>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app>
      <span>Tarefas</span>
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    <modal
      :modal="modalTarefa"
      :maisOpcoes="false"

      @cancelar="resetInfo()"
      @fechar="resetInfo()"

      acaoForm
      cancelar
      titulo="Nova Tarefa"
      largura="1200"
      ref="modalTarefa"
    >
      <v-card>
        <v-card-text style="height: 600px;">
          Título...
          Projeto...
          Tags...
          <div id="app">
            <quill-editor
              class="editor"
              ref="myTextEditor"
              :value="content"
              :options="editorOption"
              @change="onEditorChange"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)"
            />
          </div>
        </v-card-text>
      </v-card>

    </modal>
  </v-app>
</template>

<script>

import dedent from 'dedent'
import hljs from 'highlight.js'
import debounce from 'lodash/debounce'
import { quillEditor } from 'vue-quill-editor'
import 'highlight.js/styles/tomorrow.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import dayjs from 'dayjs'
import TarefaDataService from '../../services/TarefaDataService'

// just helper to get current dates
function getDate (hours) {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()
  const timeStamp = new Date(
    currentYear,
    currentMonth,
    currentDay,
    0,
    0,
    0
  ).getTime()
  return new Date(timeStamp + hours * 60 * 60 * 1000).getTime()
}

const tasks = [
  {
    id: 1,
    label: 'Make some noise',
    user:
      '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
    start: getDate(-24 * 5),
    end: getDate(24 * 8),
    duration: 15 * 24 * 60 * 60 * 1000,
    percent: 85,
    type: 'project'
    // collapsed: true,
  },
  {
    id: 2,
    label: 'With great power comes great responsibility',
    user:
      '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
    parentId: 1,
    start: getDate(-24 * 4),
    duration: 4 * 24 * 60 * 60 * 1000,
    percent: 50,
    type: 'milestone',
    collapsed: true,
    style: {
      base: {
        fill: '#1EBC61',
        stroke: '#0EAC51'
      }
    }
  },
  {
    id: 3,
    label: 'Courage is being scared to death, but saddling up anyway.',
    user:
      '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
    parentId: 2,
    start: getDate(-24 * 3),
    duration: 2 * 24 * 60 * 60 * 1000,
    percent: 100,
    type: 'task'
  },
  {
    id: 4,
    label: 'Put that toy AWAY!',
    user:
      '<a href="https://www.google.com/search?q=Clark+Kent" target="_blank" style="color:#0077c0;">Clark Kent</a>',
    start: getDate(-24 * 2),
    duration: 2 * 24 * 60 * 60 * 1000,
    percent: 50,
    type: 'task',
    dependentOn: [3]
  },
  {
    id: 5,
    label:
      'One billion, gajillion, fafillion... shabadylu...mil...shabady......uh, Yen.',
    user:
      '<a href="https://www.google.com/search?q=Austin+Powers" target="_blank" style="color:#0077c0;">Austin Powers</a>',
    parentId: 4,
    start: getDate(0),
    duration: 2 * 24 * 60 * 60 * 1000,
    percent: 10,
    type: 'milestone',
    style: {
      base: {
        fill: '#0287D0',
        stroke: '#0077C0'
      }
    }
  },
  {
    id: 6,
    label: 'Butch Mario and the Luigi Kid',
    user:
      '<a href="https://www.google.com/search?q=Mario+Bros" target="_blank" style="color:#0077c0;">Mario Bros</a>',
    parentId: 5,
    start: getDate(24),
    duration: 1 * 24 * 60 * 60 * 1000,
    percent: 50,
    type: 'task',
    collapsed: true,
    style: {
      base: {
        fill: '#8E44AD',
        stroke: '#7E349D'
      }
    }
  },
  {
    id: 7,
    label: 'Devon, the old man wanted me, it was his dying request',
    user:
      '<a href="https://www.google.com/search?q=Knight+Rider" target="_blank" style="color:#0077c0;">Knight Rider</a>',
    parentId: 2,
    dependentOn: [6],
    start: getDate(24 * 2),
    duration: 4 * 60 * 60 * 1000,
    percent: 20,
    type: 'task',
    collapsed: true
  },
  {
    id: 8,
    label: 'Hey, Baby! Anybody ever tell you I have beautiful eyes?',
    user:
      '<a href="https://www.google.com/search?q=Johhny+Bravo" target="_blank" style="color:#0077c0;">Johhny Bravo</a>',
    parentId: 7,
    dependentOn: [7],
    start: getDate(24 * 3),
    duration: 1 * 24 * 60 * 60 * 1000,
    percent: 0,
    type: 'task'
  },
  {
    id: 9,
    label:
      'This better be important, woman. You are interrupting my very delicate calculations.',
    user:
      '<a href="https://www.google.com/search?q=Dexter\'s+Laboratory" target="_blank" style="color:#0077c0;">Dexter\'s Laboratory</a>',
    parentId: 8,
    dependentOn: [8, 7],
    start: getDate(24 * 4),
    duration: 4 * 60 * 60 * 1000,
    percent: 20,
    type: 'task',
    style: {
      base: {
        fill: '#8E44AD',
        stroke: '#7E349D'
      }
    }
  },
  {
    id: 10,
    label: 'current task',
    user:
      '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: getDate(24 * 5),
    duration: 24 * 60 * 60 * 1000,
    percent: 0,
    type: 'task'
  },
  {
    id: 11,
    label: 'test task',
    user:
      '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: getDate(24 * 6),
    duration: 24 * 60 * 60 * 1000,
    percent: 0,
    type: 'task'
  },
  {
    id: 12,
    label: 'test task',
    user:
      '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: getDate(24 * 7),
    duration: 24 * 60 * 60 * 1000,
    percent: 0,
    type: 'task',
    parentId: 11
  },
  {
    id: 13,
    label: 'test task',
    user:
      '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: getDate(24 * 8),
    duration: 24 * 60 * 60 * 1000,
    percent: 0,
    type: 'task'
  },
  {
    id: 14,
    label: 'test task',
    user:
      '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: getDate(24 * 9),
    duration: 24 * 60 * 60 * 1000,
    percent: 0,
    type: 'task'
  },
  {
    id: 15,
    label: 'test task',
    user:
      '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: getDate(24 * 16),
    duration: 24 * 60 * 60 * 1000,
    percent: 0,
    type: 'task'
  }
]
const options = {
  taskMapping: {
    progress: 'percent'
  },
  maxRows: 100,
  maxHeight: 500,
  title: {
    label: 'Your project title as html (link or whatever...)',
    html: false
  },
  row: {
    height: 24
  },
  calendar: {
    hour: {
      display: true
    }
  },
  chart: {
    progress: {
      bar: false
    },
    expander: {
      display: true
    }
  },
  taskList: {
    expander: {
      straight: false
    },
    columns: [
      {
        id: 1,
        label: 'ID',
        value: 'id',
        width: 40
      },
      {
        id: 2,
        label: 'Description',
        value: 'label',
        width: 200,
        expander: true,
        html: true,
        events: {
          click ({ data, column }) {
            alert('description clicked!\n' + data.label)
          }
        }
      },
      {
        id: 3,
        label: 'Assigned to',
        value: 'user',
        width: 130,
        html: true
      },
      {
        id: 3,
        label: 'Start',
        value: task => dayjs(task.start).format('YYYY-MM-DD'),
        width: 78
      },
      {
        id: 4,
        label: 'End',
        value: task => dayjs(task.end).format('YYYY-MM-DD'),
        width: 78,
        html: true
      },
      {
        id: 5,
        label: 'Type',
        value: 'type',
        width: 68
      },
      {
        id: 6,
        label: '%',
        value: 'progress',
        width: 35,
        style: {
          'task-list-header-label': {
            'text-align': 'center',
            width: '100%'
          },
          'task-list-item-value-container': {
            'text-align': 'center',
            width: '100%'
          }
        }
      }
    ]
  },
  locale: {
    name: 'pt-br',
    weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'], // weekdays starting from sunday (Sunday, Monday etc)
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'], // same as weekdays but little bit shorter (Sun, Mon ...)
    weekdaysMin: ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Se', 'Sá'], // shortest weekdays (Su, Mo ...)
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], // month names
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], // shorter month names
    Now: 'Now',
    'X-Scale': 'Zoom-X',
    'Y-Scale': 'Zoom-Y',
    'Task list width': 'Task list',
    'Before/After': 'Expand',
    'Display task list': 'Task list'
  }
}

export default {
  name: 'App',
  components: {
    quillEditor
  },
  created () {
    // this.$vuetify.theme.dark = true
  },
  props: {
    source: String
  },
  data: () => ({
    editorOption: {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ header: 1 }, { header: 2 }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }],
          [{ size: ['small', false, 'large', 'huge'] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ['clean'],
          ['link', 'image', 'video']
        ],
        syntax: {
          highlight: text => hljs.highlightAuto(text).value
        }
      }
    },
    content: dedent`Adicionar Texto`,
    // content: dedent`
    //     <h1 class="ql-align-center"><span class="ql-font-serif" style="background-color: rgb(240, 102, 102); color: rgb(255, 255, 255);"> I am snow example! </span></h1><p><br></p><p><span class="ql-font-serif">W Can a man still be brave if he's afraid? That is the only time a man can be brave. </span></p><p><br></p><p><strong class="ql-font-serif ql-size-large">Courage and folly is </strong><strong class="ql-font-serif ql-size-large" style="color: rgb(230, 0, 0);">always</strong><strong class="ql-font-serif ql-size-large"> just a fine line.</strong></p><p><br></p><p><u class="ql-font-serif">There is only one God, and his name is Death. And there is only one thing we say to Death: "Not today."</u></p><p><br></p><p><em class="ql-font-serif">Fear cuts deeper than swords.</em></p><p><br></p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">const</span> a = <span class="hljs-number">10</span>;
    //     <span class="hljs-keyword">const</span> editorOption = { <span class="hljs-attr">highlight</span>: <span class="hljs-function"><span class="hljs-params">text</span> =&gt;</span> hljs.highlightAuto(text).value };</pre><p><br></p><p><span class="ql-font-serif">Every flight begins with a fall.</span></p><p><br></p><p><a href="https://surmon.me/" rel="noopener noreferrer" target="_blank" class="ql-font-serif ql-size-small" style="color: rgb(230, 0, 0);"><u>A ruler who hides behind paid executioners soon forgets what death is. </u></a></p><p><br></p><iframe class="ql-video ql-align-center" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" height="238" width="560"></iframe><p><br></p><p><span class="ql-font-serif">Hear my words, and bear witness to my vow. Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against the cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night’s Watch, for this night and all the nights to come.</span></p><p><br></p><p><span class="ql-font-serif">We are born to suffer, to suffer can make us strong.</span></p><p><br></p><p><span class="ql-font-serif">The things we love destroy us every time.</span></p>
    //   `,

    drawerLeft: null,
    drawerRight: null,

    type: 'month',
    types: ['month', 'week', 'day', '4day'],
    mode: 'stack',
    modes: ['stack', 'column'],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
      { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
      { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
      { text: 'Mon, Wed, Fri', value: [1, 3, 5] }
    ],
    value: '',
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],

    modalTarefa: false,

    tasks,
    options,
    tarefas: []
  }),

  methods: {
    retrieveTarefa () {
      TarefaDataService.getAll()
        .then(response => {
          this.tarefas = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    getEvents ({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay
        })
      }

      this.events = events
    },
    getEventColor (event) {
      return event.color
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    resetInfo () {
      this.modalTarefa = false
    },
    async abrirTarefa () {
      this.loading = true
      console.log('tarefa')
      this.modalTarefa = true

      this.loading = false
    },

    onEditorChange: debounce(function (value) {
      this.content = value.html
    }, 466),
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },

    tasksUpdate (tasks) {
      this.tasks = tasks
    },
    optionsUpdate (options) {
      this.options = options
    },
    styleUpdate (style) {
      this.dynamicStyle = style
    }
  },
  computed: {
    editor () {
      return this.$refs.myTextEditor.quill
    },
    contentCode () {
      return hljs.highlightAuto(this.content).value
    }
  },
  mounted () {
    this.retrieveTarefa()
  }
}
</script>
