<template>
  <div class="layout-padding">
    <p class="caption">JS Animations</p>

    <div style="width: 500px; max-width: 90vw;">
      <q-btn push color="yellow" @click="runAnimation">Run</q-btn>
      <div id="test" style="height: 100px; width: 50px; margin-top: 25px;" class="bg-primary">test</div>
    </div>

    <p class="caption">With Carousel (SWIPE)</p>

    <q-carousel arrows dots fullscreen class="text-white" :swipe-easing="overshoot">
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

  </div>
</template>

<script>
  import { animate, easing, QCarousel } from 'quasar'

  export default {
    components: {
      QCarousel
    },
    data: () => ({
      overshoot: easing.overshoot
    }),
    methods: {
      runAnimation () {
        let el = this.testDiv
        animate.start({
          from: 0,
          to: 100,
          duration: 3000,
          easing: easing.sharp,
          apply (pos) {
            el.style.maxHeight = `${pos}px`
          },
          done () {
            console.log('DONE!')
          }
        })
      }
    },
    computed: {
      testDiv () {
        return document.getElementById('test')
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
