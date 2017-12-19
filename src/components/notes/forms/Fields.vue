<template>
  <div class="layout-padding">

    <p class="text-bold">Form Fields</p>
    <p>Email Example:</p>
    <q-field icon="cloud" label="Gmail Address" helper="Please enter your Gmail address" :error="mailHasError" error-label="Please enter a valid email address" :count="10">
      <q-input suffix="@gmail.com" v-model="email"></q-input>
    </q-field>

    <hr><hr>
    <br><br>

    <p>Max Characters:</p>
    <q-field :count="15">
      <q-input type="password" max-length="15" v-model="password" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>Counting Chips</p>
    <q-field count icon="account_box" helper="some helper text" :label-width="3">
      <q-chips-input float-label="Float Label" v-model="model" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>Counting Selected Options</p>

    <q-field count >
      <q-select
        v-model="selected"
        :options="[
          {
            label: 'Google',
            icon: 'email',
            value: 'goog'
          },
          {
            label: 'Facebook',
            description: 'Enables communication',
            value: 'fb'
          },
          {
            label: 'Twitter',
            secondIcon: 'alarm',
            value: 'twtr'
          }
        ]"
      />
    </q-field>

    <hr><hr>
    <br><br>

    <p>Validation with Vuelidate</p>

    <q-field icon="mail" label="Email" helper="Enter your email address" :error="$v.email.$error" error-label="Please enter a valid email address" count>
      <q-input type="email" @blur="$v.email.$touch" v-model="email" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>Stacked Label Input</p>

    <q-field icon="cloud" helper="Some helper text">
      <q-input v-model="test" float-label="Float Label" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>Custom Label Width</p>

    <q-field helper="Some helper text..." :label-width="3" label="Label">
      <q-input v-model="test" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>Using Inset</p>

    <q-field icon="cloud" helper="helper text..." label="Label">
      <q-input v-model="test" />
    </q-field>
    <q-field helper="helper text..." label="Label" inset="icon">
      <q-input v-model="test" />
    </q-field>
    <q-field helper="helper text..." label="Label" inset="full">
      <q-input v-model="test" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>Wrapping Side by Side Inputs</p>

    <q-field icon="security" helper="helper text..." label="Label">
      <div class="row no-wrap">
        <q-input class="col" v-model="test" stack-label="Input 1" />
        <q-input class="col" v-model="test" stack-label="Input 2" />
      </div>
    </q-field>

    <hr><hr>
    <br><br>

    <p>Dark Background</p>

    <div class="bg-grey-9" style="padding: 10px">
      <q-field dark label="Knob" helper="Helper text..." icon="cake" :error="error">
        <q-knob v-model="knob" size="100px" color="lime" line-width="2px" track-color="white" :min="knobMin" :max="knobMax">
          <q-icon class="on-left" name="volume_up" /> {{knob}}
        </q-knob>
      </q-field>
    </div>

    <hr><hr>
    <br><br>

    <p>Option Group</p>

    <q-field icon="flight_takeoff" label="Flight" helper="When do you want to go?">
      <q-option-group type="radio" v-model="option" :options="[
        { label: 'Monday', value: 'monday' },
        { label: 'Wednesday', value: 'wednesday' },
        { label: 'Firday', value: 'friday' }
      ]" />
    </q-field>



  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  export default {
    validations: {
      email: { required, email }
    },
    data: () => ({
      mailHasError: false,
      email: '',
      password: '',
      model: ['test', 'test'],
      selected: '',
      test: '',
      error: false,
      knob: 60,
      knobMin: 0,
      knobMax: 60,
      option: ''
    })
  }
</script>

<style lang="stylus" scoped>

</style>
