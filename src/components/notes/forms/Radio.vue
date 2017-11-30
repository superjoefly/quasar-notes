<template>
  <div class="layout-padding">
    <p class="text-bold">Radio Buttons</p>

    <q-radio v-model="option" val="Red" label="Red" @blur="blur" />
    <q-radio v-model="option" val="Orange" label="Orange" @blur="blur" />
    <q-radio v-model="option" val="Blue" label="Blue" @blur="blur" />

    <br><br>

    <p>You chose: {{ option }}</p>

    <hr><hr>
    <br><br>

    <p>Checked and Unchecked Icon with @blur method</p>

    <q-radio v-model="option" val="Red" unchecked-icon="visibility_off" checked-icon="visibility" :label="visibility" @blur="blur" />

    <hr><hr>
    <br><br>

    <p>Coloring</p>

    <q-radio v-model="option" val="Orange" color="orange" :label="label" @blur="changeLabel" />

    <br><br>

    <q-radio v-model="option" val="Teal" color="teal" label="Teal" @blur="option = ''" />

    <br><br>

    <q-radio v-model="option" val="Blue-3" color="blue-3" label="Blue-3" @blur="option = ''" />

    <hr><hr>
    <br><br>

    <p>Label Position</p>

    <q-radio v-model="option" val="left label" left-label label="left-label" @blur="option = ''" />

    <hr><hr>
    <br><br>

    <p>Useage Inside List</p>

    <q-item tag="label">
      <q-item-side>
        <q-radio v-model="option" val="opt1" />
      </q-item-side>
      <q-item-main>
        <q-item-tile label>Option 1</q-item-tile>
      </q-item-main>
      <q-item></q-item>
    </q-item>

    <q-item tag="label">
      <q-item-side>
        <q-radio v-model="option" val="opt2" />
      </q-item-side>
      <q-item-main>
        <q-item-tile label>Option 2</q-item-tile>
        <q-item-tile sublabel>Allow Notifications</q-item-tile>
      </q-item-main>
    </q-item>

    <q-item tag="label">
      <q-item-side>
        <q-radio v-model="option" val="opt3" />
      </q-item-side>
      <q-item-main>
        <q-item-tile label>Option 3</q-item-tile>
        <q-item-tile sublabel>Lorem ipsum dolor sit amet!</q-item-tile>
      </q-item-main>
    </q-item>

    <p>You Chose: {{ option }}</p>

    <hr><hr>
    <br><br>

    <p>Option Group in Field</p>
    <q-field icon="vibration" helper="Pick one..." label="Notifications">

      <q-option-group
        type="radio"
        color="secondary"
        v-model="group"
        :options="options"
      />

    </q-field>

    <p>You Chose: {{group}}</p>


  </div>
</template>

<script>
  export default {
    data: () => ({
      option: '',
      visibility: 'hidden',
      label: 'Color',
      group: '',
      options: [
        { label: 'Battery', value: 'battery' },
        { label: 'Friends', value: 'friend request' },
        { label: 'Picture', value: 'picture upload', color: 'red' }
      ]
    }),
    methods: {
      // @focus does the same thing
      blur () {
        // Reset 'option' (uncheck)
        this.option = ''
        console.log('blur')
        this.visibility === 'hidden' ? this.visibility = 'visible' : this.visibility = 'hidden'
      },
      changeLabel () {
        this.option = ''
        this.label === 'Color' ? this.label = 'Orange' : this.label = 'Color'
      }
    },
    computed: {

    },
    created () {
      // Get battery info
      navigator.getBattery().then(function (battery) {
        console.log(battery)
      })
    }
  }
</script>

<style lang="stylus" scoped>

</style>
