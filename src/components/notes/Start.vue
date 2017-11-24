<template>
  <div class="layout-padding">
    <div>
      <p class="text-bold">EventBus, Vuex and Other</p>

      <hr>

      <!-- EVENT BUS -->
      <p class="text-bold">Vuejs Event Bus - Sibling Component Communication</p>
      <app-clicker></app-clicker>
      <app-clicks></app-clicks>

      <hr>

      <!-- VUEX State Management -->
      <p class="text-bold">Vuex - State Management</p>
      <q-btn flat class="bg-primary text-white" @click="toCaps">Make Caps</q-btn>
      <p>{{ name }}</p>
      <p>{{ age }}</p>

      <hr>

      <p class="text-bold">Style and Identity</p>
      <p>See docs for list of colors available.</p>
        <br />
      <p class="text-bold">Text Color:</p>
      <p class="text-primary">Primary</p>
      <p class="text-secondary">Secondary</p>
      <p class="text-tertiary">Tertiary</p>

      <p class="text-bold">Background Color:</p>
      <p class="bg-purple">Purple</p>
      <p class="bg-cyan">Cyan</p>
      <p class="bg-teal">Teal</p>
        <br>
      <p>There are several ways we can style our app:</p>
      <ul>
        <li>Use Stylus Variables in Vue Files</li>
  <!-- Code -->
  <pre style="overflow: auto">
    <code>
      style lang="stylus"
      @import '~variables'
      span
        color $red-1
        background-color $grey-8
    </code>
  </pre>
        <li>Add variable declarations in: src/themes/app.variables.styl</li>
      </ul>

      <hr>



      <!-- ICONS -->
      <p class="text-bold">Icons:</p>
      <!-- Material -->
      <q-icon name="thumb_up">
        <!-- Add tooltip -->
        <q-tooltip>Some Tooltip</q-tooltip>
      </q-icon>

      <!-- Ionicons -->
      <q-icon name="ion-heart"></q-icon>

      <!-- Fontawesome -->
      <q-icon name="fa-id-card"></q-icon>

      <!-- IcoMoon -->
      <q-icon name="icon-chrome"></q-icon>

      <!-- To specify platform -->
      <q-icon mat="settings" ios="ion-ios-gear-outline"></q-icon>

      <!-- Specify platform when adding icon to component -->
      <q-item-side
        :icon="$q.theme === 'mat' ? 'settings' : 'ion-ios-gear-outline'"
      />

      <q-icon name="mail" class="text-red"></q-icon>

      <q-icon name="alarm" color="green" size="2rem"></q-icon>

      <q-icon name="home" color="orange-8" size="24px"></q-icon>

      <hr>




      <!-- TYPOGRAPHY -->
      <p class="text-bold">Typography:</p>

      <!-- Token -->
      <span class="token">Token</span>

      <!-- Size -->
      <small>small</small>
      <big>Big</big>

      <!-- Sub and Sup -->
      <sub>Subtext</sub>
      <sup>Supertext</sup>

      <!-- Paragraphs -->
      <p>Default Paragraph</p>
      <p class="light-paragraph">Light Paragraph</p>
      <p class="thin-paragraph">Thin Paragraph</p>

      <!-- Bold and Italic -->
      <p class="text-bold">Bold text</p>
      <strong>Strong text</strong>
      <p class="text-italic">Italic</p>
      <em>Emphasized</em>

      <!-- Quotes -->
      <div class="quote">
        This is a quote
      </div>

      <div class="quote text-right">
        Quote to right size
      </div>

      <!-- Blockquotes -->
      <blockquote class="text-right">
        <p>To thine own self be true</p>
        <small>This is a quote by <cite title="superjoefly">Superjoefly</cite></small>
      </blockquote>

      <!-- Definition Lists -->
      <dl>
        <dt>Description</dt>
        <dd>Terms 1</dd>
        <dt>Description</dt>
        <dd>Terms 2</dd>
      </dl>

      <dl class="horizontal">
        <dt>Description</dt>
        <dd>Terms 1</dd>
        <dt>Description</dt>
        <dd>Terms 2</dd>
      </dl>

      <p>See CSS Helper Classes for Full List
        <a href="http://quasar-framework.org/components/typography.html">Typography</a>
      </p>


      <hr>



      <!-- Ripple -->
      <!-- Enable/Disable Ripple using Data Prop -->
      <p class="text-bold">Ripple Effect</p>
      <q-checkbox v-model="rippleEnabled" label="EnableRipples"></q-checkbox>

      <div class="relative-position" v-ripple="rippleEnabled">
        <p>Test Ripple (Click Me!)</p>
      </div>

    </div>
  </div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex'

import Clicker from '../clicker/Clicker'
import Clicks from '../clicker/Clicks'
export default {
  data () {
    return {
      rippleEnabled: true
    }
  },
  components: {
    'app-clicker': Clicker,
    'app-clicks': Clicks
  },
  methods: {
    ...mapActions([
      'toCaps'
    ])
  },
  computed: {
    ...mapGetters([
      'name',
      'age'
    ])
  }
}
</script>
<style lang="stylus" scoped>
  @import '~variables'
  .text-bold
    font-size 25px
</style>
