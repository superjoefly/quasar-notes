<template>
  <!-- Layout Padding required to avoid vertical scrollbar -->
  <div class="layout-padding">
    <p>About</p>

        <!-- <q-pagination v-model="page" :max="3" @change="test"></q-pagination> -->
  </div>
</div>
</template>
<script>
export default {
  data: () => ({
    // page: 2
  }),
  methods: {
    // test () {
    //   switch (this.page) {
    //     case 1:
    //       // day = 'Sunday'
    //       this.$router.push('/navigation')
    //       break
    //     case 2:
    //       this.$router.push('/about')
    //       // day = 'Monday'
    //       break
    //     case 3:
    //       this.$router.push('/contact')
    //       // day = 'Tuesday'
    //   }
    // }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~variables'
</style>
