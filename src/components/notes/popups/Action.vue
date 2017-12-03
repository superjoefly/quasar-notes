<template>
  <div class="layout-padding">
    <p class="text-bold">Action Sheet</p>

    <q-list style="max-width: 600px">
      <q-item link v-for="dialog in types" :key="dialog.id" @click="dialog.handler()" v-ripple.mat>
        <q-item-side icon="settings" />
        <q-item-main :label="dialog.label" />
        <q-item-side right icon="keyboard_arrow_right" />
      </q-item>
    </q-list>
  </div>
</template>

<script>
  import { ActionSheet, Toast } from 'quasar'

  function showActionSheetWithIcons (gallery) {
    ActionSheet.create({
      title: 'Article Actions',
      gallery: 'gallery',
      actions: [
        {
          label: 'Delete',
          icon: 'delete',
          handler () {
            Toast.create('Deleted Article!')
          }
        },
        {
          label: 'Share',
          icon: 'share',
          handler () {
            Toast.create('Shared!')
          }
        },
        {
          label: 'Play',
          icon: 'gamepad',
          handler () {
            Toast.create('Launched Game!')
          }
        },
        {
          label: 'Favorite',
          icon: 'favorite',
          handler () {
            Toast.create('Added to favorites')
          }
        }
      ],
      dismiss: {
        label: 'Cancel',
        handler () {
          Toast.create('Cancelled...')
        }
      }
    })
  }

  function showActionSheetWithAvatar (gallery) {
    ActionSheet.create({
      title: 'Share to',
      gallery: 'gallery',
      actions: [
        {
          label: 'Joe',
          avatar: require('../../../assets/linux-avatar.png'),
          handler () {
            Toast.create('Shared to Joe!')
          }
        },
        {
          label: 'John',
          avatar: require('../../../assets/boy-avatar.png'),
          handler () {
            Toast.create('Shared to John!')
          }
        },
        {
          label: 'Jim',
          avatar: require('../../../assets/linux-avatar.png'),
          handler () {
            Toast.create('Shared to Jim!')
          }
        },
        {
          label: 'Jack',
          avatar: require('../../../assets/guy-avatar.png'),
          handler () {
            Toast.create('Shared to Jack!')
          }
        }
      ],
      dismiss: {
        label: 'Cancel',
        handler () {
          Toast.create('Cancelled...')
        }
      }
    })
  }

  export default {
    data: () => ({
      types: [
        {
          id: 1,
          label: 'List with Icons',
          handler () {
            showActionSheetWithIcons()
          }
        },
        {
          id: 2,
          label: 'Gallery with Icons',
          handler () {
            showActionSheetWithIcons(true)
          }
        },
        {
          id: 3,
          label: 'List with Avatars',
          handler () {
            showActionSheetWithAvatar()
          }
        },
        {
          id: 4,
          label: 'Gallery with Avatars',
          handler () {
            showActionSheetWithAvatar(true)
          }
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
