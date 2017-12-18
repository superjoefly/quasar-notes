<template>
  <div class="layout-padding">
    <p class="text-bold">DOM Utils</p>

    <p>Tree-Shaking</p>
    <pre><code class="language-js">
      import { dom } from 'quasar'
      // Destructuring (tree-shaking)
      const { offset } = dom
      const { style } = dom
      const { height, width } = dom
      const { css } = dom
      const { viewport } = dom
      const { ready } = dom
      const { cssTransform } = dom

      computed: {
        // Grab the element
        container () {
          return document.getElementById('container')
        }
      },

      mounted () {
        console.log(offset(window)) // {top: 0, left: 0}
        // Offset relative to DOM
        console.log('---------')
        console.log(offset(this.container))
        // {top: 140, left: 696}

        // Offset defined on element
        console.log('---------')
        console.log(this.$refs.container.offset)
        // [18, 18]

        // Return computed browser style (height of element)
        console.log('---------')
        console.log(style(this.container, 'height'))
        // 56px

        // Get Height / Width
        console.log('---------')
        console.log(
          height(this.container),
          width(this.container)
        )

        // Apply CSS to DOM Node
        css(this.container, {
          backgroundColor: 'red',
          padding: 5 + 'px',
          borderRadius: 50 + '%'
        })

        // Get Viewport Dimensions
        console.log('---------')
        console.log(viewport())

        // Execute when DOM is 'ready'
        console.log('---------')
        ready(function () {
          console.log('Ready!')
        })

        // Get Crossbrowser CSS Transform Property
        let props = cssTransform('rotateY(45deg)')
        console.log(props)

        // Apply CSS Transform to Container
        css(this.container, props)
      }
    </code></pre>

    <p id="test"></p>

    <q-fixed-position corner="top-right" :offset="[18, 18]" id="container" ref="container">
      <q-btn round color="primary" @click="alert" icon="alarm" />
    </q-fixed-position>

  </div>
</template>

<script>
  import { dom } from 'quasar'
  // Destructuring (tree-shaking)
  const { offset } = dom
  const { style } = dom
  const { height, width } = dom
  const { css } = dom
  const { viewport } = dom
  const { ready } = dom
  const { cssTransform } = dom

  export default {
    data: () => ({

    }),
    methods: {
      alert () {
        alert('Hello there!')
      }
    },
    computed: {
      // Grab the element
      container () {
        return document.getElementById('container')
      }
    },
    mounted () {
      console.log(offset(window)) // {top: 0, left: 0}
      // Offset relative to DOM
      console.log('---------')
      console.log(offset(this.container))
      // {top: 140, left: 696}

      // Offset defined on element
      console.log('---------')
      console.log(this.$refs.container.offset)
      // [18, 18]

      // Return computed browser style (height of element)
      console.log('---------')
      console.log(style(this.container, 'height'))
      // 56px

      // Get Height / Width
      console.log('---------')
      console.log(
        height(this.container),
        width(this.container)
      )

      // Apply CSS to DOM Node
      css(this.container, {
        backgroundColor: 'red',
        padding: 5 + 'px',
        borderRadius: 50 + '%'
      })

      // Get Viewport Dimensions
      console.log('---------')
      console.log(viewport())

      // Execute when DOM is 'ready'
      console.log('---------')
      ready(function () {
        console.log('Ready!')
      })

      // Get Crossbrowser CSS Transform Property
      let props = cssTransform('rotateY(45deg)')
      console.log(props)

      // Apply CSS Transform to Container
      css(this.container, props)
    }
  }
</script>

<style lang="stylus" scoped>

</style>
