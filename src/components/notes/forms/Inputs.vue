<template>
  <div class="layout-padding">
    <p class="text-bold">Form Inputs</p>

    <p>Single Line Input:</p>

    <q-input v-model="test"></q-input>

    <p>Stack Label:</p>
    <q-input v-model="test" stack-label="Stack Label" placeholder="enter some text"></q-input>

    <p>Float Label:</p>
    <q-input v-model="test" float-label="Float Label"></q-input>

    <br><br>
    <hr><hr>

    <p>Multiple Line Input</p>
    <q-input v-model="area" type="textarea" float-label="Textarea" :max-height="100" :min-rows="7"></q-input>

    <hr><hr>
    <br><br>

    <p>Icon Buttons</p>

    <small>Warning icon when error = true</small>
    <q-input v-model="test" :error="error" type="password" :after="[
      {
        icon: 'warning',
        error: true,
        handler () {
          // do something...
        }
      }
    ]" />

    <small>Arrow icon when model is not empty:</small>
    <q-input v-model="test" :after="[
      {
        icon: 'arrow_forward',
        content: true,
        handler () {
          // do something...
        }
      }
    ]" />

    <hr><hr>
    <br><br>

    <p>Password Input</p>

    <q-input v-model="password" type="password" float-lable="Password"></q-input>

    <hr><hr>
    <br><br>

    <p>Number Input</p>

    <q-input v-model="number" type="number" float-label="Number"></q-input>

    <hr><hr>
    <br><br>

    <p>Prefixes and Suffixes Property</p>

    <small>Prefix:</small>
    <q-input v-model="number" type="number" prefix="$US" stack-label="number"></q-input>

    <small>Suffix</small>
    <q-input v-model="number" type="email" suffix="gmail.com" stack-label="Email"></q-input>

    <hr><hr>
    <br><br>

    <p>Error State</p>

    <!-- Issue with Color -->

    <q-input :error="error" v-model="test" float-label="Error"></q-input>

    <small>Error with Explanation:</small>
    <q-field :error="error" error-label="There was an error!">
      <q-input v-model="test" float-label="Error with Explanation"></q-input>
    </q-field>

    <hr><hr>
    <br><br>

    <p>Loading State</p>

    <q-input :loading="true" v-model="test" placeholder="loading..."></q-input>

    <hr><hr>
    <br><br>

    <p>Colored Input</p>

    <q-input type="text" v-model="test" color="orange" placeholder="orange"></q-input>

    <q-input type="text" v-model="test" color="green" inverted placeholder="inverted green"></q-input>

    <hr><hr>
    <br><br>

    <p>Alignment</p>

    <q-input type="email" v-model="email" align="right" suffix="@gmail.com" float-label="Email" color="purple"></q-input>

    <hr><hr>
    <br><br>

    <p>Q-input with Q-field</p>

    <div class="bg-grey-9" style="height: 300px; width: 500px; padding: 10px;">
      <q-field icon="wifi" label="My Label" :count="10" helper="My Helper Text" :error="false" error-label="There was an error">
        <q-input v-model="test" dark color="lime" float-label="My Textfield"></q-input>
      </q-field>
    </div>

    <hr><hr>
    <br><br>

    <p>Validation with Vuelidate</p>

    <q-field icon="mail" label="Email" helper="Enter your email address" :error="$v.email.$error" error-label="Please enter a valid email address" count>
      <q-input type="email" @blur="$v.email.$touch" v-model="email" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>Lazy V-model Sync (v-model.lazy)</p>

    <q-input v-model.lazy="test"></q-input>

    <hr><hr>
    <br><br>

    <p>Trim User Input (v-model.trim)</p>

    <q-input v-model.trim="test"></q-input>

  </div>



</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  export default {
    validations: {
      email: { required, email }
    },
    data: () => ({
      test: '',
      area: '',
      error: true,
      password: '',
      number: null,
      email: ''
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>
  @import '~variables'


</style>
