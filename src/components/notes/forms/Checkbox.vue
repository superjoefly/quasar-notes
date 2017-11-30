<template>
  <div class="layout-padding">
    <p class="text-bold">Checkbox Inputs</p>

    <p>Standard</p>
    <q-checkbox v-model="checkOne" />
    <small>{{checkOne}}</small>

    <hr><hr>
    <br><br>

    <p>With Label</p>
    <q-checkbox v-model="checkTwo" color="secondary" label="CheckMe!" />

    <hr><hr>
    <br><br>

    <p>Lable on Left</p>
    <q-checkbox v-model="checkThree" color="amber" label="CheckMe!" left-label />

    <hr><hr>
    <br><br>

    <p>Custom Icons</p>
    <q-checkbox v-model="checkFour" checked-icon="sentiment very satisfied" unchecked-icon="sentiment very dissatisfied" />

    <br><br>

    <q-checkbox v-model="checkFive" checked-icon="visibility" unchecked-icon="visibility_off" />

    <hr><hr>
    <br><br>

    <p>With Array as Model</p>

    <q-chip square color="secondary">Model: {{checkArray}}</q-chip>
    <q-checkbox v-model="checkArray" label="One" color="yellow" val="one" />
    <q-checkbox v-model="checkArray" label="Two" color="green" val="two" />
    <q-checkbox v-model="checkArray" label="Three" color="orange" val="three" />

    <hr><hr>
    <br><br>

    <p>Disabled Checkbox</p>

    <q-checkbox v-model="checkSix" label="disabled" color="yellow" disable val="one" />

    <hr><hr>
    <br><br>

    <p>As Option Group in a Field</p>
    <q-field icon="vibration" helper="Which notification do you want to receive?" label="Notifications">
      <q-option-group type="checkbox" color="secondary" v-model="group" :options="options" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>In a List</p>
    <q-list link>
      <q-item tag="label">
        <q-item-side>
          <q-checkbox v-model="list1" />
        </q-item-side>
        <q-item-main>
          <q-item-tile>Notifications</q-item-tile>
        </q-item-main>
      </q-item>

      <q-item tag="label">
        <q-item-side>
          <q-checkbox color="secondary" v-model="list2" />
        </q-item-side>
        <q-item-main>
          <q-item-tile>Notifications</q-item-tile>
          <q-item-tile sublabel>Allow Notifications</q-item-tile>
        </q-item-main>
      </q-item>

      <q-item multiline tag="label">
        <q-item-side>
          <q-checkbox color="orange" v-model="list3" />
        </q-item-side>
        <q-item-main>
          <q-item-tile>Notifications</q-item-tile>
          <q-item-tile sublabel lines="2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo facere velit, quia delectus accusantium. Nihil!</q-item-tile>
        </q-item-main>
      </q-item>
    </q-list>
    
  </div>
</template>

<script>
  export default {
    data: () => ({
      checkOne: true,
      checkTwo: false,
      checkThree: false,
      checkFour: false,
      checkFive: false,
      checkArray: ['one'],
      checkSix: false,
      group: ['one'],
      options: [
        {label: 'Battery Low', value: 'battery', color: 'secondary'},
        {label: 'Friend Request', value: 'friend', color: 'orange'},
        {label: 'Picture Uploaded', value: 'upload', color: 'green'}
      ],
      list1: false,
      list2: true,
      list3: true
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
