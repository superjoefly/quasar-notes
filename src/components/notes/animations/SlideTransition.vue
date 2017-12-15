<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Slide Transition</p>

      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on the Toggle below to see the transition in action...
      </p>
      <p>
        <q-toggle v-model="visible" label="Visible Image" />

        <q-slide-transition>
          <p v-show="visible" style="margin: 0; max-width: 500px">
            <img src="~assets/quasar-logo-full.svg" class="responsive">
          </p>
        </q-slide-transition>
      </p>
    </div>
  </div>
</template>

<script>
  import { QSlideTransition, QToggle } from 'quasar'
  export default {
    components: {
      QSlideTransition, QToggle
    },
    data: () => ({
      visible: true
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
