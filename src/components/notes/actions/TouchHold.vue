<template>
  <div class="layout-padding">
    <p class="text-bold">Touch Hold (touch and hold for toast!)</p>

    <p class="caption">Optional Modifiers: .nomouse</p>

    <div v-touch-hold="touchHold" style="width: 300px; height: 500px" class="bg-blue-3"></div>
  </div>
</template>

<script>
import { TouchHold, Toast } from 'quasar'
export default {
  directives: {
    TouchHold
  },
  data: () => ({

  }),
  methods: {
    touchHold (obj) {
      console.log(obj)
      console.log(obj.position.top + ' ' + obj.position.left)
      Toast.create('You touch holded :-)')
    }
  },
  computed: {

  }
}
</script>

<style lang="stylus" scoped>

</style>
