<template>
  <!-- Layout Padding required to avoid vertical scrollbar -->
  <div class="layout-padding">
    <p class="text-bold">Platform Detection</p>

    <p class="text-bold">My Platform:</p>

    <q-list striped>
      <q-item v-for="item in myPlatform" :key="item.label">
        <q-item-main :label="item.label" />
        <q-item-side>{{item.value}}</q-item-side>
      </q-item>
    </q-list>

    <pre><code class="language-js">
      data: () => ({
        myPlatform: [
          { label: 'is-chrome', value: Platform.is.chrome },
          { label: 'version', value: Platform.is.version },
          { label: 'versionNumber', value: Platform.is.versionNumber },
          { label: 'is-linux', value: Platform.is.linux },
          { label: 'is-desktop', value: Platform.is.desktop },
          { label: 'is-webkit', value: Platform.is.webkit },
          { label: 'name', value: Platform.is.name },
          { label: 'platform', value: Platform.is.platform }
        ]
      })
    </code></pre>

  </div>
</div>
</template>
<script>
import { Platform, QList, QItem, QItemTile, QItemMain } from 'quasar'
console.log(Platform)

export default {
  components: {
    QList, QItem, QItemTile, QItemMain
  },
  data: () => ({
    myPlatform: [
      { label: 'is-chrome', value: Platform.is.chrome },
      { label: 'version', value: Platform.is.version },
      { label: 'versionNumber', value: Platform.is.versionNumber },
      { label: 'is-linux', value: Platform.is.linux },
      { label: 'is-desktop', value: Platform.is.desktop },
      { label: 'is-webkit', value: Platform.is.webkit },
      { label: 'name', value: Platform.is.name },
      { label: 'platform', value: Platform.is.platform }
    ]
  })
}
</script>
<style lang="stylus" scoped>
  @import '~variables'
</style>
