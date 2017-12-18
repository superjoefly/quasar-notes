<template>
  <div class="layout-padding">
    <p class="text-bold">CSS Helpers Continued</p>

    <hr>

    <p class="text-bold">Shadows:</p>

    <div class="no-shadow">no-shadow</div>
    <br><br>
    <div class="inset-shadow">inset-shadow</div>
    <br><br>
    <div class="shadow-1">shadow-1</div>
    <br><br>
    <div class="shadow-12">shadow-12</div>
    <br><br>
    <div class="shadow-24">shadow-24</div>
    <br>

    <br><br>
    <hr><hr>

    <p class="text-bold">Visibility:</p>

    <p class="caption">disabled</p>
    <q-btn disabled>Disabled</q-btn>

    <hr>

    <p class="caption">Hidden:</p>
    <p>Next div is hidden (removed from DOM):</p>
    <div class="hidden">Hidden</div>
    <hr>

    <p class="caption">Invisible:</p>
    <p>Next div is invisible (but still takes up space):</p>
    <div class="invisible">Invisible</div>
    <hr>

    <p class="text-bold">Transparent:</p>
    <div style="height: 75px; width: 100%;" class="bg-primary">
      <div class="transparent" style="border: 1px solid black">Transparent Background</div>
    </div>
    <hr>

    <p class="text-bold">Dimmed / Light-dimmed:</p>

    <p :class="dimmed">Dimmed and Light-Dimmed add a darkish transparent overlay...</p>

    <q-select :options="dimOptions" v-model="dimmed" style="z-index: 1"></q-select>

    <hr>

    <p class="text-bold">Ellipsis (...)</p>
    <p class="caption">Ellipsis: 1-line</p>
    <p class="ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius doloribus quae expedita quaerat fugit aliquam voluptas non dolor harum, eum esse. Ut nesciunt impedit, labore eum quod saepe. Mollitia, aut.</p>

    <p class="caption">Ellipsis: 1-line / 2-lines etc...</p>
    <p class="ellipsis-2-lines">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius doloribus quae expedita quaerat fugit aliquam voluptas non dolor harum, eum esse. Ut nesciunt impedit, labore eum quod saepe. Mollitia, aut.</p>

    <hr>

    <p class="caption">Adds a yellow background color and fades it away when element is displayed.</p>

    <q-btn color="secondary" style="margin-bottom: 10px;" @click="toggleParagraph">Hide/Show</q-btn>
    <p class="text-bold highlight-and-fade" v-if="shown">Highlight and Fade</p>

    <hr>

    <p class="text-bold">z-absolute</p>
    <p class="caption">Positions element on top of any other component...</p>
    <div class="z-absolute" style="height: 100px; width: 100px; background-color: yellow">z-absolute</div>

    <hr>

    <p class="text-bold">Window Width</p>

    <p>The following elements will only be shown on specified screen sizes according to their visibility-class:</p>

    <div class="xs demo">xs</div>
    <div class="sm demo">sm</div>
    <div class="md demo">md</div>
    <div class="lg demo">lg</div>
    <div class="xl demo">xl</div>

    <hr>

    <p>We can also specify that an element be shown only on screen sizes that are less-than (lt) or greater-than (gt) a specified visibility-class:</p>

    <p>The following div will only be shown on screen sizes less-than 992px:</p>
    <div class="lt-md demo">lt-md</div>

    <p>The following div will only be shown on a screen size greater-than 1200px:</p>
    <div class="gt-lg demo">gt-lg</div>

    <p><b>Note:</b> we can combine with the <b>inline</b> class for inline-blocks:</p>

    <span class="gt-sm inline">This is the beginning of a long sentence &nbsp;and here is the end of this long sentence.</span>

    <hr>

    <p class="text-bold">Platform Related Visibility</p>

    <p>Platform related visibility classes can be applied to only show elements on a specified platform. For example (touch-hide) will hide the element on touch devices. See the docs for more information about these classes.</p>

    <hr>

    <p class="text-bold">Orientation Related</p>

    <p>Elements can also be hidden, or shown, depending on device orientation using <b>orientation-portrait</b> and <b>orientation-landscape</b> classes.</p>

    <hr>

    <p class="text-bold">Printing Related</p>

    <p>We can use <b>print-only</b> and <b>print-hide</b> classes to show or hide an element on print-media (will be hidden on screen-media)</p>

    <hr>

    <p class="text-bold">CSS Positioning Classes</p>

    <p>See the docs for classes that can be used to position and/or align DOM elements!</p>



  </div>
</template>
<script>
export default {
  data () {
    return {
      dimmed: null,
      dimOptions: [
        {label: 'normal', value: null},
        {label: 'dimmed', value: 'dimmed'},
        {label: 'light-dimmed', value: 'light-dimmed'}
      ],
      shown: true
    }
  },
  methods: {
    toggleParagraph () {
      this.shown = !this.shown
    }
  }
}
</script>
<style lang="stylus" scoped>
  .demo
    height 100px
    width 100px
    background teal
    color white
</style>
