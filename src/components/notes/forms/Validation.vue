<template>
  <div class="layout-padding">
    <p class="text-bold">Form Validation</p>

    <p>Example using Vuelidate - see Vuelidate docs for more info...</p>

    <div>
      <q-input v-model="form.email" @blur="$v.form.email.$touch" @keyup.enter="submit" :error="$v.form.email.$error">
        <q-btn color="orange" @click="submit">Submit</q-btn>
      </q-input>
      <p>{{ form.message }}</p>
    </div>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  import { Toast } from 'quasar'
  export default {
    validations: {
      form: {
        email: { required, email }
      }
    },
    data: () => ({
      form: {
        email: '',
        message: ''
      }
    }),
    methods: {
      submit () {
        this.$v.form.$touch()

        if (this.$v.form.$error) {
          Toast.create('Please provide a valid email...')
        }
        else {
          this.form.message = 'You entered ' + this.form.email
          this.form.email = ''
          this.$v.$reset()
        }
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
