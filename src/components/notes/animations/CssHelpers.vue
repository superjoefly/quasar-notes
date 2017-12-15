<template>

  <div class="layout-padding">
    <p class="caption">Animation CSS Helper Classes</p>

    <q-card style="margin-top: 25px;">
      <q-card-title class="bg-primary text-center">
        <q-btn push color="orange" @click="show = !show">Toggle Visibility</q-btn>
      </q-card-title>
      <q-card-main class="text-center" style="height: 300px;">
        <q-select filter v-model="animation" :options="animationOptions" stack-label="CSS Helper Classes" />
        <img src="~assets/linux-avatar.png" style="height: 150px; width: 150px; margin: 25px;" :class="animation" v-if="show">
      </q-card-main>
    </q-card>
  </div>

</template>

<script>
  const animations = [
    'animate-spin',
    'animate-spin-reverse',
    'animate-blink',
    'animate-pop',
    'animate-scale',
    'animate-fade',
    'animate-bounce'
  ]
  function generateOptions (name) {
    return {
      label: name,
      value: name
    }
  }

  import { QCard, QCardTitle, QCardMain, QSelect } from 'quasar'

  export default {
    components: {
      QCard, QCardTitle, QCardMain, QSelect
    },
    data: () => ({
      show: true,
      animation: 'animate-spin',
      animationOptions: animations.map(generateOptions)
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
