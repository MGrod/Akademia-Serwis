<template>
  <!-- <validation-observer ref="observer" v-slot="{ invalid }"> -->
    <form @submit.prevent="submit">
      <v-container>
        <v-col class="mb-4">
          <h1 class="display-1 mb-1">Dane osobowe</h1>
          <v-divider></v-divider>
        </v-col>
        <v-row>
          <v-col cols="12" md="4">
            <validation-provider
              name="Imie"
              rules="required|max:10"
            >
              <v-text-field
                disabled
                v-model="client.name"
                :counter="10"
                label="Imie"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col cols="12" md="4">
            <validation-provider
              name="Nazwisko"
              rules="required|max:10"
            >
              <v-text-field
                disabled
                v-model="client.surname"
                :counter="10"
                label="Nazwisko"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col cols="12" md="4">
            <validation-provider
              name="E-mail"
              rules="required|email"
            >
              <v-text-field
                disabled
                v-model="client.email"
                label="E-mail"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <validation-provider
              name="Adres zamieszkania"
              rules="required|max:10"
            >
              <v-text-field
                disabled
                v-model="client.adress"
                label="Adres zamieszkania"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col cols="12" md="6">
            <validation-provider
              disabled
              name="Numer telefonu"
              :rules="{
              required: true,
              digits: 9,
              }"
            >
              <v-text-field
                disabled
                v-model="client.phoneNumber"
                :counter="9"
                label="Numer telefonu"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
      </v-container>
    <v-container>
        <v-col class="mb-4">
          <h1 class="display-1 mb-1">Dane samochodu</h1>
          <v-divider></v-divider>
        </v-col>
      <v-row align="center">
        <v-col 
        cols="12" 
        sm="6">
          <v-select 
          disabled
          v-model="car" 
          :items="carItems"
          label="Samochód"
          solo></v-select>
        </v-col>
        <v-col 
        cols="12" 
        sm="6">
          <v-select 
          disabled
          v-model="engine"
          :items="engineItems" 
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
          disabled
          v-model="color"
          :items="colorItems" 
          label="Kolor samochodu" 
          solo></v-select>
        </v-col>

        <v-col 
        cols="12" 
        sm="4">
          <v-select 
          disabled
          v-model="type"
          :items="typeItems" 
          label="Typ nadwozia" 
          solo></v-select>
        </v-col>
        <v-col 
        cols="12" 
        sm="4">
          <v-select 
          disabled
          v-model="transmission"
          :items="transmissionItems" 
          label="Skrzynia biegów" 
          solo></v-select>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <!-- <v-row align="center">
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
      </v-row> -->

        <v-col cols="12" md="4">
              <v-text-field
              disabled
              v-model="client.price"
              label="Kwota za zamówienie"
              ></v-text-field>
        </v-col>
        <!-- <v-card-action> -->
        <!-- <v-btn @click="save" class="mr-4" type="submit"> Zapisz Dane</v-btn> -->
        <!-- <v-btn @click="clear">Wyczyść dane osobowe</v-btn> -->
        <!-- </v-card-action> -->


    </v-container>


    </form>
  <!-- </validation-observer> -->
</template>

<script>
import { required, digits, email, max, } from 'vee-validate/dist/rules'
import { extend, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} musi zawierać przynajmniej {length} cyfr. ({_value_})',
})

extend('required', {
  ...required,
  message: 'brak wypełnienia',
})

extend('max', {
  ...max,
  message: '{_field_} nie może być dłuższe niż {length} znaków',
})

extend('email', {
  ...email,
  message: 'Email jest nieprawidłowy',
})

export default {
  mounted(){
    this.context = window.coachViewContext;
    this.initData();
  },
  components: {
    ValidationProvider,
    // ValidationObserver,
  },
  
  data: () => ({
    context: null,
    client: {},
    // name: {},
    // surname: {},
    // adress: {},
    // phoneNumber: {},
    // email: {},
    // price: {}, 
    carItems: ['Audi', 'BMW', 'BENTLEY', 'Ferrari'],
    car: null,
    engineItems: ['2.0','2.5','3.0','5.0'],
    engine: null,
    colorItems: ['czarny', 'biały', 'czerwony', 'zielony'],
    color: null,
    typeItems: ['Coupe', 'Sedan', 'Kabriolet', 'Kombi'],
    type: null,
    transmissionItems: ['manualna', 'automatyczna'],
    transmission: null,
  }),

  methods: {
    submit () {
      this.$refs.observer.validate()
    },
    clear () {
      this.client.name = ''
      this.client.surname = ''
      this.client.adress = ''
      this.client.phoneNumber = ''
      this.client.email = ''
      this.car = ''
      this.engine = ''
      this.color = ''
      this.type = ''
      this.transmission = ''
      this.client.price = ''
      // this.$refs.observer.reset()
    },
    initData() {
      this.client = this.context.binding.get("value")
      
      this.car = this.context.options.car.get("value");
      this.engine = this.context.options.engine.get("value");
      this.color = this.context.options.color.get("value");
      this.type = this.context.options.type.get("value");
      this.transmission = this.context.options.transmission.get("value");
      },
    save() {
      this.context.binding.set("value", this.client)

      this.context.options.car.set("value", this.car);
      this.context.options.engine.set("value", this.engine);
      this.context.options.color.set("value", this.color);
      this.context.options.type.set("value", this.type);
      this.context.options.transmission.set("value", this.transmission);
      
      this.context.trigger();
    }
  },
  watch: {
    
  },
}
</script>
