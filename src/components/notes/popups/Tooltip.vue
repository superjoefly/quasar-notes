<template>
  <div class="layout-padding">
    <p class="text-bold">Tooltip</p>

    <span class="desktop-only">
      Move mouse over the elements below...
    </span>
    <span class="mobile-only">
      Tap the elements below...
    </span>

    <hr><hr>
    <br><br>

    <div class="bg-secondary text-white round-borders row flex-center" style="margin-top: 40px; width: 200px; height: 70px">
      Once Second Delay
      <q-tooltip :delay="1000" :offset="[0, 10]">Quasar Rocks!</q-tooltip>
    </div>

    <hr><hr>
    <br><br>

    <p>With Offset</p>
    <div class="group">
      <q-btn color="indigo">
        Top
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
          Tooltip on top
          <q-icon name="keyboard_arrow_up" />
        </q-tooltip>
      </q-btn>
      <q-btn color="teal">
        Right
        <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
          Tooltip on right
          <q-icon name="keyboard_arrow_right" />
        </q-tooltip>
      </q-btn>
      <q-btn color="green">
        Left
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
          Tooltip on left
          <q-icon name="keyboard_arrow_left" />
        </q-tooltip>
      </q-btn>
      <q-btn color="purple">
        Down
        <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
          Tooltip on bottom
          <q-icon name="keyboard_arrow_down" />
        </q-tooltip>
      </q-btn>
    </div>

    <hr><hr>
    <br><br>

    <q-card style="margin-top: 75px">
      <q-card-title class="bg-primary text-center">
        <q-btn push color="orange">
          Mouse Over

          <q-tooltip :anchor="anchor" :self="self">
            <div>Quasar Rocks!</div>
            <div class="text-center">Try It!</div>
          </q-tooltip>
        </q-btn>
      </q-card-title>

      <p class="caption" text-center>Configure the Tooltip Above</p>
      <p class="text-center">
        <q-chip tag color="primary">anchor = "{{anchor}}"</q-chip>
        <q-chip tag color="primary">self = "{{self}}"</q-chip>
      </p>

      <q-card-main class="row">
        <div class="column items-center col-6">
          <p class="caption">Anchor Origin</p>
          <div class="flex">
            <div class="column-group">
              <div>Vertical</div>
              <q-radio v-model="anchorOrigin.vertical" val="top" label="Top" />
              <q-radio v-model="anchorOrigin.vertical" val="center" label="Center" />
              <q-radio v-model="anchorOrigin.vertical" val="bottom" label="Bottom" />
            </div>
            <div class="column-group">
              <div>Horizontal</div>
              <q-radio v-model="anchorOrigin.horizontal" val="left" label="Left" />
              <q-radio v-model="anchorOrigin.horizontal" val="middle" label="Middle" />
              <q-radio v-model="anchorOrigin.horizontal" val="right" label="Right" />
            </div>
          </div>
        </div>

        <div class="column items-center col-6">
          <p class="caption">Self Origin</p>
          <div class="flex">
            <div class="column group">
              <div>Vertical</div>
              <q-radio v-model="selfOrigin.vertical" val="top" label="Top" />
              <q-radio v-model="selfOrigin.vertical" val="center" label="Center" />
              <q-radio v-model="selfOrigin.vertical" val="bottom" label="Bottom" />
            </div>
            <div class="column group">
              <div>Horizontal</div>
              <q-radio v-model="selfOrigin.horizontal" val="left" label="Left" />
              <q-radio v-model="selfOrigin.horizontal" val="middle" label="Middle" />
              <q-radio v-model="selfOrigin.horizontal" val="right" label="Right" />
            </div>
          </div>
        </div>
      </q-card-main>
    </q-card>

  </div>
</template>

<script>
  import { QCard, QCardTitle, QCardMain } from 'quasar'

  export default {
    components: {
      QCard, QCardTitle, QCardMain
    },
    data: () => ({
      anchorOrigin: {vertical: 'bottom', horizontal: 'middle'},
      selfOrigin: {vertical: 'top', horizontal: 'middle'}
    }),
    methods: {

    },
    computed: {
      anchor () {
        return `${this.anchorOrigin.vertical} ${this.anchorOrigin.horizontal}`
      },
      self () {
        return `${this.selfOrigin.vertical} ${this.selfOrigin.horizontal}`
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
