<template>
  <div class="layout-padding">
    <p class="caption">More Chips Examples</p>

      <p class="caption">Basic Chips</p>

      <p>
        <q-chip icon="alarm" color="primary">q-chip</q-chip>
        <q-chip icon-right="alarm" color="secondary">q-chip</q-chip>
      </p>

      <p>
        <q-chip color="primary">q-chip</q-chip>
        <q-chip color="secondary" class="shadow-1">10k</q-chip>
        <q-chip small color="tertiary" class="shadow-1">10k</q-chip>
        <q-chip icon="alarm" color="primary">
          q-chip
        </q-chip>
        <q-chip icon-right="alarm" color="primary">
          q-chip
        </q-chip>
        <q-chip icon="alarm" icon-right="alarm" color="secondary">q-chip</q-chip>
        <q-chip color="primary" class="shadow-1">10k</q-chip>
      </p>

      <p>
        <q-chip square color="secondary">square</q-chip>
        <q-chip square color="primary" class="shadow-1">shadow</q-chip>
        <q-chip square small color="tertiary" class="shadow-1">small</q-chip>
        <q-chip square icon="alarm" color="primary">
          icon
        </q-chip>
        <q-chip icon-right="alarm" square color="secondary">icon-right</q-chip>
      </p>

      <p class="caption">Floating Label Chips</p>
      <p>
        <q-btn round color="light" class="text-black relative-position">Inbox
          <q-chip floating color="primary">22</q-chip>
        </q-btn>
          &nbsp;&nbsp;
          &nbsp;&nbsp;
        <q-btn color="pink" class="relative-position">Inbox
          <q-chip floating color="secondary">22</q-chip>
        </q-btn>
      </p>

      <p class="caption">Advanced Label Chips</p>
      <p>
        <div class="group">
          <q-chip avatar="statics/avatars/boy-avatar.png" color="grey-4" class="text-black">John</q-chip>
          <q-chip avatar="statics/avatars/guy-avatar.png" color="teal">Don</q-chip>
          <q-chip avatar="statics/avatars/boy-avatar.png" color="black">Jim</q-chip>
          <q-chip avatar="statics/avatars/guy-avatar.png" small color="brown">Bruce</q-chip>

          <br>

          <p class="caption">Closeable</p>
          <q-chip avatar="statics/avatars/boy-avatar.png" closable color="grey-4" class="text-black">John</q-chip>
          <q-chip avatar="statics/avatars/guy-avatar.png" closable color="red">Don</q-chip>
          <q-chip avatar="statics/avatars/boy-avatar.png" closable color="orange">Jim</q-chip>
          <q-chip avatar="statics/avatars/guy-avatar.png" closable small color="brown">Bruce</q-chip>

          <br>

          <q-chip color="grey-4" class="text-black">John</q-chip>
          <q-chip color="teal">Don</q-chip>
          <q-chip color="black">Jim</q-chip>
          <q-chip small color="brown">Bruce</q-chip>
        </div>
      </p>

      <p class="caption"> Tag Label Chips</p>
      <p>
        <q-chip tag icon-right="mail" color="light" class="text-black">New</q-chip>
        <q-chip tag closable color="orange">Upcoming</q-chip>
        <q-chip tag square color="primary">Featured</q-chip>
      </p>

      <p>Pointing Label Chips</p>
      <p>
        <q-chip pointing="up" color="secondary">1</q-chip>
        <q-chip pointing="down" color="secondary">2</q-chip>
        <q-chip pointing="right" color="secondary">3</q-chip>
        <q-chip pointing="left" color="secondary">4</q-chip>
      </p>

      <p>
        <q-chip square pointing="up" color="tertiary">Up</q-chip>
        <q-chip square pointing="right" color="tertiary">Right</q-chip>
        <q-chip square pointing="down" color="tertiary">Down</q-chip>
        <q-chip square pointing="left" color="tertiary">Left</q-chip>
      </p>

      <p class="caption">With Detail</p>
      <p>
        <q-chip detail icon="mail">Detail</q-chip>
      </p>


  </div>
</template>

<script>
  import { QChip, QBtn } from 'quasar'
  export default {
    components: {
      QChip, QBtn
    },
    data: () => ({

    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>
  .q-chip
    margin 5px
</style>
