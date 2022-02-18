<template>
<!-- <validation-observer ref="observer">  -->
  <v-form v-model="valid">
    <v-container>
      <v-row align="center">
        <v-col 
        cols="12" 
        sm="6">
          <v-select
          :items="car"
          label="Samochód"
          solo></v-select>
        </v-col>
        <v-col 
        cols="12" 
        sm="6">
          <v-select 
          :items="engine" 
          label="Moc silnika" 
          solo></v-select>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center">
        <v-col 
        cols="12" 
        sm="4">
          <v-select 
          :items="color" 
          label="Kolor samochodu" 
          solo></v-select>
        </v-col>

        <v-col 
        cols="12" 
        sm="4">
          <v-select 
          :items="type" 
          label="Typ nadwozia" 
          solo></v-select>
        </v-col>
        <v-col 
        cols="12" 
        sm="4">
          <v-select 
          :items="transmission" 
          label="Skrzynia biegów" 
          solo></v-select>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center">
        <v-col 
        cols="12" 
        sm="4">
          <v-select 
          :items="color" 
          label="Kolor samochodu" 
          solo></v-select>
        </v-col>

        <v-col 
        cols="12" 
        sm="4">
          <v-select 
          :items="type" 
          label="Typ nadwozia" 
          solo></v-select>
        </v-col>
        <v-col 
        cols="12" 
        sm="4">
          <v-select 
          :items="transmission" 
          label="Skrzynia biegów" 
          solo></v-select>
        </v-col>
      </v-row>

      <v-btn class="mr-4" type="submit" :disabled="invalid"> Zapisz </v-btn>
        <v-btn @click="clear">
        Wyczyść
      </v-btn>
    </v-container>
        <!-- <pre v-if="select">prices: {{select.prices}}</pre> -->
  </v-form>
<!-- </validation-observer> -->
</template>

<script>


export default {
  data: () => ({
    car: ['Audi', 'BMW', 'BENTLEY', 'Ferrari'],
    engine: ['2.0','2.5','3.0','5.0'],
    color: ['czarny', 'biały', 'czerwony', 'zielony'],
    type: ['Coupe', 'Sedan', 'Kabriolet', 'Kombi'],
    transmission: ['manualna', 'automatyczna']
  }),
  methods: {
    submit () {
      this.$refs.observer.validate()
    },
    clear () {
      this.name = ''
      this.surName = ''
      this.adress = ''
      this.phoneNumber = ''
      this.email = ''
      this.checkbox = null
      this.car = ''
      this.engine = ''
      this.color = ''
      this.type = ''
      this.transmission = ''
      this.$refs.observer.reset()
    },
  },
  computed: {
  },
  
}
</script>
