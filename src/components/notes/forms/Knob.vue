<template>
  <div class="layout-padding">
    <p class="text-bold">Knob</p>

    <p>Standard</p>
    <q-knob v-model="model" :min="min" :max="max" />

    <hr><hr>
    <br><br>

    <p>Colored Text</p>
    <q-knob class="text-primary" v-model="model" :min="min" :max="max" />

    <hr><hr>
    <br><br>

    <p>With Step</p>
    <q-knob v-model="model" :min="min" :max="max" :step="10" />

    <hr><hr>
    <br><br>

    <p>Styling</p>
    <q-knob v-model="model" size="150px" color="orange" line-width="2px" track-color="white" :min="min" :max="max">
      ${{ model }}
    </q-knob>

    <hr><hr>
    <br><br>

    <q-knob v-model="model" style="font-size: 3rem" color="amber-7" :min="min" :max="max" :step="5" />

    <hr><hr>
    <br><br>

    <q-knob v-model="model" size="120px" style="font-size: 1.5rem" color="secondary" track-color="yellow-3" line-width="5px" :min="min" :max="max" :step="5">
      <q-icon class="on-left" name="euro_symbol" />
      {{ model }}
    </q-knob>

    <hr><hr>
    <br><br>

    <p>Readonly</p>
    <q-knob v-model="model" :min="min" :max="max" color="primary" readonly>
      <q-icon class="on-left" name="volume_up" />
      {{ model }}
    </q-knob>

    <hr><hr>
    <br><br>

    <p>Disabled</p>
    <q-knob v-model="model" :min="min" :max="max" color="orange" disable>
      <q-icon class="on-left" name="volume_up" />
      {{ model }}
    </q-knob>

    <hr><hr>
    <br><br>

    <p>Inside Field</p>
    <q-field :label="`Amount: ${model}`" helper="Touch to select amount (USD)" icon="local_atm">
      <q-knob v-model="model" :min="min" :max="max" />
    </q-field>

  </div>
</template>

<script>
  export default {
    data: () => ({
      model: 30,
      min: 0,
      max: 50
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
