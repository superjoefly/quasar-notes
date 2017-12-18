// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

// Import Vuejs
import Vue from 'vue'

// npm install vue-scroll
import vuescroll from 'vue-scroll'
Vue.use(vuescroll)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// Import All Directives and Components (for Testing only)
import Quasar, * as All from 'quasar'
Vue.use(Quasar, {
  components: All,
  directives: All
})

// Vuejs Event Bus
export const EventBus = new Vue()

// Vue Router
import router from './router'

// Vuex Store
import { store } from './store'

// Toggle Production Tip
Vue.config.productionTip = false

// Install Quasar Framework
Vue.use(Quasar)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App').default)
  })
})
