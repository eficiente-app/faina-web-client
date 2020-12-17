<template>
  <div class="text-center">
    <v-dialog
      :value="value"
      :width="this.width"
      persistent
      @input="$emit('input', value)"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ title }}
        </v-card-title>

        <v-card-text>
          <slot name="listagem" />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            outlined
            @click="$emit('salvar')"
          >
            <v-icon left>mdi-content-save</v-icon>
            Salvar
          </v-btn>
          <v-btn
            color="error"
            outlined
            @click="$emit('input', false)"
          >
            <v-icon left>mdi-cancel</v-icon>
            Cancel
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
    //
  }),

  props: {
    title: {
      default: 'Form Title',
      type: String
    },
    value: {
      required: true,
      type: Boolean
    },
    width: {
      default: 700
    }
  }
}
</script>

<style>

</style>
