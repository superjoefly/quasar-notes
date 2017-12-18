<template>
  <!-- Layout Padding required to avoid vertical scrolling -->
  <div class="layout-padding">

    <p class="text-bold">Style and Identity</p>

    <p>See docs for list of available colors...</p>

    <hr><hr>

    <p class="text-bold">Text Color:</p>
    <p class="text-primary">Primary</p>
    <p class="text-secondary">Secondary</p>
    <p class="text-tertiary">Tertiary</p>

    <hr><hr>

    <p class="text-bold">Background Color:</p>
    <p class="bg-purple">Purple</p>
    <p class="bg-cyan">Cyan</p>
    <p class="bg-teal">Teal</p>

    <hr><hr>

    <p>There are several ways we can style our app:</p>
    <ul>
      <li>Use Stylus Variables in Vue Files</li>
      <li>Add variable declarations in: src/themes/app.variables.styl</li>
    </ul>

    <p class="caption">Import Stylus Variables:</p>
    <pre style="overflow: auto" class="language-js">
      <code>
        &lt;style lang="stylus" scoped&gt;<br />
          @import '~variables'<br />
          .text-bold<br />
            font-size 16px<br />
          span<br />
            color $red-1<br />
            background-color $grey-8<br />
        &lt;/style&gt;
      </code>
    </pre>

    <hr><hr>

    <!-- ICONS -->
    <p class="text-bold">Icons:</p>
    <!-- Material -->
    <p class="caption">Material (with tooltip):</p>
    <q-icon name="thumb_up">
      <!-- Add tooltip -->
      <q-tooltip>Some Tooltip</q-tooltip>
    </q-icon>

    <!-- Ionicons -->
    <p class="caption">Ionicons:</p>
    <q-icon name="ion-heart"></q-icon>

    <!-- Fontawesome -->
    <p class="caption">Font Awesome:</p>
    <q-icon name="fa-id-card"></q-icon>

    <!-- IcoMoon -->
    <p class="caption">IcoMoon:</p>
    <p>To use IcoMoon icons in your project, go to their website and create your custom icon font files and then copy them to your app’s folder. Then, import them into src/main.js</p>
    <!-- <q-icon name="icon-chrome"></q-icon> -->

    <!-- To specify platform -->
    <p class="caption">Specify Platform:</p>
    <q-icon mat="settings" ios="ion-ios-gear-outline"></q-icon>

    <!-- Specify platform when adding icon to component -->
    <p class="caption">Specify Platform on Components:</p>
    <q-item-side
      :icon="$q.theme === 'mat' ? 'settings' : 'ion-ios-gear-outline'"
    />

    <p class="caption">Coloring:</p>
    <q-icon name="mail" class="text-red"></q-icon>

    <q-icon name="alarm" color="green" size="2rem"></q-icon>

    <q-icon name="home" color="blue-8" size="24px"></q-icon>

    <hr>




    <!-- TYPOGRAPHY -->
    <p class="text-bold">Typography:</p>

    <!-- Token -->
    <span class="token">Token</span>

    <br>

    <!-- Size -->
    <small>small</small>

    <br>

    <big>Big</big>

    <br>

    <!-- Sub and Sup -->
    <sub>Subtext</sub>

    <br>

    <sup>Supertext</sup>

    <hr>

    <!-- Paragraphs -->
    <p class="caption">Paragraphs:</p>
    <p>Default Paragraph</p>
    <p class="light-paragraph">Light Paragraph</p>
    <p class="thin-paragraph">Thin Paragraph</p>

    <hr>

    <!-- Bold and Italic -->
    <p class="caption">Bold and Italic:</p>
    <p class="text-bold">Bold text</p>
    <p><strong>Strong text</strong></p>
    <p class="text-italic">Italic</p>
    <em>Emphasized</em>

    <hr>

    <!-- Quotes -->
    <p class="caption">Quotes:</p>
    <div class="quote">
      This is a quote
    </div>

    <div class="quote text-right">
      Quote to right side
    </div>

    <!-- Blockquotes -->
    <blockquote class="text-right">
      <p>To thine own self be true</p>
      <small>This is a quote by <cite title="superjoefly">Superjoefly</cite></small>
    </blockquote>

    <hr>

    <p class="caption">Description Lists:</p>
    <!-- Definition Lists -->
    <dl>
      <dt>Description</dt>
      <dd>Terms 1</dd>
      <dt>Description</dt>
      <dd>Terms 2</dd>
    </dl>

    <p class="caption">Horizontal:</p>
    <dl class="horizontal">
      <dt>Description</dt>
      <dd>Terms 1</dd>
      <dt>Description</dt>
      <dd>Terms 2</dd>
    </dl>

    <hr>

    <p class="text-bold">More:</p>

    <p class="text-right">Right Aligned</p>
    <p class="text-left">Left Aligned</p>
    <p class="text-center">Center Aligned</p>

    <hr>

    <p class="text-justify"><strong>Justified Text</strong>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, laudantium, non. Facere quod similique esse alias ipsum accusamus ipsam blanditiis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, laudantium, non. Facere quod similique esse alias ipsum accusamus ipsam blanditiis.
    </p>

    <div style="height: 200px; width: 300px" class="text-truncate"><strong>Truncated Text</strong>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, laudantium, non. Facere quod similique esse alias ipsum accusamus ipsam blanditiis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, laudantium, non. Facere quod similique esse alias ipsum accusamus ipsam blanditiis.</p>
    </div>

    <hr>

    <p class="caption">This is a caption...</p>

    <p class="uppercase">This has a class of uppercase...</p>

    <p class="lowercase">This Has A Class of Lower Case...</p>

    <p class="capitalize">first letter of each word capitalized!</p>

    <hr>

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
export default {
  data () {
    return {
      rippleEnabled: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~variables'
  .text-bold
    font-size 16px
</style>
