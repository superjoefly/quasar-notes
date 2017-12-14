<template>
  <div class="layout-padding">
    <p class="text-bold">Parallax</p>

    <p v-for="n in 3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In doloremque libero totam accusantium hic provident!</p>

      <q-parallax :src="nature1" :height="200">
        <div slot="loading">Loading...</div>
        <h3>Nature 1</h3>
      </q-parallax>

    <p v-for="n in 3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In doloremque libero totam accusantium hic provident!</p>

    <q-parallax :src="nature2" :height="200">
      <div slot="loading">Loading...</div>
      <h3>Nature 1</h3>
    </q-parallax>

    <p v-for="n in 3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In doloremque libero totam accusantium hic provident!</p>

    <q-parallax :src="nature1" :height="200">
      <div slot="loading">Loading...</div>
      <h3>Nature 1</h3>
    </q-parallax>


  </div>
</template>

<script>
  import { QParallax } from 'quasar'
  export default {
    components: {
      QParallax
    },
    data: () => ({
      nature1: 'statics/nature/nature3.jpg',
      nature2: 'statics/nature/nature2.jpg'
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
