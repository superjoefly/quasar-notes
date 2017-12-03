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

import Vue from 'vue'

// npm install vue-scroll
import vuescroll from 'vue-scroll'
Vue.use(vuescroll)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// Global Import of Directives and Components and Event Bus
import Quasar, {
  Ripple,
  QBtn,
  QIcon,
  QLayout,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QTab,
  QTabPane,
  QRouteTab,
  QTooltip,
  QCheckbox,
  QInput,
  QScrollArea,
  QSideLink,
  QSearch,
  QFixedPosition,
  QFab,
  QFabAction,
  QResizeObservable,
  QWindowResizeObservable,
  QSelect,
  QPullToRefresh,
  QItemTile,
  QCollapsible,
  QContextMenu,
  QPagination,
  QScrollObservable,
  QInfiniteScroll,
  QSpinnerDots,
  QChip,
  QSpinnerOval,
  QSpinnerAudio,
  QSpinnerGears,
  QSpinnerHourglass,
  QSpinnerGrid,
  QField,
  QChipsInput,
  QKnob,
  QOptionGroup,
  QAutocomplete,
  QSlider,
  QRange,
  QRadio,
  QToggle,
  QDatetime,
  QItemSeparator,
  QInlineDatetime,
  QDatetimeRange,
  QDialogSelect,
  QRating
} from 'quasar'

Vue.use(Quasar, {
  directives: {
    Ripple
  },
  components: {
    QBtn,
    QIcon,
    QLayout,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QTab,
    QTabPane,
    QRouteTab,
    QTooltip,
    QCheckbox,
    QInput,
    QScrollArea,
    QSideLink,
    QSearch,
    QFixedPosition,
    QFab,
    QFabAction,
    QResizeObservable,
    QWindowResizeObservable,
    QSelect,
    QPullToRefresh,
    QItemTile,
    QCollapsible,
    QContextMenu,
    QPagination,
    QScrollObservable,
    QInfiniteScroll,
    QSpinnerDots,
    QChip,
    QSpinnerOval,
    QSpinnerAudio,
    QSpinnerGears,
    QSpinnerHourglass,
    QSpinnerGrid,
    QField,
    QChipsInput,
    QKnob,
    QOptionGroup,
    QAutocomplete,
    QSlider,
    QRange,
    QRadio,
    QToggle,
    QDatetime,
    QItemSeparator,
    QInlineDatetime,
    QDatetimeRange,
    QDialogSelect,
    QRating
  }
}) // Install Quasar Framework

// Vuejs Event Bus
export const EventBus = new Vue()

// Vue Router
import router from './router'

// Vuex Store
import { store } from './store'

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App').default)
  })
})
