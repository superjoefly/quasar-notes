<template>
  <div class="layout-padding">
    <p class="text-bold">Swiping</p>

    <p class="caption">Optional Modifiers: .horizontal / .vertical / .nomouse</p>

    <div v-touch-swipe.horizontal="userSwiped" style="width: 300px; height: 500px" class="bg-blue-3"></div>

  </div>
</template>

<script>
  import { TouchSwipe, Toast } from 'quasar'
  export default {
    directives: {
      TouchSwipe
    },
    data: () => ({

    }),
    methods: {
      userSwiped (obj) {
        console.log(obj)
        Toast.create('You swiped ' + obj.direction)
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
