<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
         <span class="desktop-only">Click</span>
         <span class="mobile-only">Tap</span>
         on items to expand/contract and especially on "Item 1.3"
         to trigger an event.
       </p>
       <p class="caption">
         Trees are stripped of any design by default so they can be styled however you want...
       </p>

       <q-tree :model="treeModel" contract-html="<i class='material-icons'>remove_circle</i>" expand-html="<i class='material-icons'>add_circle</i>"  />
    </div>
  </div>
</template>

<script>
  import { QTree, Toast } from 'quasar'
  export default {
    components: {
      QTree, Toast
    },
    data: () => ({
      treeModel: [
        {
          title: 'Item 1',
          expanded: true,
          icon: 'alarm',
          children: [
            {
              title: 'Item 1.1',
              expanded: false,
              children: [
                {
                  title: 'Item 1.1.1',
                  expanded: false,
                  children: [
                    {
                      title: 'Item 1.1.1.1',
                      expanded: false,
                      children: []
                    }
                  ]
                },
                {
                  title: 'Item 1.1.2',
                  expanded: false,
                  children: []
                }
              ]
            },
            {
              title: 'Item 1.2',
              expanded: false,
              children: []
            },
            {
              title: 'Item 1.3',
              expanded: false,
              handler () {
                Toast.create('Tapped on item 1.3')
              },
              children: []
            }
          ]
        },
        {
          title: 'Item 2',
          expanded: false,
          icon: 'mail',
          children: [
            {
              title: 'Item 2.1',
              expanded: false,
              children: [
                {
                  title: 'Item 2.1.1',
                  expanded: false,
                  children: []
                },
                {
                  title: 'Item 2.1.2',
                  expanded: false,
                  children: [
                    {
                      title: 'Item 2.1.2.1',
                      expanded: false,
                      children: []
                    },
                    {
                      title: 'Item 2.1.2.2',
                      expanded: false,
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              title: 'Item 2.2',
              expanded: false,
              children: []
            },
            {
              title: 'Item 2.3',
              expanded: false,
              children: []
            }
          ]
        }
      ]
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
