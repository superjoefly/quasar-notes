<template>
  <div class="layout-padding">
    <p class="text-bold">Panning (view in console...)</p>

    <p class="caption">Optional Modifiers: .horizontal / .vertical / .nomouse</p>

    <div v-touch-pan.horizontal="userSwiped" style="width: 300px; height: 500px" class="bg-blue-3"></div>

  </div>
</template>

<script>
  import { TouchPan } from 'quasar'
  export default {
    directives: {
      TouchPan
    },
    data: () => ({

    }),
    methods: {
      userSwiped (obj) {
        console.log(obj.evt)
        console.log(obj.position)
        console.log(obj.direction)
        console.log(obj.duration)
        console.log(obj.distance)
        console.log(obj.delta)
        console.log(obj.isFirst)
        console.log(obj.isFinal)
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
