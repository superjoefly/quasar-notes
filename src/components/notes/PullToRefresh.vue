<template>
  <!-- Pull to Refresh -->
  <q-pull-to-refresh :handler="refresher">
    <div class="layout-padding">
      <p class="caption">
        Pull down to refresh...
      </p>
      <p v-for="(item, index) in items">
        <q-chip square color="secondary" class="shadow-1">
          {{ items.length - index }}
        </q-chip>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, sequi?
      </p>
    </div>
  </q-pull-to-refresh>
</template>

<script>
  import { Toast } from 'quasar'
  export default {
    data: () => ({
      items: [{}, {}, {}, {}, {}, {}]
    }),
    methods: {
      refresher (done) {
        // Ajax Call...
        setTimeout(() => {
          done()
          this.items.push({})
          Toast.create('Item #' + this.items.length + ' is new.')
        }, 1000)
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
