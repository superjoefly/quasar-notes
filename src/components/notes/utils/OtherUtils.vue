<template>
  <div class="layout-padding">
    <p class="text-bold">Other Utils</p>

    <p class="caption">Open External URL:</p>
    <q-btn flat color="orange" @click="goToGoogle">Go To Google</q-btn>

    <hr><hr>

    <p class="caption">Divs Added for Scrolling:</p>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ratione nobis autem adipisci doloribus excepturi unde tempore dolorem porro, itaque eveniet officia ducimus dignissimos commodi doloremque explicabo accusamus, harum culpa.
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ratione nobis autem adipisci doloribus excepturi unde tempore dolorem porro, itaque eveniet officia ducimus dignissimos commodi doloremque explicabo accusamus, harum culpa.
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ratione nobis autem adipisci doloribus excepturi unde tempore dolorem porro, itaque eveniet officia ducimus dignissimos commodi doloremque explicabo accusamus, harum culpa.
    </div>

    <hr><hr>
    <br><br>

    <p class="caption">Be sure to view code and results in console...</p>

    <div style="height: 100px; width: 100px; background-color: purple" id="myDiv"></div>
  </div>
</template>

<script>
  /*eslint-disable*/ // Disable Eslint
  import { openURL, debounce, frameDebounce, throttle, extend, uid, event, colors, filter } from 'quasar'

  // DEBOUNCE - function only called after a specific amount of time has passed
  window.addEventListener('scroll', debounce(function () {
    console.log('You Scrolled!')
  }, 1000, true))
  // pass 'immediate' to trigger the function on the leading edge instead of the trailing edge

  // FRAME DEBOUNCE - delays calling function until next browser frame is scheduled to run - (read about requestAnimationFrame)
  window.addEventListener('resize', frameDebounce(function () {
    console.log('You resized the window!')
  }))

  // THROTTLE Function - enforces a maximum number of times a function is called over time
  window.addEventListener('scroll', throttle(function () {
    console.log('Throttle!')
  }, 1000)) // execute at most once every 1 second

  //////////////

  // (DEEP) COPY OBJECTS
  let obj1 = {
    apple: 0,
    banana: { weight: 52, price: 100 },
    cherry: 97
  }

  let obj2 = {
    banana: { price: 200 },
    durian: 100
  }

  // Merge obj2 into obj1
  let newObj = extend(obj1, obj2)

  // Merge obj2 into obj1 recursively
  // let newObj = extend(true, obj1, obj2)

  // Merge obj1 and obj2 without modifying obj1
  // let newObj = extend({}, obj1, obj2)

  console.log(newObj)

  //////////////////

  // GENERATE UID
  let uniqueId = uid()
  console.log(uniqueId)
  // 8504f12c-a02c-8e7e-70f1-323022763b37

  /////////////////

  // EVENT HANDLING 'event' on a DOM event handler (below)

  /////////////////

  // CHANGE COLORS from RGB to Hex and vice-versa
  console.log(colors.rgbToHex(85, 85, 1)) // 555501
  console.log(colors.hexToRgb('#55a532')) // [85, 165, 50]

  /////////////////

  // FILTER ARRAY
  let data = [
    {
      fee: 5,
      desc: 'Wash the dishes'
    },
    {
      fee: 10,
      desc: 'Walk the dog'
    },
    {
      fee: 12,
      desc: 'Vacuum'
    }
  ]

  console.log(filter('5', {field: 'fee', list: data}))
  // {fee: 5, desc: "Wash the dishes"}

  ////////////////

  export default {
    data: () => ({

    }),
    methods: {
      goToGoogle () {
        console.log(openURL)
        openURL('http://google.com')
      }
    },
    computed: {
      myDiv () {
        return document.getElementById('myDiv')
      }
    },
    mounted () {
      this.myDiv.addEventListener('click', evt => {
        // Returns boolean
        console.log(event.rightClick(evt)) // false
        // Returns position of event
        console.log(event.position(evt)) // ex: {top: 288, left: 54}
        // Returns target-element
        console.log(event.targetElement(evt))
      })
    }
  }
</script>

<style lang="stylus" scoped>

</style>
