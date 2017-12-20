<template>
  <div class="layout-padding">

    <div>
      <p class="text-bold">QLayout</p>

      <p class="text-bold">Search Bar Component</p>
      <!-- <q-toolbar slot="header" color="primary" > -->
        <q-search v-model="search" />
      <!-- </q-toolbar> -->

      <p class="text-bold">Floatin Action Buttons</p>

      <!-- Not On QLayout -->

      <!-- Non-Expandable -->
      <q-btn round color="red" @click="alertTime" class="fixed" style="top: 200px; right: 18px">
        <q-icon name="alarm"></q-icon>
      </q-btn>

      <!-- Exapandable (fixed) -->
      <q-fab color="orange" icon="wifi" direction="up" class="fixed" style="right: 18px; bottom: 60px">
        <q-fab-action color="purple" @click="method" icon="mail"></q-fab-action>
        <q-fab-action color="yellow" @click="method" icon="alarm"></q-fab-action>
      </q-fab>

      <!-- Expandable (not fixed) -->
      <q-fab color="orange" icon="keyboard_arrow_down" direction="down">
        <q-fab-action color="purple" @click="method" icon="mail"></q-fab-action>
        <q-fab-action color="yellow" @click="method" icon="alarm"></q-fab-action>
      </q-fab>

      <!-- !On QLayout -->

      <!-- Non-Expandable (on a q-layout) -->
      <!-- <q-fixed-position corner="top-right" :offset="[18, 18]">
        <q-btn round color="primary" @click="alertTime" icon="alarm"></q-btn>
      </q-fixed-position> -->

      <!-- Exapandable (fixed / on q-layout) FAB -->
      <!-- <q-fixed-position corner="bottom-right" :offset="[18, 18]">
        <q-fab color="orange" icon="keyboard_arrow_up" direction="up">
          <q-fab-action color="purple" @click="method" icon="mail"></q-fab-action>
          <q-fab-action color="yellow" @click="method" icon="alarm"></q-fab-action>
        </q-fab>
      </q-fixed-position> -->

      <hr style="margin-top: 125px;">

      <p class="text-bold">Toggle Through V-Model</p>

      <div>
        <q-btn color="primary" @click="open = true">
          <q-icon name="menu" />
        </q-btn>
        <q-btn color="primary" @click="open = false">
          <q-icon name="close" />
        </q-btn>

        <q-fab v-model="open" color="purple" icon="keyboard_arrow_right">
          <q-fab-action color="purple" @click="method" icon="wifi"></q-fab-action>
          <q-fab-action color="yellow" @click="method" icon="mail"></q-fab-action>
        </q-fab>
      </div>

      <hr>

      <p class="text-bold">Labeling with Tooltips</p>

      <q-fab color="primary" active-icon="alarm" direction="down" glossy >
        <q-tooltip slot="tooltip" anchor="center left" self="center right" :offset="[20, 20]">
          Tooltip in FAB
        </q-tooltip>

        <q-fab-action color="purple" @click="toast('mail')" icon="mail">
          <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Mail</q-tooltip>
        </q-fab-action>

        <q-fab-action color="secondary" @click="toast('alarm')" icon="alarm">
          <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Alarm</q-tooltip>
        </q-fab-action>
      </q-fab>

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

      <div class="desktop-only">
        <hr>
        
        <p class="text-bold">Element Resize Observable</p>
        <p>Resize div to see result in console.</p>

        <div style="height: 100px; width: 100px; border: 1px solid blue; resize: both; overflow: auto">
          <!-- <q-resize-observable @resize="onResize">
            test
          </q-resize-observable> -->
        </div>

        <hr>

        <p class="text-bold">Window Resize Observable</p>
        <p>Resize the browser window to see result in console.</p>

          <!-- <q-window-resize-observable @resize="onResize">
            test
          </q-window-resize-observable> -->
      </div>


    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      open: false
    }
  },
  methods: {
    method () {
      console.log('Hello!')
    },
    alertTime () {
      alert(`The current time is ${this.currentTime}`)
    },
    onResize (size) {
      console.log(size)
    }
  },
  computed: {
    currentTime () {
      let currentDate = new Date()
      return (currentDate.getMonth() + 1) + '/' +
      currentDate.getDate() + '/' +
      currentDate.getFullYear() + '@' +
      currentDate.getHours() + ':' +
      currentDate.getMinutes() + ':' +
      currentDate.getSeconds()
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
