<template>
  <div class="layout-padding">
    <p class="text-bold">Toast</p>

    <p>Basic Toast</p>
    <p class="group">
      <q-btn color="primary" @click="basicToast">Default Toast</q-btn>

      <q-btn color="primary" @click="basicToastWithLongMessage">Default Toast with Long Message</q-btn>
    </p>

    <hr><hr>
    <br><br>

    <p>Types of Toasts</p>
    <p class="group">
      <q-btn v-for="type in types" :key="type" :color="type" @click="toastWithType(type)">
        {{ capitalize(type) }} Toast
      </q-btn>
    </p>

    <hr><hr>
    <br><br>

    <p>With Icon</p>
    <q-btn color="primary" @click="toastWithIcon">
      Toast With Icon
    </q-btn>

    <hr><hr>
    <br><br>


    <p>With Button</p>
    <q-btn color="secondary" @click="toastWithButton">
      Toast With Button
    </q-btn>

    <hr><hr>
    <br><br>

    <p>With Image</p>
    <q-btn color="indigo" @click="toastWithImage">
      Toast With Image
    </q-btn>

    <hr><hr>
    <br><br>

    <p>With Styling</p>
    <q-btn color="red-5" @click="toastWithStyle">
      Toast With Style
    </q-btn>

    <hr><hr>
    <br><br>

    <p>Toast with Style and Button</p>
    <q-btn color="purple" @click="toastWithButtonAndStyle">
      Styled with Button
    </q-btn>

    <hr><hr>
    <br><br>

    <p>Toast with Timeout</p>
    <q-btn color="yellow" @click="toastWithTimeout">
      6 Second Timeout
    </q-btn>

    <hr><hr>
    <br><br>

    <p>Toast with OnDismiss</p>
    <small>Show dialog once dismissed</small>
    <br>
    <q-btn color="orange" @click="toastWithOnDismiss">
      Toast with On Dismiss
    </q-btn>

    <hr><hr>
    <br><br>

    <p>Simultaneous Multiple Timeouts</p>
    <q-btn color="green" @click="showMultipleToasts">
      Multiple Toasts
    </q-btn>

  </div>
</template>

<script>
  import { Toast, Dialog } from 'quasar'
  export default {
    data: () => ({
      types: ['positive', 'negative', 'info', 'warning'],
      isShown: false
    }),
    methods: {
      capitalize (msg) {
        return msg.charAt(0).toUpperCase() + msg.slice(1)
      },
      basicToast () {
        Toast.create('Lorem Ipsum!')
      },
      basicToastWithLongMessage () {
        Toast.create('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, officiis.')
      },
      toastWithType (type) {
        Toast.create[type]({
          html: type.charAt(0).toUpperCase() + type.slice(1) + ' toast'
        })
      },
      toastWithIcon () {
        Toast.create({
          html: 'Toast with Icon.',
          icon: 'camera_enhance'
        })
      },
      toastWithButton () {
        Toast.create({
          html: 'Toast with Button',
          button: {
            label: 'Undo',
            color: 'orange',
            handler () {
              Toast.create('Undone!')
            }
          }
        })
      },
      toastWithImage () {
        Toast.create({
          html: 'Toast with Image',
          image: require('../../../assets/guy-avatar.png')
        })
      },
      toastWithStyle () {
        Toast.create({
          html: 'Styled Toast',
          color: 'white',
          bgColor: '#ef5350'
        })
      },
      toastWithButtonAndStyle () {
        Toast.create({
          html: 'With Style and Button',
          color: 'black',
          bgColor: 'orange',
          button: {
            label: 'Show Me More',
            color: '#555',
            handler () {
              Toast.create('But, but... I just showed you!!')
            }
          }
        })
      },
      toastWithTimeout () {
        Toast.create({
          html: 'Toast with Timeout',
          timeout: 6000
        })
      },
      toastWithOnDismiss () {
        Toast.create({
          html: 'Showing dialog after toast is dismissed.',
          timeout: 5000,
          onDismiss () {
            Dialog.create({
              title: 'Dismissed',
              message: 'Toast was just dismissed!',
              buttons: ['OK']
            })
          }
        })
      },
      showMultipleToasts () {
        for (let i = 1; i <= 3; i++) {
          Toast.create('Showing Toast #' + i)
        }
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
