<template>
  <div class="text-center">
    <v-dialog
      :value="value"
      :width="options && options.width || optionsDefalt.width"
      persistent
      @input="$emit('input', value)"
    >
      <v-card>
        <v-card-title
          class="headline secondary white--text py-2 px-2"
          dark
        >
          <v-btn
            color="white"
            icon
            left
            size="45"
            @click="$emit('input', false)"
          >
            <v-icon class="pa-0 ma-0">
              mdi-close
            </v-icon>
          </v-btn>
          {{ options && options.title ? options.title : optionsDefalt.title }}
        </v-card-title>

        <v-card-text class="pa-0">
          <slot />
        </v-card-text>

        <v-divider />

        <v-card-actions v-if="options && options.actions && options.actions.length">
          <v-spacer />
          <v-btn
            v-for="btn in options.actions"
            :color="btn.color"
            :key="btn.title"
            :outlined="btn.outlined"
            @click="$emit(`${btn.emit}`)"
          >
            <v-icon left>
              {{btn.icon}}
            </v-icon>
            {{ btn.title }}
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer />
          <v-btn
            v-for="def in optionsDefalt.actions"
            :color="def.color"
            :key="def.title"
            :outlined="def.outlined"
            @click="$emit(`${def.emit}`)"
          >
            <v-icon left>
              {{def.icon}}
            </v-icon>
            {{ def.title }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogComponent',

  data: () => ({
    /**
     * @author Eder Ferraz Caciano
     * @summary optionsDefalt
     * @description Objeto padrão para carregamento do componente modal. Cada opção pode
     * ser passado de forma dinamica dentro da prop options.
     * Os valores aceitos na prop options são os mesmos da variavel optionsDefault.
     * Caso seja passado valor em options será renderizado, caso não o valor padrão será carregado.
     */
    optionsDefalt: {
      title: 'Form Title',
      width: 600,
      actions: [
        {
          title: 'Save',
          color: 'primary',
          icon: 'mdi-content-save',
          emit: 'salvar',
          outlined: false
        },
        {
          title: 'Cancel',
          color: 'error',
          icon: 'mdi-cancel',
          emit: 'input',
          outlined: false
        }
      ]
    }
  }),

  props: {
    options: {
      default: () => {}
    },
    value: {
      required: true,
      type: Boolean
    }
  }
}
</script>
