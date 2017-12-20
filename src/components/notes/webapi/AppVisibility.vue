<template>
  <div class="layout-padding">
    <p class="text-bold">App Visibility</p>
    <p class="caption">View results in console...</p>

    <p class="text-bold">
      <span class="desktop-only">Click</span>
      <span class="mobile-only">Tap</span>
      to switch between default and fullscreen mode...
    </p>

    <p>
      <q-btn color="secondary" @click="toggleFullscreen">
        <q-icon class="on-left" name="zoom_out_map" />
        Toggle Fullscreen
      </q-btn>
    </p>

    <p class="caption">On some phones, this will have little effect...</p>

    <pre><code class="language-js">
      import { AppVisibility, AppFullscreen } from 'quasar'

      // Check if App is Visible
      console.log(AppVisibility.isVisible()) // true

      // Check if App is Full Screen
      console.log(AppFullscreen.isActive()) // undefined

      // Request Fullscreen Mode
      AppFullscreen.request()

      // Exit Fullscreen Mode
      AppFullscreen.exit()

      // Toggle Fullscreen Mode
      AppFullScreen.toggle()
    </code></pre>
  </div>
</template>

<script>
  import { AppVisibility, AppFullscreen } from 'quasar'

  // Check if App is Visible
  console.log(AppVisibility.isVisible()) // true

  // // Check if App is Full Screen
  // console.log(AppFullscreen.isActive()) // undefined
  //
  // // Request Fullscreen Mode
  // AppFullscreen.request()
  //
  // // Exit Fullscreen Mode
  // AppFullscreen.exit()
  //
  // // Toggle Fullscreen Mode
  // AppFullScreen.toggle()

  export default {
    data: () => ({

    }),
    methods: {
      toggleFullscreen () {
        AppFullscreen.toggle()
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
