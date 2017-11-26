<template>
  <div class="layout-padding">
    <p class="text-bold">Sliders</p>

    <p>Basic Slider</p>

    <q-slider v-model="selectedValue" :min="0" :max="50" />

    <p>Example with Step, Label, Snap and Markers</p>

    <q-slider v-model="selectedValue" :min="0" :max="50" :step="5" label snap markers />

    <p>Example with Square Button</p>
    <q-slider v-model="selectedValue" :min="0" :max="50" :step="5" label snap markers square />

    <p>Example with Error State</p>
    <q-slider v-model="selectedValue" :min="0" :max="50" :step="5" label snap markers error />

    <p>Example with Disabled State</p>
    <q-slider v-model="selectedValue" :min="0" :max="50" :step="5" label snap markers disabled />

    <p>Override Label</p>

    <q-slider :label-value="`${selectedValue}px`" v-model="selectedValue" :min="0" :max="50" label-always  color="secondary" />

    <p>QRange Example (out of context)</p>
    <q-range
      v-model="selectedValue"
      label-always
      :min="-20" :max="20"
      :label-value="`${selectedValue}px`"
    />

    <p>Coloring</p>
    <q-slider color="orange" v-model="selectedValue" :min="0" :max="50" label />

    <p>In a Field</p>
    <q-field icon="local_atm" :label="`Payment: ${selectedValue}`" helper="How much?">
      <q-slider class="dark" v-model="selectedValue" :min="0" :max="50" label />
    </q-field>

    <p>Inside List</p>

    <q-list>
      <q-item>
        <q-item-side icon="volume_up" />
        <q-item-main>
          <q-slider v-model="sterio.volume" :min="0" :max="50" label color="black" />
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-side icon="brightness_medium" />
        <q-item-main>
          <q-slider v-model="sterio.brightness" :min="0" :max="50" label color="teal" />
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-side icon="mic" />
        <q-item-main>
          <q-slider v-model="sterio.mic" :min="0" :max="50" label color="orange" />
        </q-item-main>
      </q-item>
    </q-list>




  </div>
</template>

<script>
  export default {
    data: () => ({
      selectedValue: 30,
      sterio: {
        volume: 25,
        brightness: 25,
        mic: 25
      }
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
