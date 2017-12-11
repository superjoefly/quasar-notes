<template>
  <div class="layout-padding">
    <p class="text-bold">Loading</p>

    <p class="caption">Notify users that a process is running. We can also use the <b>progress</b> Dialog type.</p>

    <div class="group">
      <q-btn push color="light" class="text-dark" @click="noMessage">No Message</q-btn>
      <q-btn push color="primary" @click="withMessage">With Message</q-btn>
    </div>

    <p class="caption">Using custom spinner, colors and size:</p>

    <q-btn push color="light" class="text-dark" @click="customLoading">
      Show Custom Loading
    </q-btn>

    <p class="caption">Change Display Message</p>
    <q-btn push color="secondary" @click="changeMessage">Show & Change</q-btn>

    <br><br>
    <hr><hr>

    <p class="caption">Inner Loading - add progress animation within a component...</p>

    <q-btn color="primary" @click="showTextLoading">Show Text Loading</q-btn>

    <div class="row justify-center" style="margin-top: 40px;">
      <q-card style="width: 300px; height: 150px" color="grey-3" class="text-dark relative-position">
        <q-card-title>Lorem Ipsum</q-card-title>
        <q-card-main>
          <q-transition appear enter="fadeIn" leave="fadeOut">
            <div v-show="showReturnData">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dicta totam consequuntur, quae rem delectus?
            </div>
          </q-transition>
        </q-card-main>
        <q-inner-loading :visible="visible">
          <q-spinner-gears size="50px" color="orange" />
        </q-inner-loading>
      </q-card>
    </div>


  </div>
</template>

<script>
  import { Loading, QSpinnerFacebook, QSpinnerGears, QBtn, QInnerLoading, QTransition, QCard, QCardTitle, QCardMain } from 'quasar'

  import 'quasar-extras/animate/fadeIn.css'
  import 'quasar-extras/animate/fadeOut.css'

  export default {
    components: {
      QSpinnerFacebook, QSpinnerGears, QBtn, QInnerLoading, QTransition, QCard, QCardTitle, QCardMain
    },
    data: () => ({
      visible: false,
      showReturnData: false
    }),
    methods: {
      show (options) {
        Loading.show(options)

        setTimeout(() => {
          Loading.hide()
        }, 3000)
      },
      noMessage () {
        this.show()
      },
      withMessage () {
        this.show({message: 'This is a message...'})
      },
      customLoading () {
        this.show({
          spinner: QSpinnerFacebook,
          spinnerColor: 'amber',
          spinnerSize: 140,
          message: 'Processing...',
          messageColor: 'orange'
        })
      },
      changeMessage () {
        Loading.show({message: 'First message...will change in 3 seconds'})

        setTimeout(() => {
          this.show({
            spinner: QSpinnerGears,
            spinnerColor: 'red',
            message: 'Updated Message :-)'
          })
        }, 3000)
      },
      showTextLoading () {
        this.shown()
      },
      shown () {
        this.visible = true
        this.showReturnData = false

        setTimeout(() => {
          this.visible = false
          this.showReturnData = true
        }, 3000)
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
