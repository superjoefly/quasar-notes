<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="text-bold">Progress (QProgress)</p>

      <p class="caption">Determinate State</p>
      <q-btn small color="primary" @click="randomize">Randomize</q-btn>
      <q-progress :percentage="progress" />
      <q-progress :percentage="progress" color="positive" />
      <q-progress :percentage="progress" color="info" />
      <q-progress :percentage="progress" color="warning" />
      <q-progress :percentage="progress" color="secondary" />
      <q-progress :percentage="progress" color="tertiary" />
      <q-progress :percentage="progress" color="dark" />
      <q-progress :percentage="progress" color="negative" />

      <p class="caption">Stripe</p>
      <q-progress :percentage="progress" stripe color="positive" />
      <q-progress :percentage="progress" stripe color="info" />
      <q-progress :percentage="progress" stripe color="warning" />

      <p class="caption">Stripe and Animate</p>
      <q-progress :percentage="progress" stripe animate color="secondary" />

      <p class="text-bold">Buffering</p>
      <q-btn small color="primary" @click="randomizeBuffer">Randomize Buffer</q-btn>
      <q-progress :percentage="progressBuffer" :buffer="buffer" />
      <q-progress :percentage="progressBuffer" stripe :buffer="buffer" />
      <q-progress :percentage="progressBuffer" stripe animate color="orange" :buffer="buffer" />

      <p class="caption">Indeterminate State</p>
      <q-progress indeterminate />
      <q-progress indeterminate color="positive" />
      <q-progress indeterminate color="warning" />
      <q-progress indeterminate color="negative" />
      <q-progress indeterminate color="dark" />

      <p class="caption">Specify Height</p>
      <q-progress :percentage="progress" stripe animate style="height: 45px;" />
    </div>
  </div>
</template>

<script>
  import { QProgress } from 'quasar'

  export default {
    components: {
      QProgress
    },
    data: () => ({
      progress: 67,
      progressBuffer: 45,
      buffer: 17
    }),
    methods: {
      randomize () {
        // random number between 1 and 100
        this.progress = Math.round(Math.random() * 100)
      },
      randomizeBuffer () {
        // random number between 1 and 51
        this.progressBuffer = Math.round(Math.random() * 51)
        // random number between 1 and 47
        this.buffer = Math.round(Math.random() * 47)
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>
.q-btn + .q-progress
  margin-top 20px
.q-progress + .q-progress
  margin-top 10px
</style>
