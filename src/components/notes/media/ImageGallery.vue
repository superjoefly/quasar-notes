<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Image Gallery</p>

      <q-gallery :src="gallery"></q-gallery>

      <p class="caption">Gallery Carousel</p>
      <q-gallery-carousel :src="slider"></q-gallery-carousel>

      <p class="caption">Gallery Carousel</p>
      <q-gallery-carousel :src="slider" horizontal-quick-view></q-gallery-carousel>

      <p class="caption">Gallery Carousel with Infinite Scroll</p>
      <q-gallery-carousel dots infinite autoplay :src="secondSlider"></q-gallery-carousel>

    </div>
  </div>
</template>

<script>
  import { QGallery, QGalleryCarousel, QCarousel } from 'quasar'
  export default {
    components: {
      QGallery, QGalleryCarousel, QCarousel
    },
    data: () => ({
      gallery: [
        'statics/nature/nature1.jpg',
        'statics/nature/nature2.jpg',
        'statics/nature/nature3.jpg',
        'statics/nature/nature4.jpg',
        'statics/nature/nature5.jpg',
        'statics/nature/nature6.jpg'
      ],
      slider: [
        'statics/nature/nature1.jpg',
        'statics/nature/nature2.jpg',
        'statics/nature/nature3.jpg',
        'statics/nature/nature4.jpg',
        'statics/nature/nature5.jpg',
        'statics/nature/nature6.jpg',
        'statics/nature/nature7.jpg',
        'statics/nature/nature8.jpg',
        'statics/nature/nature9.jpg',
        'statics/nature/nature10.jpg'
      ],
      secondSlider: [
        'statics/nature/nature5.jpg',
        'statics/nature/nature6.jpg',
        'statics/nature/nature7.jpg'
      ]
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
