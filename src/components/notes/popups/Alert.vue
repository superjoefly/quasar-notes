<template>
  <div class="layout-padding">
    <p class="text-bold">Alerts with Animations</p>

    <q-card>
      <q-card-main class="group">
        <q-alert color="brown" icon="cloud" enter="bounceInLeft" leave="bounceOutRight" appear v-model="visible" dismissible>Lorem Ipsum!</q-alert>

        <q-alert type="negative" ref="destroyableAlert" enter="bounceInRight" leave="bounceOutLeft" v-model="visible2" dismissible :actions="[{label: 'Snooze', handler() {}}]">
          Lorem ipsum dolor sit amet.
        </q-alert>
      </q-card-main>
      <template v-if="!visible || !visible2">
        <q-card-separator />
        <q-card-actions>
          <q-btn flat @click="reset">Reset</q-btn>
        </q-card-actions>
      </template>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Alerts as Methods</p>
    <div class="row group">
      <div>
        <q-btn round small color="secondary" @click="alertAsMethod('top-left')">
          <q-icon name="arrow_back" class="rotate-45" />
        </q-btn>
      </div>
      <div>
        <q-btn round small color="tertiary" @click="alertAsMethod('top-center')">
          <q-icon name="arrow_upward" />
        </q-btn>
      </div>
      <div>
        <q-btn round small color="orange" @click="alertAsMethod('bottom')">
          <q-icon name="arrow_downward" />
        </q-btn>
      </div>
      <div>
        <q-btn round small color="green" @click="alertAsMethod('top-right')">
          <q-icon name="arrow_upward" class="rotate-45" />
        </q-btn>
      </div>
    </div>

    <hr><hr>
    <br><br>

    <p>More Examples</p>

    <p>Dismissible</p>
    <q-alert v-for="type in ['positive', 'info', 'negative', 'warning']" :key="type" :color="type" dismissible style="margin-bottom: 1.5rem">
      Lorem ipsum dolor sit amet.
    </q-alert>

    <hr>

    <p>Non-Dismissible</p>
    <q-alert v-for="type in ['positive', 'info', 'negative', 'warning']" :key="type" :color="type" style="margin-bottom: 1.5rem">
      Lorem ipsum dolor sit amet.
    </q-alert>


  </div>
</template>

<script>
  import {
    Alert, QAlert, QCard, QCardMain, QCardActions, QCardSeparator
  } from 'quasar'

  // Import Animations
  import 'quasar-extras/animate/bounceInDown.css'
  import 'quasar-extras/animate/bounceOutUp.css'
  import 'quasar-extras/animate/bounceInUp.css'
  import 'quasar-extras/animate/bounceOutDown.css'
  import 'quasar-extras/animate/bounceInLeft.css'
  import 'quasar-extras/animate/bounceOutLeft.css'
  import 'quasar-extras/animate/bounceInRight.css'
  import 'quasar-extras/animate/bounceOutRight.css'

  // Define Alerts
  const alerts = [
    { color: 'error', html: 'Danger!', icon: 'report_problem' },
    { color: 'warning', html: 'Warning!', icon: 'warning' },
    { color: 'amber', html: 'Wow!', icon: 'thumb_up' },
    { color: 'secondary', html: 'Quasar Rocks!', icon: 'tag_faces' }
  ]

  const ani = {
    'top': ['bounceInDown', 'bounceOutUp'],
    'right': ['bounceInRight', 'bounceOutRight'],
    'left': ['bounceInLeft', 'bounceOutLeft'],
    'bottom': ['bounceInUp', 'bounceOutDown']
  }

  // Determines the animation defined in the html
  function getAnimations (pos) {
    if (pos.indexOf('left') > -1) {
      return ani.left
    }
    if (pos.indexOf('right') > -1) {
      return ani.right
    }
    if (pos.indexOf('-center') > -1) {
      return ani[pos.split('-')[0]]
    }
    return ani[pos]
  }

  export default {
    components: {
      QAlert, QCard, QCardMain, QCardActions, QCardSeparator
    },
    data: () => ({
      visible: true,
      visible2: true
    }),
    mounted () {
      // Alert.create({
      //   html: 'Warning!!!',
      //   enter: 'bounceInRight',
      //   leave: 'bounceOutRight'
      // })
    },
    methods: {
      alertAsMethod (position) {
        // Define color, html and icon
        const { color, html, icon } =
        // Choose random alert
        alerts[Math.floor(Math.random(5) * 10) % 4]
        // Define enter and leave
        const [ enter, leave ] = getAnimations(position)
        // Create the alert
        Alert.create({
          enter, leave, color, icon, html, position: position
        })
      },
      reset () {
        this.visible = true
        this.visible2 = true
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
