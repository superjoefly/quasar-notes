<template>
  <div class="layout-padding" style="width: 500px; max-width: 90vw ">
    <p class="text-bold">Scroll Observable</p>
    <div>
      <p class="caption">class="scroll"</p>
      <div class="scroll" style="height: 300px">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore et provident consequuntur omnis quis possimus quos, fugit sapiente illo, praesentium, asperiores blanditiis fuga. Ab enim earum, facere, cupiditate in voluptate.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore et provident consequuntur omnis quis possimus quos, fugit sapiente illo, praesentium, asperiores blanditiis fuga. Ab enim earum, facere, cupiditate in voluptate.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore et provident consequuntur omnis quis possimus quos, fugit sapiente illo, praesentium, asperiores blanditiis fuga. Ab enim earum, facere, cupiditate in voluptate.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore et provident consequuntur omnis quis possimus quos, fugit sapiente illo, praesentium, asperiores blanditiis fuga. Ab enim earum, facere, cupiditate in voluptate.</p>

        <!-- Searches for element with class="scroll" and emits event if that element is scrolled. If the element with class="scroll" is not found, it assumes the document as the element to detect scroll on -->
        <p class="caption">q-scroll-observable</p>
        <q-scroll-observable @scroll="hasScrolled" />
        <!-- example with `v-scroll` directive -->
        <!-- <div v-scroll="scrollHandler">...</div> -->
      </div>
    </div>

    <br><br>
    <hr><hr>

    <p class="text-bold">Example using q-scroll-area</p>

    <q-scroll-area style="width: 300px; height: 500px; padding: 10px" class="bg-yellow">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eius cumque repellat in cum incidunt nihil, explicabo ipsa dignissimos porro perferendis? Reprehenderit quis explicabo eaque consequuntur porro voluptatum, cumque aspernatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eius cumque repellat in cum incidunt nihil, explicabo ipsa dignissimos porro perferendis? Reprehenderit quis explicabo eaque consequuntur porro voluptatum, cumque aspernatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eius cumque repellat in cum incidunt nihil, explicabo ipsa dignissimos porro perferendis? Reprehenderit quis explicabo eaque consequuntur porro voluptatum, cumque aspernatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eius cumque repellat in cum incidunt nihil, explicabo ipsa dignissimos porro perferendis? Reprehenderit quis explicabo eaque consequuntur porro voluptatum, cumque aspernatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eius cumque repellat in cum incidunt nihil, explicabo ipsa dignissimos porro perferendis? Reprehenderit quis explicabo eaque consequuntur porro voluptatum, cumque aspernatur.</p>
      <q-scroll-observable @scroll="hasScrolled"></q-scroll-observable>
    </q-scroll-area>

    <br><br>
    <hr><hr>

    <p class="text-bold">Directive "v-scroll"</p>
    <p class="caption">Fires when user scrolls the page containing DOM node with v-scroll.</p>

    <div v-scroll="scrolled" style="height: 300px; width: 300px; overflow: auto;">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi recusandae ipsa quam repellat voluptates sint sapiente, doloribus aspernatur cupiditate autem! Nulla ipsum eligendi sit consequatur consequuntur magni cum dolorum sed.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi recusandae ipsa quam repellat voluptates sint sapiente, doloribus aspernatur cupiditate autem! Nulla ipsum eligendi sit consequatur consequuntur magni cum dolorum sed.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi recusandae ipsa quam repellat voluptates sint sapiente, doloribus aspernatur cupiditate autem! Nulla ipsum eligendi sit consequatur consequuntur magni cum dolorum sed.</p>
    </div>

    <div class="bg-teal text-white fixed" style="height: 100px; width: 100px; bottom: 75px; right: 25px; z-index: 1" v-if="isShown">Hello!</div>

    <br><br>
    <hr><hr>

    <p class="text-bold">Infinite Scrolling (see InfiniteScroll.vue)</p>

    <br><br>
    <hr><hr>

    <p class="text-bold">Scroll Area</p>

    <q-scroll-area style="width: 300px; height: 300px;"
      :thumb-style="{
        right: '4px',
        borderRadius: '5px',
        background: 'lime',
        width: '10px',
        opacity: 1
        }"
      :delay="3000">
      <div v-for="n in 10" class="layout-padding">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, necessitatibus.
        <br />
      </div>
    </q-scroll-area>

    <br><br>
    <hr><hr>

    <p class="text-bold">Scroll Fire</p>

    <q-scroll-area style="width: 300px; height: 500px;" class="bg-purple-1">
      <div class="layout-padding">
        <p class="caption">
          Scroll Down to see the Bounce Effect when target comes into view...
        </p>
        <p v-for="n in 6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, architecto.
        </p>
        <p class="text-center">
          <img v-scroll-fire="bounceImage" src="~assets/quasar-logo-full.svg" style="width: 200px" />
        </p>
      </div>
    </q-scroll-area>


  </div>
</template>

<script>
  import { debounce, ScrollFire } from 'quasar'
  export default {
    directives: {
      ScrollFire
    },
    debounce,
    data: () => ({
      isShown: false
    }),
    methods: {
      hasScrolled (scroll) {
        console.log(scroll)
      },
      // import debounce above
      scrolled: debounce(function (e, position) {
        console.log('Hello')
        this.isShown = true
        setTimeout(() => {
          this.isShown = false
        }, 3000)
      }, 300),
      // Bounce Image
      bounceImage (el) {
        el.classList.add('animate-bounce')
        setTimeout(() => {
          if (document.body.contains(el)) {
            el.classList.remove('animate-bounce')
          }
        }, 2000)
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
