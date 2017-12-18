<template>
  <div class="layout-padding">

    <p class="text-bold">Buttons</p>

    <p>Button with Icon and Text</p>
    <q-btn icon="menu">Menu</q-btn>

    <br><br>

    <p>Button with only Icon</p>
    <q-btn>
      <q-icon name="map"></q-icon>
    </q-btn>

    <br><br>

    <p>Standard Round Button</p>
    <q-btn round color="secondary" icon="card_giftcard"></q-btn>
    <!-- or -->
    <q-btn round color="secondary">
      <q-icon name="card_giftcard" />
    </q-btn>

    <br><br>

    <p>Block Buttons</p>
    <q-btn color="primary" class="block" icon="alarm">Block</q-btn>
    <br><br>
    <q-btn color="white" icon="mail" class="bg-green block">Block</q-btn>

    <br><br>

    <p>Full width button</p>
    <q-btn color="primary" class="full-width">Full-width</q-btn>
    <br><br>
    <q-btn color="secondary" class="full-width">Full-width</q-btn>

    <br><br>

    <p>Small Primary Button</p>
    <q-btn icon="edit" color="primary" small>Edit</q-btn>

    <br><br>

    <p>Loading State Buttons</p>
    <q-btn loader color="primary" @click="testMethod">
      Label
    </q-btn>

    <q-btn v-model="submit" loader round push color="primary" @click="testMethod">
      Test
      <q-spinner-oval slot="loading" />
    </q-btn>

    <br><br>
    <hr><hr>

    <p class="text-bold">More Examples</p>

    <q-btn icon="mail" color="primary">
      Label
    </q-btn>

    <br><br>

    <q-btn icon-right="mail" color="teal">
      Label
    </q-btn>

    <br><br>
    <hr><hr>

    <p class="text-bold">Sizes</p>

    <q-btn color="primary" small>Small</q-btn>

    <br><br>

    <q-btn color="primary" big>Big</q-btn>

    <br><br>
    <hr><hr>

    <p class="text-bold">Colors</p>

    <q-btn color="primary">Primary</q-btn>
    <br><br>
    <q-btn color="amber">Amber</q-btn>
    <br><br>
    <q-btn style="background: #FF0080; color: white">Fuchsia</q-btn>

    <br><br>
    <hr><hr>

    <p class="text-bold">Style Types</p>

    <q-btn outline color="teal">Outlined</q-btn>

    <br><br>

    <q-btn rounded push color="yellow">Rounded Push</q-btn>

    <br><br>

    <q-btn glossy color="orange">Glossy</q-btn>

    <br><br>

    <p>Rectangular with Icon and no Text</p>

    <q-btn>
      <q-icon name="mail" color="teal" />
    </q-btn>

    <br><br>
    <hr><hr>

    <p class="text-bold">Another Loader Example</p>

    <q-btn loader @click="testMethod">Test
      <span slot="loading">Testing...</span>
    </q-btn>

    <br><br>
    <hr><hr>

    <p class="text-bold">Using different spinners:</p>
    <p>While in loading state, the button content will be replaced by whatever the "loading" slot contains...</p>

    <p>q-spinner-*name*: (‘audio’, ‘ball’, ‘bars’, ‘circles’, ‘comment’, ‘cube’, ‘dots’, ‘grid’, ‘hearts’, ‘ios’, ‘mat’, ‘oval’, ‘puff’, ‘rings’, ‘tail’, ‘facebook’, ‘gears’, ‘hourglass’, ‘infinity’, ‘pie’, ‘radio’)</p>

    <q-btn color="green" @click="testMethod">
      <q-icon name="music note" />
      <q-spinner-audio slot="loading" color="white" :size="30" />
    </q-btn>

    <br><br>

    <q-btn color="secondary" @click="testMethod">
      <q-icon name="message" />
      <q-spinner-gears slot="loading" color="white" :size="30" />
    </q-btn>

    <hr><hr>
    <br><br>

    <p class="text-bold">Progress Property</p>

    <q-btn loader :percentage="percentage" color="primary" @click="computePI">
      Compute PI
      <span slot="loading">
        <q-spinner-gears class="on-left" />
        <!-- Will say computing during loading state -->
        Computing...
      </span>
    </q-btn>
    <br><br>
    <p class="text-bold">{{percentage}}</p>

    <hr><hr>
    <br><br>

    <p class="text-bold">Submit Button Example</p>
    <q-input v-model="test" @keyup.enter="simulateSubmit" />
    <q-btn v-model="submit" loader @click="simulateSubmit">Save
      <q-spinner-grid slot="loading" />
    </q-btn>
    <br><br>
    <p>{{ message }}</p>

    <hr><hr>
    <br><br>

    <p class="text-bold">Disable Buttons</p>

    <q-btn style="color: red;" disabled>Disabled</q-btn>
    <br><br>
    <q-btn color="amber" :disabled="sent">Send</q-btn>

    <br><br>
    <hr><hr>

    <p class="text-bold">Router Buttons</p>

    <q-btn @click="$router.push('/path/to/route')" color="primary" no-caps>$router.push('/path/to/route')</q-btn>

  </div>
</template>

<script>
  export default {
    data: () => ({
      submit: false,
      percentage: 0,
      test: '',
      message: '',
      sent: true
    }),
    methods: {
      testMethod (event, done) {
        // console.log(event)
        this.submit = true
        setTimeout(() => {
          done()
          alert('Done Loading!')
        }, 3000)
      },
      computePI (event, done) {
        this.percentage = 0
        // simulate progress
        this.interval = setInterval(() => {
          this.percentage += Math.floor(Math.random() * 8 + 10)

          // When were done
          if (this.percentage >= 100) {
            this.percentage = 100
            clearInterval(this.interval)
            // Always call done
            done()
          }
        }, 700)
      },
      simulateSubmit () {
        this.submit = true
        setTimeout(() => {
          this.submit = false
          this.message = 'Form Submitted Successfully!'
        }, 3000)
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
