<template>
  <div class="layout-padding">
    <p class="text-bold">Cookies</p>

    <pre><code class="language-js">
      import { Cookies } from 'quasar'
      console.log(Cookies)

      // Set Cookie
      Cookies.set('my_name', 'Joey', {
        expires: 5, // expires in 5 days from set
        path: '/' // make available across domain
        // secure: true // cookie transmission requres HTTPS
      })

      // Check if Set
      console.log(Cookies.has('my_name')) // true

      // Read a Cookie
      let myName = Cookies.get('my_name')
      console.log(myName)

      // Read ALL Cookies
      let cookies = Cookies.all()
      console.log(cookies)

      // Remove Cookie
      Cookies.remove('my_name')

      // Check if Removed
      console.log(Cookies.has('my_name')) // false
    </code></pre>
  </div>
</template>

<script>
  import { Cookies } from 'quasar'
  console.log(Cookies)

  // Set Cookie
  Cookies.set('my_name', 'Joey', {
    expires: 5, // expires in 5 days from set
    path: '/' // make available across domain
    // secure: true // cookie transmission requres HTTPS
  })

  // Check if Set
  console.log(Cookies.has('my_name')) // true

  // Read a Cookie
  let myName = Cookies.get('my_name')
  console.log(myName)

  // Read ALL Cookies
  let cookies = Cookies.all()
  console.log(cookies)

  // Remove Cookie
  Cookies.remove('my_name')

  // Check if Removed
  console.log(Cookies.has('my_name')) // false

  export default {
    data: () => ({

    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
