<template>
  <div class="layout-padding">
    <p class="text-bold">Carousel</p>

    <p class="caption">Basic Carousel: swipe or drag</p>

    <q-carousel class="text-white">
      <div slot="slide" class="bg-primary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, pariatur! Slide 1
      </div>
      <div slot="slide" class="bg-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, pariatur! Slide 2
      </div>
      <div slot="slide" class="bg-tertiary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, pariatur! Slide 3
      </div>
    </q-carousel>


    <!-- Change Color With Each Slide -->

    <p class="caption">Arrows, Dots and Fullscreen Controls</p>
    <q-carousel arrows dots fullscreen class="text-white" @slide="moveSlide">
      <div slot="slide" :class="slideClass" v-for="n in 12">
        Slide {{n}}
      </div>
    </q-carousel>




    <p class="caption">Centered content, infinite scroll, with controls</p>
    <q-carousel infinite arrows dots class="text-white">
      <div slot="slide" class="bg-primary centered">
        Slide 1
      </div>
      <div slot="slide" class="bg-secondary centered">
        Slide 2
      </div>
      <div slot="slide" class="bg-tertiary centered">
        Slide 3
      </div>
    </q-carousel>

    <p class="caption">Infinite Scroll with Autoplay</p>
    <q-carousel infinite autoplay arrows dots class="text-white">
      <div slot="slide" class="bg-primary centered">
        Slide 1
      </div>
      <div slot="slide" class="bg-secondary centered">
        Slide 2
      </div>
      <div slot="slide" class="bg-tertiary centered">
        Slide 3
      </div>
    </q-carousel>

    <p class="caption">Custom Actions and Controls</p>
    <q-carousel arrows dots actions class="text-white">
      <div slot="slide" class="bg-primary" v-for="n in 15">
        Slide # {{n}}
      </div>
      <q-icon slot="action" name="camera_enhance" />
      <q-icon slot="action" name="bookmark_border" />
      <q-icon slot="action" name="add_shopping_cart" />
    </q-carousel>

    <p class="caption">Modal Carousel</p>
    <q-btn color="secondary" class="glossy" @click="$refs.modal.open()">Launch</q-btn>
    <q-modal ref="modal" maximized>
      <q-carousel infinite arrows dots class="text-white full-height">
        <div slot="slide" class="bg-primary centered" v-for="n in 5">
          <h2>Slide {{n}}</h2>
          <q-btn color="dark" class="glossy" @click="$refs.modal.close()">Close Me</q-btn>
        </div>
      </q-carousel>
    </q-modal>



  </div>
</template>

<script>
  import { QCarousel, QModal } from 'quasar'
  export default {
    components: {
      QCarousel,
      QModal
    },
    data: () => ({
      // slideClass: 'bg-primary'
      slideClass: 'bg-primary'
    }),
    methods: {
      // moveSlide (index, direction) {
      //   if (index % 3 === 0) {
      //     this.slideClass = 'bg-primary'
      //   }
      //   else if (index % 3 === 1) {
      //     this.slideClass = 'bg-secondary'
      //   }
      //   else {
      //     this.slideClass = 'bg-tertiary'
      //   }
      // }
      moveSlide (index, direction) {
        switch (index % 3) {
          case 0:
            this.slideClass = 'bg-primary'
            break
          case 1:
            this.slideClass = 'bg-secondary'
            break
          default:
            this.slideClass = 'bg-tertiary'
        }
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
