<template>
  <div class="layout-padding">
    <p class="text-bold">Chips Input</p>

    <small>Basic Chips Input - entering text to input field will push to the chips array...</small>
    <q-chips-input v-model="chips" @keyup.enter="test" />

    <hr><hr>
    <br><br>

    <p class="text-bold">Disabled</p>
    <q-chips-input v-model="chips" disabled />

    <hr><hr>
    <br><br>

    <p class="text-bold">Chips with Floating Labels</p>
    <q-chips-input v-model="chips" float-label="My Label" />

    <hr><hr>
    <br><br>

    <p class="text-bold">Custom Placeholder</p>
    <q-chips-input v-model="chips" placeholder="Add some chips!" />

    <hr><hr>
    <br><br>

    <p class="text-bold">Error State</p>
    <q-chips-input v-model="chips" error />

    <hr><hr>
    <br><br>

    <p class="text-bold">Inside Q-Field with Error Test</p>
    <q-field icon="account_box" label="Birthday" :count="5" helper="My Helper Text" :error="isError" error-label="Please correct your input...">
      <q-chips-input v-model="chips" @keyup.enter="testError" />
    </q-field>

    <hr><hr>
    <br><br>

    <p class="text-bold">Coloring</p>
    <q-chips-input v-model="chips" color="positive" />

    <small>Inverted:</small>
    <q-chips-input v-model="chips" color="cyan" inverted />

    <small>Frame-Color / Inverted:</small>
    <q-chips-input
       inverted
       color="orange"
       frame-color="grey"
       v-model="chips"
       placeholder="Type some names"
       stack-label="Stack label & inverted"
     />

     <hr><hr>
     <br><br>

     <small>Dark Background</small>
     <div class="bg-grey-9" style="padding: 15px">
       <q-chips-input v-model="chips" dark color="yellow" />
     </div>

     <hr><hr>
     <br><br>

     <small>Inside List</small>
     <q-list>
       <q-item multiline>
         <q-item-side icon="edit" />
         <q-item-main>
           <q-chips-input v-model="chips" class="no-margin" placeholder="Add some items!"/>
         </q-item-main>
       </q-item>
     </q-list>

  </div>
</template>

<script>
  export default {
    data: () => ({
      chips: ['uno', 'due', 'tre'],
      isError: false
    }),
    methods: {
      test () {
        console.log(this.chips)
      },
      testError () {
        if (this.chips.length > 5) {
          this.isError = true
        }
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
