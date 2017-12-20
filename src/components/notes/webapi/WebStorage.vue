<template>
  <div class="layout-padding">
    <p class="text-bold">Web Storage</p>
    <p class="caption">View results in console...</p>

    <pre><code class="language-js">
      import { LocalStorage, SessionStorage } from 'quasar'

      // Setting Data
      LocalStorage.set('first_name', 'John')
      SessionStorage.set('last_name', 'Doe')

      // Retrieving Data
      console.log(LocalStorage.get.item('first_name'))
      console.log(SessionStorage.get.item('last_name'))

      // Retrieve ALL Items
      console.log(LocalStorage.get.all())
      console.log(SessionStorage.get.all())

      // Iterating through Store

      // Get Length of Store
      console.log(LocalStorage.get.length())
      console.log(SessionStorage.get.length())

      // Get Item at Index
      console.log(LocalStorage.get.index(0))
      console.log(SessionStorage.get.index(0))

      // Loop through Store
      console.log(LocalStorage.get.all()) // object
      let store = LocalStorage.get.all() // object
      for (var key in store) {
        if (store.hasOwnProperty(key)) {
          console.log(key + ' : ' + store[key])
        }
      }

      // Removing Data
      LocalStorage.remove('first_name')
      SessionStorage.remove('last_name')

      // Check if Removed
      console.log(LocalStorage.get.item('first_name')) // null
      console.log(SessionStorage.get.item('last_name')) // null

      // Check if Store is Empty
      console.log(LocalStorage.isEmpty())
      console.log(SessionStorage.isEmpty())

      // Check if Key Exists in Store
      console.log(LocalStorage.has('first_name')) // false
      console.log(SessionStorage.has('last_name')) // false
    </code></pre>
  </div>
</template>

<script>
  import { LocalStorage, SessionStorage } from 'quasar'

  // Setting Data
  LocalStorage.set('first_name', 'John')
  SessionStorage.set('last_name', 'Doe')

  // Retrieving Data
  console.log(LocalStorage.get.item('first_name'))
  console.log(SessionStorage.get.item('last_name'))

  // Retrieve ALL Items
  console.log(LocalStorage.get.all())
  console.log(SessionStorage.get.all())

  // Iterating through Store

  // Get Length of Store
  console.log(LocalStorage.get.length())
  console.log(SessionStorage.get.length())

  // Get Item at Index
  console.log(LocalStorage.get.index(0))
  console.log(SessionStorage.get.index(0))

  // Loop through Store
  console.log(LocalStorage.get.all()) // object
  let store = LocalStorage.get.all() // object
  for (var key in store) {
    if (store.hasOwnProperty(key)) {
      console.log(key + ' : ' + store[key])
    }
  }

  // Removing Data
  LocalStorage.remove('first_name')
  SessionStorage.remove('last_name')

  // Check if Removed
  console.log(LocalStorage.get.item('first_name')) // null
  console.log(SessionStorage.get.item('last_name')) // null

  // Check if Store is Empty
  console.log(LocalStorage.isEmpty())
  console.log(SessionStorage.isEmpty())

  // Check if Key Exists in Store
  console.log(LocalStorage.has('first_name')) // false
  console.log(SessionStorage.has('last_name')) // false

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
