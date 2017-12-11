<template>
  <div class="layout-padding row justify-center">
    <q-ajax-bar ref="bar" :position="position" :reverse="reverse" :size="computedSize" color="yellow" />
    <div style="width: 500px; max-width: 90vw;">

      <p class="text-bold">AJAX Bar</p>
      <p class="caption">Captures Ajax Calls Automatically</p>

      <q-card style="margin-top: 25px;">
        <q-card-title class="bg-primary text-center">
          <q-btn push color="orange" @click="trigger">Trigger Event</q-btn>
        </q-card-title>

        <p class="caption text-center">
          Try some combinations...
          <br>
          Color can also be customized through 'color' prop...
        </p>

        <q-card-main>
          <q-field label="Position">
            <div class="flex" style="margin: -5px;">
              <div class="column group">
                <q-radio v-model="position" val="top" label="Top" />
                <q-radio v-model="position" val="bottom" label="Bottom" />
              </div>
              <div class="column group">
                <q-radio v-model="position" val="right" label="Right" />
                <q-radio v-model="position" val="left" label="Left" />
              </div>
            </div>
          </q-field>

          <q-field label="Reverse?">
            <q-checkbox v-model="reverse" label="Reverse Direction" />
          </q-field>

          <q-field label="Size">
            <q-slider v-model="size" :min="2" :max="20" label-always :label-value="`${size}px`" />
          </q-field>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
  import { QAjaxBar, QBtn, QInput, QCheckbox, QRadio, QField, QSlider, QCard, QCardTitle, QCardMain } from 'quasar'
  export default {
    components: {
      QAjaxBar, QBtn, QInput, QCheckbox, QRadio, QField, QSlider, QCard, QCardTitle, QCardMain
    },
    data: () => ({
      position: 'bottom',
      reverse: false,
      size: 8,
      timeouts: []
    }),
    methods: {
      trigger () {
        this.$refs.bar.start()

        setTimeout(() => {
          if (this.$refs.bar) {
            this.$refs.bar.stop()
          }
        }, 6000)
      }
    },
    computed: {
      computedSize () {
        return this.size + 'px'
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
