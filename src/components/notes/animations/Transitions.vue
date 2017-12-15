<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="text-caption">Transitions</p>

      <q-card style="margin-top: 25px;">
        <q-card-title class="bg-primary text-center">
          <q-btn push color="orange" @click="show = !show">Toggle</q-btn>
        </q-card-title>
        <q-card-main class="row">
          <q-select class="col-xs-12 col-sm-6" filter v-model="enter" :options="enterOptions" stack-label="CSS Enter Class" />
          <q-select class="col-xs-12 col-sm-6" filter v-model="leave" :options="leaveOptions" stack-label="CSS Leave Class" />
        </q-card-main>
      </q-card>

      <q-card style="margin-top: 25px;" class="overflow-hidden">
        <q-card-title class="text-center">
          Single
        </q-card-title>
        <q-card-main>
          <!-- Single -->
          <q-transition appear :enter="enter" :leave="leave" :disable="disable">
            <div v-if="show" v-html="loremipsum" />
          </q-transition>
        </q-card-main>
      </q-card>

      <q-card style="margin-top: 25px;" class="overflow-hidden">
        <q-card-title class="text-center">
          Group
        </q-card-title>
        <q-card-main>
          <!-- Group -->
          <q-transition group :enter="enter" :leave="leave" :disable="disable" class="group">
            <div v-if="show" v-for="n in 3" :key="n" v-html="loremipsum" />
          </q-transition>
        </q-card-main>
      </q-card>

    </div>
  </div>
</template>

<script>
  // Don't forget to import in main.js:
  // import 'quasar-extras/animate'
  import { generalAnimations, inAnimations, outAnimations } from 'quasar-extras/animate/animate-list.js'
  console.log(generalAnimations, inAnimations, outAnimations)
  import { QCard, QCardTitle, QCardMain, QSelect, QTransition, QBtn } from 'quasar'

  function alphabetically (a, b) {
    return a.localeCompare(b)
  }
  function generateOptions (name) {
    return {
      label: name,
      value: name
    }
  }

  const enter = generalAnimations.concat(inAnimations).sort(alphabetically)
  console.log(enter)

  const leave = generalAnimations.concat(outAnimations).sort(alphabetically)
  console.log(leave)

  export default {
    components: {
      QCard, QCardTitle, QCardMain, QSelect, QTransition, QBtn
    },
    data: () => ({
      enterOptions: enter.map(generateOptions),
      leaveOptions: leave.map(generateOptions),
      enter: 'bounceInLeft',
      leave: 'bounceOutRight',
      show: true,
      disable: false,
      loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }),
    methods: {

    },
    computed: {

    },
    mounted () {
      console.log(this.enterOptions)
      console.log(this.leaveOptions)
    }
  }
</script>

<style lang="stylus" scoped>

</style>
