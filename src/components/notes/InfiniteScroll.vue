<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Scroll down to see infinite scroll...</p>
      <br>
      <q-infinite-scroll :handler="loadMore" ref="infiniteScroll">
        <p v-for="(item, index) in items" class="caption">
          <q-chip circle color="secondary" class="shadow-1">
            {{ index + 1 }}
          </q-chip>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, excepturi veritatis officiis, non quasi suscipit eveniet deleniti soluta facilis sapiente ipsa veniam nesciunt natus possimus earum inventore omnis doloremque maxime.
        </p>
        <div slot="message" class="row justify-center" style="margin-bottom: 50px;">
          <q-spinner-dots :size="40"></q-spinner-dots>
        </div>
        <!-- Stop Infinite Scroll -->
        <button @click="$refs.infiniteScroll.stop()">Stop Loading</button>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [{}, {}, {}, {}, {}]
    }),
    methods: {
      loadMore (index, done) {
        setTimeout(() => {
          let newItems = []
          for (let i = 0; i < 5; i++) {
            newItems.push({})
            console.log('Load')
          }
          done()
          this.items = this.items.concat(newItems)
        }, 3000)
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
