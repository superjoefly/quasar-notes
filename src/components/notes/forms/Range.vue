<template>
  <div class="layout-padding">
    <p class="text-bold">Range</p>

    <q-range v-model="values" :min="0" :max="50" :step="10" label snap />

    <hr><hr>
    <br><br>

    <p>With color, square and markers:</p>

    <q-range v-model="values" :min="0" :max="50" :step="10" label snap square markers color="orange" />

    <hr><hr>
    <br><br>

    <p>Disabled</p>

    <q-range v-model="values" :min="0" :max="50" :step="10" label disabled />

    <p>Error State and Label Always</p>

    <q-range v-model="values" :min="0" :max="50" :step="10" label-always error />

    <hr><hr>
    <br><br>

    <p>Coloring</p>

    <q-range v-model="values" :min="0" :max="50" label-always color="teal" />

    <hr><hr>
    <br><br>

    <p>Dragging the Range</p>

    <small>Drag Range</small>
    <q-range v-model="values" :min="0" :max="50" label drag-range></q-range>

    <br><br>

    <small>Drag Range Only</small>
    <q-range v-model="values" :min="0" :max="50" label drag-range-only />

    <hr><hr>
    <br><br>

    <p>Overriding Labels</p>

    <q-range v-model="values" :min="0" :max="50" :left-label-value="test" :right-label-value="`${values.max}px`" label />

    <hr><hr>
    <br><br>

    <p>Inside a List</p>

    <q-list>
      <q-item>
        <q-item-side icon="local_atm" />
        <q-item-main>
          <q-range v-model="values" :min="0" :max="50" label />
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-side icon="local_car_wash" />
        <q-item-main>
          <q-range v-model="values" :min="0" :max="50" label />
        </q-item-main>
      </q-item>
    </q-list>

    <hr><hr>
    <br><br>

    <p>Inside QField</p>

    <q-field icon="local_atm" :label="`Min: ${values.min} , Max: ${values.max}`" helper="How much?">
      <q-range class="dark" v-model="values" :min="0" :max="50" label />
    </q-field>
    
  </div>
</template>

<script>
  export default {
    data: () => ({
      values: {
        min: 10,
        max: 40
      },
      test: 'Hello'
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
