import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/', component: load('layouts/Home') },
    { path: '/about', component: load('layouts/About') },
    { path: '/contact', component: load('layouts/Contact') },
    { path: '/more', component: load('layouts/More') },
    { path: '/start', component: load('notes/Start') },
    { path: '/flexbox', component: load('notes/Flexbox') },
    { path: '/css', component: load('notes/CSS') },
    { path: '/qlayout', component: load('notes/Qlayout') },
    { path: '/navigation', component: load('notes/Navigation') },
    { path: '/pulltorefresh', component: load('notes/PullToRefresh') },
    { path: '/scrolling', component: load('notes/Scrolling') },
    { path: '/infinitescroll', component: load('notes/InfiniteScroll') },
    { path: '/buttons', component: load('notes/Buttons') },
    // Forms Notes
    { path: '/fields', component: load('notes/forms/Fields') },
    { path: '/inputs', component: load('notes/forms/Inputs') },
    { path: '/validation', component: load('notes/forms/Validation') },
    { path: '/chips', component: load('notes/forms/Chips') },
    { path: '/autocomplete', component: load('notes/forms/Autocomplete') },
    { path: '/search', component: load('notes/forms/Search') },
    { path: '/sliders', component: load('notes/forms/Sliders') },
    { path: '/range', component: load('notes/forms/Range') },
    { path: '/radio', component: load('notes/forms/Radio') },
    { path: '/checkbox', component: load('notes/forms/Checkbox') },
    // Collapsibles
    { path: '/community/events', component: load('community/Events') },
    { path: '/community/gatherings', component: load('community/Gatherings') },
    { path: '/community/competitions/:name', component: load('community/competitions/Competition') },
    // Always leave this last one
    { path: '*', component: load('layouts/Error404') } // Not found
  ]
})
