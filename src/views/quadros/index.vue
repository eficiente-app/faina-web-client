<template>
  <v-countainer>
    <v-row dense>
      <v-col
        v-for="grupo in quadros"
        :key="grupo.id"
        cols="2"
      >
        <v-card class="ma-2">
          <v-card-text class="headline mb-1">{{ grupo.descricao }}</v-card-text>
          <v-divider></v-divider>

          <v-card
            class="ma-2"
            max-width="344"
          >
            <v-list-item three-line>
              <v-list-item-avatar
                tile
                size="40"
              >
                <v-img
                  :src="`https://avataaars.io/?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun`"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline mb-1">
                  OVERLINE
                </div>
                <v-list-item-title class="headline mb-1">
                  Headline 5
                </v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-countainer>
</template>

<script>
export default {
  name: 'QuadrosPage',

  data: () => ({
    quadros: [
      {
        id: 1,
        descricao: 'Abertos',
        order: 0,
        tarefas: [
          //
        ]
      }
    ]
  })
}
</script>

<style>

</style>
