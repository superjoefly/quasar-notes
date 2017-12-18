<template>
  <!-- Layout Padding required to avoid vertical scrollbar -->
  <div class="layout-padding">
    <p class="text-bold">EventBus and Vuex</p>

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
  </div>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

// Import Components
import Clicker from '../clicker/Clicker'
import Clicks from '../clicker/Clicks'

export default {
  // Register Components
  components: {
    'app-clicker': Clicker,
    'app-clicks': Clicks
  },
  data: () => ({

  }),
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
</style>
