<template>
  <div>
    <q-btn class="text-primary" @click="increase" style="margin-bottom: 10px;">Click Me!</q-btn>
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
  methods: {
    increase () {
      this.clicks++
      if (this.clicks >= 4) {
        this.clicks = 0
      };
      EventBus.$emit('clicked', this.clicks)
    }
  }
}
</script>
