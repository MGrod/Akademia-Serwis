<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <validation-provider
              v-slot="{ errors }"
              name="Imie"
              rules="required|max:10"
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :error-messages="errors"
                label="Imie"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col cols="12" md="4">
            <validation-provider
              v-slot="{ errors }"
              name="Nazwisko"
              rules="required|max:10"
            >
              <v-text-field
                v-model="surName"
                :counter="10"
                :error-messages="errors"
                label="Nazwisko"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col cols="12" md="4">
            <validation-provider
              v-slot="{ errors }"
              name="E-mail"
              rules="required|email"
            >
              <v-text-field
                v-model="email"
                :error-messages="errors"
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
              v-slot="{ errors }"
              name="Adres zamieszkania"
              rules="required|max:10"
            >
              <v-text-field
                v-model="adress"
                :error-messages="errors"
                label="Adres zamieszkania"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col cols="12" md="6">
            <validation-provider
              v-slot="{ errors }"
              name="Numer telefonu"
              :rules="{
              required: true,
              digits: 9,
              }"
            >
              <v-text-field
                v-model="phoneNumber"
                :counter="9"
                :error-messages="errors"
                label="Numer telefonu"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>

        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="checkbox"
        >
          <v-checkbox
            v-model="checkbox"
            :error-messages="errors"
            value="1"
            label="Akceptuje politykę prywatności"
            type="checkbox"
            required
          ></v-checkbox>
        </validation-provider>
        <v-btn class="mr-4" type="submit" :disabled="invalid"> Zapisz </v-btn>
        <v-btn @click="clear">
        Wyczyść
      </v-btn>
      </v-container>
    </form>
  </validation-observer>
</template>

<script>
import { required, digits, email, max, } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

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
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: '',
    surName: '',
    adress: '',
    phoneNumber: '',
    email: '',
    checkbox: null,
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
      this.$refs.observer.reset()
    },
  },
}
</script>
