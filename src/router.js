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
    // FORMS NOTES
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
    { path: '/toggle', component: load('notes/forms/Toggle') },
    { path: '/option', component: load('notes/forms/OptionGroup') },
    { path: '/datetime', component: load('notes/forms/Datetime') },
    { path: '/inlinedatetime', component: load('notes/forms/InlineDatetime') },
    { path: '/datetimerange', component: load('notes/forms/DatetimeRange') },
    { path: '/select', component: load('notes/forms/Select') },
    { path: '/dialogSelect', component: load('notes/forms/DialogSelect') },
    { path: '/rating', component: load('notes/forms/Rating') },
    { path: '/knob', component: load('notes/forms/Knob') },
    { path: '/uploader', component: load('notes/forms/Uploader') },
    // POPUPS NOTES
    { path: '/action', component: load('notes/popups/Action') },
    { path: '/alert', component: load('notes/popups/Alert') },
    { path: '/toast', component: load('notes/popups/Toast') },
    { path: '/dialog', component: load('notes/popups/Dialog') },
    { path: '/modal', component: load('notes/popups/Modal') },
    { path: '/popover', component: load('notes/popups/Popover') },
    { path: '/tooltip', component: load('notes/popups/Tooltip') },
    // Groups
    { path: '/cards', component: load('notes/groups/Cards') },
    { path: '/collapsible', component: load('notes/groups/Collapsible') },
    { path: '/datatable', component: load('notes/groups/DataTable') },
    { path: '/htmltables', component: load('notes/groups/HtmlTables') },
    { path: '/lists', component: load('notes/groups/Lists') },
    { path: '/carousel', component: load('notes/groups/Carousel') },
    { path: '/stepper', component: load('notes/groups/Stepper') },
    // PROGRESS
    { path: '/ajaxbar', component: load('notes/progress/AjaxBar') },
    { path: '/loading', component: load('notes/progress/Loading') },
    { path: '/progressbar', component: load('notes/progress/ProgressBar') },
    { path: '/spinner', component: load('notes/progress/Spinner') },
    // ACTIONS
    { path: '/panning', component: load('notes/actions/Panning') },
    { path: '/swiping', component: load('notes/actions/Swiping') },
    { path: '/touch-hold', component: load('notes/actions/TouchHold') },
    // Media
    { path: '/image-gallery', component: load('notes/media/ImageGallery') },
    { path: '/parallax', component: load('notes/media/Parallax') },
    { path: '/video', component: load('notes/media/Video') },
    // Animations
    { path: '/transitions', component: load('notes/animations/Transitions') },
    { path: '/slide-transition', component: load('notes/animations/SlideTransition') },
    { path: '/js-animations', component: load('notes/animations/JSAnimations') },
    { path: '/css-helpers', component: load('notes/animations/CssHelpers') },
    // OHERS
    { path: '/more-chips', component: load('notes/more/MoreChips') },
    { path: '/chat', component: load('notes/more/Chat') },
    { path: '/tree', component: load('notes/more/Tree') },
    // UTILS
    { path: '/js-date', component: load('notes/utils/JSDate') },
    { path: '/dom', component: load('notes/utils/DOM') },
    { path: '/formatter', component: load('notes/utils/Formatter') },
    // COLLAPSIBLES
    { path: '/community/events', component: load('community/Events') },
    { path: '/community/gatherings', component: load('community/Gatherings') },
    { path: '/community/competitions/:name', component: load('community/competitions/Competition') },
    // Always leave this last one
    { path: '*', component: load('layouts/Error404') } // Not found
  ]
})
