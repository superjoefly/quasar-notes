<template>

    <div class="layout-padding">
      <p class="text-bold">ToolBar (inverted)</p>

      <q-toolbar color="red" inverted>
        <q-toolbar-title>Title
          <span slot="subtitle">
            Subitle
          </span>
        </q-toolbar-title>
        <q-btn flat>
          <q-icon name="mail"></q-icon>
        </q-btn>
        <q-btn flat round small>
          <q-icon name="mail"></q-icon>
        </q-btn>
      </q-toolbar>

      <hr>
      <hr>


      <p class="text-bold">Tabs</p>

      <q-tabs color="orange" no-pane-border glossy>
        <!-- Tabs -->
        <q-tab default count="5" slot="title" name="tab-1" icon="message" label="message"></q-tab>
        <q-tab disable slot="title" name="tab-2" icon="fingerprint"></q-tab>
        <q-tab alert slot="title" name="tab-3" icon="account_box"></q-tab>
        <q-tab slot="title" name="tab-4" icon="accessibility"></q-tab>
        <q-tab slot="title" name="tab-5" icon="build" label="tools"></q-tab>

        <!-- Targets -->
        <q-tab-pane name="tab-1">Tab One</q-tab-pane>
        <q-tab-pane name="tab-2">Tab Two</q-tab-pane>
        <q-tab-pane name="tab-3">Tab Three</q-tab-pane>
        <q-tab-pane name="tab-4">Tab Four</q-tab-pane>
        <q-tab-pane name="tab-5">Tab Five</q-tab-pane>
      </q-tabs>

      <hr>
      <hr>

      <p class="text-bold">Using Toolbar, Dynamic Components and V-Model</p>
      <div>
        <q-toolbar color="green">
          <q-toolbar-title>Title
            <span slot="subtitle">
              Subitle
            </span>
          </q-toolbar-title>
          <q-btn @click="selectedTab = 'tab1'">
            <q-icon name="mail"></q-icon>
          </q-btn>
          <q-btn @click="selectedTab = 'tab2'">
            <q-icon name="fingerprint"></q-icon>
          </q-btn>
          <q-btn @click="selectedTab = 'tab3'">
            <q-icon name="build"></q-icon>
          </q-btn>
        </q-toolbar>

        <keep-alive>
          <component :is="selectedTab">
            <p>Default Content</p>
          </component>
        </keep-alive>
      </div>

      <hr>
      <hr>

      <p class="text-bold">Using QSelect, Components and V-Model</p>

      <q-select
        type="radio"
        v-model="tabsModel"
        :options="tabsOptions"
      ></q-select>

      <q-tabs color="grey" inverted align="right" v-model="tabsModel">

        <q-tab name="xtab-1" icon="message" slot="title" color="yellow" />
        <q-tab name="xtab-2" icon="account_box" slot="title" />
        <q-tab name="xtab-3" icon="mail" slot="title" />

        <q-tab-pane name="xtab-1">
          <tab1></tab1>
        </q-tab-pane>
        <q-tab-pane name="xtab-2">
          <tab2></tab2>
        </q-tab-pane>
        <q-tab-pane name="xtab-3">
          <tab3></tab3>
        </q-tab-pane>

      </q-tabs>

      <p class="text-bold">We can also use tabs with vue-router...see Layout.vue for example!</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <hr><hr>

    <p class="text-bold">Window History</p>

    <p>To avoid building up a window history, which can alter navigation on phones, use the 'replace' property when routing: <b>:to="..." replace</b></p>

    <hr><hr>

    <p class="text-bold">Context Menu</p>

    <p>Display a context menu (popup) instead of the default browser context menu, when right clicking (or long tapping on a mobile device):</p>

    <div ref="target" style="height: 100px; width: 100px; background-color: purple">
      <q-context-menu ref="context">
        <q-list link separator style="min-width: 150px; max-height: 300px;">
          <q-item @click="showToast(), $refs.context.close()">
            <q-item-main label="Label" sublabel="Value"></q-item-main>
          </q-item>
          <q-item @click="showOtherToast(), $refs.context.close()">
            <q-item-main label="Other Label" sublabel="Other Value"></q-item-main>
          </q-item>
        </q-list>
      </q-context-menu>
    </div>

    <hr><hr>

    <p class="text-bold">Breadcrumbs (bottom-right)</p>

    <q-fixed-position corner="bottom-right" :offset="[0, 0]" class="outline">
      <ul class="breadcrumb">
        <li>
          <router-link to="#" replace >
            <q-icon name="home" /> Home
          </router-link>
        </li>
        <li>
          <router-link to="#" replace>
            <q-icon name="mail" /> About
          </router-link>
        </li>
        <li>
          <router-link to="#" replace>
            <q-icon name="cloud" /> Contact
          </router-link>
        </li>
      </ul>
    </q-fixed-position>

    <hr><hr>

    <p class="text-bold">Pagination</p>

    <!-- Using a method and switch statement -->
    <!-- <q-pagination v-model="page" :max="3" @change="test"></q-pagination> -->

    <!-- Using page number as path -->
    <!-- Requires setting up appropriate routes -->
    <p class="caption">Use browser back button to return to this page...</p>
    <q-pagination v-model="page" :max="3" @change="$router.push(`${page}`)"></q-pagination>

    </div>
</template>

<script>
import Tab1 from './tabs/Tab1.vue'
import Tab2 from './tabs/Tab2.vue'
import Tab3 from './tabs/Tab3.vue'

export default {
  components: {
    tab1: Tab1,
    tab2: Tab2,
    tab3: Tab3
  },
  data () {
    return {
      selectedTab: 'tab1',
      tabsModel: 'xtab-2',
      tabsOptions: [
        {label: 'Tab 1', value: 'xtab-1'},
        {label: 'Tab 2', value: 'xtab-2'},
        {label: 'Tab 3', value: 'xtab-3'}
      ],
      // See router...
      page: 1
    }
  },
  methods: {
    // test () {
    //   switch (this.page) {
    //     case 1:
    //       this.$router.push('/')
    //       break
    //     case 2:
    //       this.$router.push('/about')
    //       break
    //     case 3:
    //       this.$router.push('/contact')
    //   }
    // }
  }
}
</script>
<style lang="stylus" scoped>
    @import '~variables'
    .outline
        border-top 1px solid lime
        border-left 1px solid lime
        padding-left 10px
        background-color $grey-5
        color white
</style>
