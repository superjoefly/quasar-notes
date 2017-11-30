<template>
  <div class="layout-padding">
    <p class="text-bold">Toggle</p>

    <p>Standard</p>
    <q-toggle v-model="check1" />
    <small>{{check1}}</small>

    <hr><hr>
    <br><br>

    <p>With Label</p>
    <q-toggle v-model="check2" color="secondary" label="Tick Me!" />

    <hr><hr>
    <br><br>

    <p>Label on Left</p>
    <q-toggle v-model="check3" color="orange" label="Left Label" left-label />

    <hr><hr>
    <br><br>

    <p>Custom Icon</p>
    <q-toggle v-model="check4" color="lime" checked-icon="sentiment very satisfied" unchecked-icon="sentiment very dissatisfied" />

    <br><br>

    <q-toggle v-model="check5" color="green" checked-icon="visibility" unchecked-icon="visibility_off" />

    <hr><hr>
    <br><br>

    <p>With Array as Model</p>
    <q-chip square color="purple">Model: {{checkArray}}</q-chip>
    <br><br>
    <q-toggle v-model="checkArray" label="One" color="yellow" val="one" />
    <q-toggle v-model="checkArray" label="Two" color="green" val="two" />
    <q-toggle v-model="checkArray" label="Three" color="blue" val="three" />

    <hr><hr>
    <br><br>

    <p>Disabled</p>
    <q-toggle disable v-model="check6" label="Disabled" />

    <hr><hr>
    <br><br>

    <p>As Option Group in Field</p>
    <q-field icon="vibration" helper="Select One" label="Notifications">
      <q-option-group type="toggle" color="secondary" v-model="group" :options="options" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>In a List</p>
    <q-list link>
      <q-item tag="label">
        <q-item-main>
          <q-item-tile title>Notifications</q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-toggle v-model="list1" />
        </q-item-side>
      </q-item>
      <q-item tag="label">
        <q-item-main>
          <q-item-tile label>Notifications</q-item-tile>
          <q-item-tile sublabel>Allow Notifications</q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-toggle color="secondary" v-model="list2" />
        </q-item-side>
      </q-item>
      <q-item multiline tag="label">
        <q-item-main>
          <q-item-tile label>Notifications</q-item-tile>
          <q-item-tile sublabel lines="2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, ipsam iusto magnam illo. Odio, aliquid.</q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-toggle color="orange" v-model="list3" />
        </q-item-side>
      </q-item>
    </q-list>

  </div>
</template>

<script>
  export default {
    data: () => ({
      check1: false,
      check2: true,
      check3: false,
      check4: true,
      check5: false,
      checkArray: ['one'],
      check6: false,
      group: ['upload'],
      options: [
        { label: 'Battery Low', value: 'battery' },
        { label: 'Friend Request', value: 'friend' },
        { label: 'Picture Uploaded', value: 'upload', color: 'orange' }
      ],
      list1: true,
      list2: false,
      list3: false
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
