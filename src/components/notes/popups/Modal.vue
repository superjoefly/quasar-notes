<template>
  <div class="layout-padding">
    <p class="text-bold">Modal</p>

    <q-list style="max-width: 600px">
      <q-list-header>Open Modals Here</q-list-header>
      <q-item link v-for="modal in modals" :key="modal.label" @click="$refs[modal.ref].open()" v-ripple.mat>
        <q-item-side icon="open_in_new" />
        <q-item-main :label="modal.label" />
        <q-item-side right icon="keyboard_arrow_right" />
      </q-item>

      <q-item-separator />
      <q-item-separator />

      <q-list-header>Appear from Edges</q-list-header>
      <q-item link v-for="position in ['top', 'bottom', 'left', 'right']" :key="position" @click="openSpecialPosition(position)" v-ripple.mat>
        <q-item-side icon="open_in_new" />
        <q-item-main :label="`Modal from ${position}`" />
        <q-item-side right icon="keyboard_arrow_right" />
      </q-item>
    </q-list>

    <!-- Basic Modal -->
      <q-modal ref="basicModal" :content-css="{padding: '50px', minWidth: '50vw'}">
        <p v-for="n in 15">Scroll down to close</p>
        <q-btn color="primary" @click="$refs.basicModal.close()">Close</q-btn>
      </q-modal>



    <!-- Events Modal -->
    <q-modal ref="eventsModal" @open="notify('open')" @escape-key="notify('escape-key')" @close="notify('close')" :content-css="{padding: '50px', minWidth: '50vw'}">
      <h4>Modal with Events</h4>
      <p v-for="n in 15">Scroll down to close</p>
      <q-btn color="secondary" @click="$refs.eventsModal.close()">Close</q-btn>
    </q-modal>


    <!-- Layout Modal -->

    <!-- Begin Modal -->
    <q-modal ref="layoutModal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
      <!-- Begin Layout -->
      <q-modal-layout>
        <!-- Header1 -->
        <q-toolbar slot="header">
          <q-btn flat @click="$refs.layoutModal.close()">
            <q-icon name="keyboard_arrow_left" />
          </q-btn>
          <q-toolbar-title>
            Header
          </q-toolbar-title>
        </q-toolbar>

        <!-- Header2 Searchbar -->
        <q-toolbar slot="header">
          <q-search inverted v-model="search" color="none"></q-search>
        </q-toolbar>

        <!-- Main Content -->
        <div class="layout-padding">
          <h1>Modal</h1>
          <q-btn color="primary" @click="$refs.layoutModal.close()">Close</q-btn>
          <p class="caption" v-for="n in 15">This is a Modal presenting a Layout.</p>
        </div>

        <!-- Footer -->
        <q-toolbar slot="footer">
          <q-toolbar-title>
            Footer
          </q-toolbar-title>
        </q-toolbar>
      </q-modal-layout>
    </q-modal>



    <!-- Minimized Modal -->
    <q-modal ref="minimizedModal" minimized :content-css="{padding: '50px'}">
      <h4>Minimized Modal</h4>
      <p>This one has backdrop on small screens too...</p>
      <q-btn color="orange" @click="$refs.minimizedModal.close()">Close</q-btn>
    </q-modal>



    <!-- Maximized Modal -->
    <q-modal ref="maximizedModal" maximized :content-css="{padding: '50px'}">
      <h4>Maximized Modal</h4>
      <p>This one is maximized on bigger screens too...</p>
      <q-btn color="purple" @click="$refs.maximizedModal.close()">Close</q-btn>
    </q-modal>



    <!-- PositionModal -->
    <q-modal ref="positionModal" :position="position" :content-css="{padding: '20px'}">
      <h4>Positioned Modal</h4>
      <p>This one gets displayed from {{position}}</p>
      <q-btn color="teal" @click="$refs.positionModal.close()">Close</q-btn>
    </q-modal>


  </div>
</template>

<script>
  import { Toast, Ripple, QModal, QModalLayout } from 'quasar'
  export default {
    components: {
      QModal, QModalLayout
    },
    directives: {
      Ripple
    },
    data: () => ({
      search: '',
      modals: [
        {
          label: 'Basic',
          ref: 'basicModal'
        },
        {
          label: 'Basic with Events',
          ref: 'eventsModal'
        },
        {
          label: 'With Layout',
          ref: 'layoutModal'
        },
        {
          label: 'Always Minimized',
          ref: 'minimizedModal'
        },
        {
          label: 'Always Maximized',
          ref: 'maximizedModal'
        }
      ],
      position: 'bottom'
    }),
    methods: {
      notify (eventName) {
        Toast.create(`Event "${eventName}" was triggered`)
      },
      openSpecialPosition (position) {
        this.position = position
        this.$nextTick(() => {
          this.$refs.positionModal.open()
        })
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
