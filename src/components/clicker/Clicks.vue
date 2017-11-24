<template>
  <div>
    <p class="text-tertiary">Number of Clicks: <span>{{clicks}}</span></p>
  </div>
</template>
<script>
import {EventBus} from '../../main.js'
export default {
  data () {
    return {
      clicks: 0
    }
  },
  created () {
    EventBus.$on('clicked', (clicks) => {
      this.clicks = clicks
    })
  }
}
</script>
