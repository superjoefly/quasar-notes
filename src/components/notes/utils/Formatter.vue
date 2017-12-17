<template>
  <div class="layout-padding">
    <p class="text-bold">Formatter Utils</p>

    <pre style="overflow-x: auto"><code>
      import { format } from 'quasar'
      console.log(format)
      // Destructure
      const { capitalize, humanStorageSize } = format

      // Captialize String
      console.log(capitalize('hello world!'))

      // Format to Human Readable Size
      console.log(humanStorageSize(13087))

      // Normalize Number to Interval
      const { between } = format
      console.log(between(50, 10, 20)) // 20

      // Pad String
      const { pad } = format
      console.log(pad('2', 4, '1')) // 1112
    </code></pre>
  </div>
</template>

<script>
  import { format } from 'quasar'
  console.log(format)
  // Destructure
  const { capitalize, humanStorageSize } = format

  // Captialize String
  console.log(capitalize('hello world!'))

  // Format to Human Readable Size
  console.log(humanStorageSize(13087))

  // Normalize Number to Interval
  const { between } = format
  console.log(between(50, 10, 20)) // 20

  // Pad String
  const { pad } = format
  console.log(pad('2', 4, '1')) // 1112

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
