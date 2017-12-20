<template>

  <!-- Configure "view" prop for QLayout -->
  <!-- 'reveal' hides header on scrolldown, and reveals on scrollup  -->
  <q-layout ref="layout" reveal :left-class="{'bg-left': true}" @scroll="popup" @dblclick.native="openPanels">




    <!-- Header -->
    <q-toolbar slot="header" color="blue-10">
      <!-- Left Button -->
      <q-btn flat @click="$refs.layout.toggleLeft()" class="gt-sm">
        <q-icon name="menu" style="font-size: 30px;"></q-icon>
      </q-btn>

      <!-- Title -->
      <q-toolbar-title>
        Learning Quasar
        <!-- Subtitle -->
        <span slot="subtitle">Subtitle</span>
      </q-toolbar-title>

      <!-- Search Bar -->
      <q-search v-model="search" inverted class="gt-sm" />

      <!-- Right Button -->
      <q-btn flat class="pull-right" @click="$refs.layout.toggleRight()">
        <q-icon name="menu" style="font-size: 30px;"></q-icon>
      </q-btn>
    </q-toolbar>



    <!-- Search Bar (Small Screens) -->
    <!-- <q-toolbar slot="header" color="primary" class="lt-md" style="padding: 0px;" >
      <q-search inverted v-model="search" color="none" />
    </q-toolbar> -->





    <!-- Navigation -->
    <q-tabs slot="navigation">
      <q-route-tab slot="title" icon="view_quilt" to="/" replace hide="icon" label="Home" />

      <q-route-tab slot="title" icon="view_day" to="/communication" replace hide="icon" label="Vuex" />

      <q-route-tab slot="title" icon="view_day" to="/style" replace label="Style" />

      <q-route-tab slot="title" icon="input" to="/platform" replace label="Platform" />

      <q-route-tab icon="mail" to="/mail" replace slot="title" label="404"
      />
    </q-tabs>





    <!-- Left Side Panel -->
    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links
          <q-btn flat @click="$refs.layout.hideLeft()">
            <q-icon name="close" ></q-icon>
          </q-btn>
        </q-list-header>

        <q-item>
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item>
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item>
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item>
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>





    <!-- Notes Notes Notes -->

    <!-- Right Side Panel (WITH Scroll and Router Links) -->
    <div slot="right" style="width: 100%; height: 100%;">
      <q-list no-border link inset-delimiter>
        <q-list-header>Notes
          <q-btn flat @click="$refs.layout.hideRight()">
            <q-icon name="close" ></q-icon>
          </q-btn>
        </q-list-header>

        <q-side-link item tag="a" to="/flexbox" replace>
            <q-item-side icon="school" />
            <q-item-main label="Flexbox" sublabel="Flexbox Examples" />
        </q-side-link>

        <q-side-link item tag="a" to="/css" replace>
            <q-item-side icon="school" />
            <q-item-main label="CSS Helpers" sublabel="CSS Helper Examples" />
        </q-side-link>

        <q-side-link item tag="a" to="/qlayout" replace>
            <q-item-side icon="school" />
            <q-item-main label="QLayout" sublabel="QLayout Info" />
        </q-side-link>

        <q-side-link item tag="a" to="/navigation" replace>
            <q-item-side icon="school" />
            <q-item-main label="Navigation" sublabel="Navigation Info" />
        </q-side-link>

        <q-side-link item tag="a" to="/pulltorefresh" replace>
            <q-item-side icon="school" />
            <q-item-main label="PullToRefresh" sublabel="PullToRefresh Test" />
        </q-side-link>

        <q-side-link item tag="a" to="/scrolling" replace>
            <q-item-side icon="school" />
            <q-item-main label="Scrolling" sublabel="Scrolling" />
        </q-side-link>

        <q-side-link item tag="a" to="/infinitescroll" replace>
            <q-item-side icon="school" />
            <q-item-main label="Infinite Scroll" sublabel="Infinite Scroll" />
        </q-side-link>

        <q-side-link item tag="a" to="/buttons" replace>
            <q-item-side icon="school" />
            <q-item-main label="Buttons" sublabel="Form Buttons" />
        </q-side-link>


        <!-- Forms -->
        <q-collapsible indent icon="school" label="Forms">
          <q-side-link item tag="a" to="/fields" replace>
              <q-item-side icon="school" />
              <q-item-main label="Fields" sublabel="Form Fields" />
          </q-side-link>

          <q-side-link item tag="a" to="/inputs" replace>
              <q-item-side icon="school" />
              <q-item-main label="Inputs" sublabel="Form Inputs" />
          </q-side-link>

          <q-side-link item tag="a" to="/validation" replace>
              <q-item-side icon="school" />
              <q-item-main label="Validation" sublabel="Form Validation" />
          </q-side-link>

          <q-side-link item tag="a" to="/chips" replace>
              <q-item-side icon="school" />
              <q-item-main label="Chips" sublabel="Chips Input" />
          </q-side-link>

          <q-side-link item tag="a" to="/autocomplete" replace>
              <q-item-side icon="school" />
              <q-item-main label="Autocomplete" sublabel="Form Autocomplete" />
          </q-side-link>

          <q-side-link item tag="a" to="/search" replace>
              <q-item-side icon="school" />
              <q-item-main label="Search" sublabel="Search - Textfield" />
          </q-side-link>

          <q-side-link item tag="a" to="/sliders" replace>
              <q-item-side icon="school" />
              <q-item-main label="Sliders" sublabel="Slider Inputs" />
          </q-side-link>

          <q-side-link item tag="a" to="/range" replace>
              <q-item-side icon="school" />
              <q-item-main label="Range" sublabel="Range Inputs" />
          </q-side-link>

          <q-side-link item tag="a" to="/radio" replace>
              <q-item-side icon="school" />
              <q-item-main label="Radio" sublabel="Radio Buttons" />
          </q-side-link>

          <q-side-link item tag="a" to="/checkbox" replace>
              <q-item-side icon="school" />
              <q-item-main label="Checkbox" sublabel="Checkbox Input" />
          </q-side-link>

          <q-side-link item tag="a" to="/toggle" replace>
              <q-item-side icon="school" />
              <q-item-main label="Toggle" sublabel="Toggle" />
          </q-side-link>

          <q-side-link item tag="a" to="/option" replace>
              <q-item-side icon="school" />
              <q-item-main label="Option Group" sublabel="Option Group Input" />
          </q-side-link>

          <q-side-link item tag="a" to="/datetime" replace>
              <q-item-side icon="school" />
              <q-item-main label="Datetime" sublabel="Datetime" />
          </q-side-link>

          <q-side-link item tag="a" to="/inlinedatetime" replace>
              <q-item-side icon="school" />
              <q-item-main label="Inline Datetime" sublabel="Inline Datetime" />
          </q-side-link>

          <q-side-link item tag="a" to="/datetimerange" replace>
              <q-item-side icon="school" />
              <q-item-main label="Datetime Range" sublabel="Datetime Range" />
          </q-side-link>

          <q-side-link item tag="a" to="/select" replace>
              <q-item-side icon="school" />
              <q-item-main label="Select Menu" sublabel="Select Menu" />
          </q-side-link>

          <q-side-link item tag="a" to="/dialogSelect" replace>
              <q-item-side icon="school" />
              <q-item-main label="Dialog Select" sublabel="Dialog Select" />
          </q-side-link>

          <q-side-link item tag="a" to="/rating" replace>
              <q-item-side icon="school" />
              <q-item-main label="Rating" sublabel="Star Rating" />
          </q-side-link>

          <q-side-link item tag="a" to="/knob" replace>
              <q-item-side icon="school" />
              <q-item-main label="Knob" sublabel="Knob Range" />
          </q-side-link>

          <q-side-link item tag="a" to="/uploader" replace>
              <q-item-side icon="school" />
              <q-item-main label="Uploader" sublabel="Upload Files" />
          </q-side-link>
        </q-collapsible>

        <!-- Popups -->
        <q-collapsible indent icon="school" label="Popups" >

          <q-side-link item tag="a" to="/action" replace>
              <q-item-side icon="school" />
              <q-item-main label="Action Sheet" sublabel="Action Sheet" />
          </q-side-link>

          <q-side-link item tag="a" to="/alert" replace>
              <q-item-side icon="school" />
              <q-item-main label="Alert" sublabel="Alert" />
          </q-side-link>

          <q-side-link item tag="a" to="/toast" replace>
              <q-item-side icon="school" />
              <q-item-main label="Toast" sublabel="Toast" />
          </q-side-link>

          <q-side-link item tag="a" to="/dialog" replace>
              <q-item-side icon="school" />
              <q-item-main label="Dialog" sublabel="Dialog" />
          </q-side-link>

          <q-side-link item tag="a" to="/modal" replace>
              <q-item-side icon="school" />
              <q-item-main label="Modal" sublabel="Modal" />
          </q-side-link>

          <q-side-link item tag="a" to="/popover" replace>
              <q-item-side icon="school" />
              <q-item-main label="Popover" sublabel="Popover" />
          </q-side-link>

          <q-side-link item tag="a" to="/tooltip" replace>
              <q-item-side icon="school" />
              <q-item-main label="Tooltip" sublabel="Tooltip" />
          </q-side-link>
        </q-collapsible>

        <!-- GROUPS -->
        <q-collapsible indent icon="school" label="Groups" >

          <q-side-link item tag="a" to="/cards" replace>
              <q-item-side icon="school" />
              <q-item-main label="Cards" sublabel="Cards" />
          </q-side-link>

          <q-side-link item tag="a" to="/collapsible" replace>
              <q-item-side icon="school" />
              <q-item-main label="Collapsible" sublabel="+ Accordion" />
          </q-side-link>

          <q-side-link item tag="a" to="/datatable" replace>
              <q-item-side icon="school" />
              <q-item-main label="Data Table" sublabel="Data Table" />
          </q-side-link>

          <q-side-link item tag="a" to="/htmltables" replace>
              <q-item-side icon="school" />
              <q-item-main label="HTML Tables" sublabel="HTML Tables" />
          </q-side-link>

          <q-side-link item tag="a" to="/lists" replace>
              <q-item-side icon="school" />
              <q-item-main label="Lists" sublabel="and List Items" />
          </q-side-link>

          <q-side-link item tag="a" to="/carousel" replace>
              <q-item-side icon="school" />
              <q-item-main label="Carousel" sublabel="using slides" />
          </q-side-link>

          <q-side-link item tag="a" to="/stepper" replace>
              <q-item-side icon="school" />
              <q-item-main label="Stepper" sublabel="Progress Stepper" />
          </q-side-link>

        </q-collapsible>



        <!-- PROGRESS -->
        <q-collapsible indent icon="school" label="Progress" >

          <q-side-link item tag="a" to="/ajaxbar" replace>
              <q-item-side icon="school" />
              <q-item-main label="AJAX Bar" sublabel="AJAX Loading Bar" />
          </q-side-link>

          <q-side-link item tag="a" to="/loading" replace>
              <q-item-side icon="school" />
              <q-item-main label="Loading" sublabel="Loading Spinner" />
          </q-side-link>

          <q-side-link item tag="a" to="/progressbar" replace>
              <q-item-side icon="school" />
              <q-item-main label="Progress Bar" sublabel="QProgress" />
          </q-side-link>

          <q-side-link item tag="a" to="/spinner" replace>
              <q-item-side icon="school" />
              <q-item-main label="Spinners" sublabel="Progress Spinners" />
          </q-side-link>
        </q-collapsible>



        <!-- ACTIONS -->
        <q-collapsible indent icon="school" label="Actions" >

          <q-side-link item tag="a" to="/panning" replace>
              <q-item-side icon="school" />
              <q-item-main label="Panning" sublabel="Panning Actions" />
          </q-side-link>

          <q-side-link item tag="a" to="/swiping" replace>
              <q-item-side icon="school" />
              <q-item-main label="Swiping" sublabel="Touch Swipe Action" />
          </q-side-link>

          <q-side-link item tag="a" to="/touch-hold" replace>
              <q-item-side icon="school" />
              <q-item-main label="Touch Hold" sublabel="Touch Hold Action" />
          </q-side-link>
        </q-collapsible>


        <!-- Media -->
        <q-collapsible indent icon="school" label="Media" >
          <q-side-link item tag="a" to="/image-gallery" replace>
              <q-item-side icon="school" />
              <q-item-main label="Image Gallery" sublabel="Image Gallery" />
          </q-side-link>

          <q-side-link item tag="a" to="/parallax" replace>
              <q-item-side icon="school" />
              <q-item-main label="Parallax" sublabel="Parallax Scrolling" />
          </q-side-link>

          <q-side-link item tag="a" to="/video" replace>
              <q-item-side icon="school" />
              <q-item-main label="Video" sublabel="Video Embedding" />
          </q-side-link>
        </q-collapsible>


        <!-- Animation -->
        <q-collapsible indent icon="school" label="Animations" >

          <q-side-link item tag="a" to="transitions" replace>
              <q-item-side icon="school" />
              <q-item-main label="Transitions" sublabel="Transitional Animations" />
          </q-side-link>

          <q-side-link item tag="a" to="slide-transition" replace>
              <q-item-side icon="school" />
              <q-item-main label="Slide Transition" sublabel="Slides Component Up/Down" />
          </q-side-link>

          <q-side-link item tag="a" to="js-animations" replace>
              <q-item-side icon="school" />
              <q-item-main label="JS Animations" sublabel="Creating Animations with JS" />
          </q-side-link>

          <q-side-link item tag="a" to="css-helpers" replace>
              <q-item-side icon="school" />
              <q-item-main label="CSS Helpers" sublabel="Animation CSS Helpers" />
          </q-side-link>

        </q-collapsible>


        <!-- Others -->
        <q-collapsible indent icon="school" label="Others" >

          <q-side-link item tag="a" to="more-chips" replace>
              <q-item-side icon="school" />
              <q-item-main label="More Chips" sublabel="More Chips Examples" />
          </q-side-link>

          <q-side-link item tag="a" to="chat" replace>
              <q-item-side icon="school" />
              <q-item-main label="Chat" sublabel="Chat Component" />
          </q-side-link>

          <q-side-link item tag="a" to="tree" replace>
              <q-item-side icon="school" />
              <q-item-main label="Tree" sublabel="Tree Component" />
          </q-side-link>

        </q-collapsible>


        <!-- Utils -->
        <q-collapsible indent icon="school" label="Utils" >

          <q-side-link item tag="a" to="js-date" replace>
              <q-item-side icon="school" />
              <q-item-main label="JS Date" sublabel="JS Date Utility" />
          </q-side-link>

          <q-side-link item tag="a" to="dom" replace>
              <q-item-side icon="school" />
              <q-item-main label="DOM" sublabel="DOM Utils" />
          </q-side-link>

          <q-side-link item tag="a" to="formatter" replace>
              <q-item-side icon="school" />
              <q-item-main label="Formatter" sublabel="Formatter Utils" />
          </q-side-link>

          <q-side-link item tag="a" to="other-utils" replace>
              <q-item-side icon="school" />
              <q-item-main label="Other Utils" sublabel="Other Utils" />
          </q-side-link>

        </q-collapsible>


        <!-- Web API Wrappers -->
        <q-collapsible indent icon="school" label="Web API" opened >

          <q-side-link item tag="a" to="cookies" replace>
              <q-item-side icon="school" />
              <q-item-main label="Cookies" sublabel="Cookies" />
          </q-side-link>

          <q-side-link item tag="a" to="web-storage" replace>
              <q-item-side icon="school" />
              <q-item-main label="Web Storage" sublabel="Web Storage" />
          </q-side-link>

          <q-side-link item tag="a" to="app-visibility" replace>
              <q-item-side icon="school" />
              <q-item-main label="App Visibility" sublabel="App Visibility" />
          </q-side-link>


        </q-collapsible>

      </q-list>




      <!-- Collapsibles -->
      <q-collapsible indent icon="event" label="Q-Collapsible">
        <q-side-link item to="/community/events" replace>
          <q-item-side>
            <i class="fa fa-book"></i>
          </q-item-side>
          <q-item-main label="Meet-ups" />
        </q-side-link>

        <q-side-link item to="/community/gatherings" replace>
          <q-item-side>
            <i class="fa fa-users"></i>
          </q-item-side>
          <q-item-main label="Gatherings" />
        </q-side-link>

        <q-collapsible indent icon="menu" label="Competitions" opened>
          <div class="scroll" style="max-height: 400px">
            <q-side-link
              item
              v-for="competition in competitions"
              :key="competition.id"
              :to="`/community/competitions/${competition.name}`"
            >
              <q-item-side>
                <i class="fa fa-trophy"></i>
              </q-item-side>
              <q-item-main :label="competition.name" />
            </q-side-link>
          </div>
        </q-collapsible>

        <q-side-link item to="/community/other-info">
          <q-item-side icon="info outline"></q-item-side>
          <q-item-main label="Other Information" />
        </q-side-link>

      </q-collapsible>
    </div>




    <!-- Render Components -->
    <router-view />




    <!-- BreadCrumbs -->
    <!-- <q-fixed-position corner="bottom-right" :offset="[75, 0]">
      <ul class="breadcrumb">
        <li>
          <router-link to="/" replace >
            <q-icon name="home" /> Home
          </router-link>
        </li>
        <li>
          <router-link to="/about" replace>
            <q-icon name="mail" /> About
          </router-link>
        </li>
        <li>
          <router-link to="/contact" replace>
            <q-icon name="cloud" /> Contact
          </router-link>
        </li>
      </ul>
    </q-fixed-position> -->




    <!-- Footer -->
    <q-toolbar slot="footer">
      <q-toolbar-title>
        Layout Footer
      </q-toolbar-title>
    </q-toolbar>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      competitions: [
        {id: 1, name: 'Coding'},
        {id: 2, name: 'Design'},
        {id: 3, name: 'Hacking'}
      ]
    }
  },
  methods: {
    method () {
      console.log('Hello!')
    },
    popup (scroll) {
      // console.log(scroll)
      // alert('Hello There!')
    },
    openPanels () {
      // this.$refs.layout.toggleLeft()
      this.$refs.layout.toggleRight()
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~variables'

  // Custom background class applied to left-drawer
  .bg-left
    background: yellow

  // Applies class to exact-active routes!!!
  .router-link-exact-active
    color lime
</style>
