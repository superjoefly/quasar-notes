<template>
  <div class="layout-padding">

    <p class="text-bold">Option Group</p>

    <q-option-group
      type="radio"
      color="secondary"
      v-model="radio"
      :options="[
        { label: 'New York', value: 'new york' },
        { label: 'London', value: 'london' },
        { label: 'Paris', value: 'paris', color: 'red' }
      ]"
    />

    <p>Model: {{radio}}</p>

    <hr><hr>
    <br><br>

    <p>Checkbox Group</p>
    <q-option-group type="checkbox" color="orange" v-model="checkbox" :options="[
      { label: 'New York', value: 'new york' },
      { label: 'London', value: 'london' },
      { label: 'Paris', value: 'paris', color: 'red' }
    ]"></q-option-group>

    <p>Model: {{checkbox}}</p>

    <hr><hr>
    <br><br>

    <p>Toggle Group</p>
    <q-option-group type="toggle" color="purple" v-model="toggle" :options="[
      { label: 'New York', value: 'new york' },
      { label: 'London', value: 'london' },
      { label: 'Paris', value: 'paris', color: 'red' }
    ]"></q-option-group>

    <p>Model: {{toggle}}</p>

    <hr><hr>
    <br><br>

    <p>Inline Options</p>
    <q-option-group inline type="toggle" color="purple" v-model="toggle" :options="[
      { label: 'New York', value: 'new york' },
      { label: 'London', value: 'london' },
      { label: 'Paris', value: 'paris', color: 'red' }
    ]"></q-option-group>

    <p>Model: {{toggle}}</p>

    <hr><hr>
    <br><br>

    <p>Labels on Left Side</p>
    <q-option-group left-label inline type="checkbox" color="secondary" v-model="toggle" :options="[
      { label: 'New York', value: 'new york' },
      { label: 'London', value: 'london' },
      { label: 'Paris', value: 'paris', color: 'red' }
    ]" />

    <p>Model: {{toggle}}</p>

    <hr><hr>
    <br><br>

    <p>Disabled</p>

    <q-option-group type="radio" disable color="tertiary" v-model="radio" :options="[
      { label: 'New York', value: 'new york' },
      { label: 'London', value: 'london' },
      { label: 'Paris', value: 'paris', color: 'red' }
    ]"></q-option-group>

    <hr><hr>
    <br><br>

    <p>Inside QField</p>

    <q-field icon="place" label="City of Residence" helper="Choose a city">
      <q-option-group type="radio" v-model="radio" :options="[
        { label: 'New York', value: 'new york' },
        { label: 'London', value: 'london' },
        { label: 'Paris', value: 'paris', color: 'red' }
      ]"></q-option-group>
    </q-field>

  </div>
</template>

<script>
  export default {
    data: () => ({
      radio: 'london',
      checkbox: ['new york', 'paris'],
      toggle: ['paris']
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
