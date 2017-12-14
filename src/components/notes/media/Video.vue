<template>
  <div class="layout-padding row justify-center">

    <div style="width: 500px; max-width: 90vw">

      <q-video src="https://www.youtube.com/embed/s87EppmsJv0?rel=0" />

      <p class="text-bold">With HTML Markup</p>

      <div class="q-video">
        <iframe src="https://www.youtube.com/embed/s87EppmsJv0" frameborder="0" allowfullscreen></iframe>
      </div>

    </div>

  </div>
</template>

<script>
  import { QVideo } from 'quasar'
  export default {
    components: {
      QVideo
    },
    data: () => ({

    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
