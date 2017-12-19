<template>
  <div class="layout-padding" style="width: 500px; max-width: 90vw; margin: auto;">
    <p class="text-bold">Inline Datetime</p>
    <p>Date:</p>
    <q-inline-datetime v-model="date1" type="date" />

    <hr><hr>
    <br><br>

    <p>Time:</p>
    <q-inline-datetime color="teal" v-model="date1" type="time" />

    <hr><hr>
    <br><br>

    <p>Time 24hr Format</p>
    <q-inline-datetime color="orange" v-model="date1" type="time" format24h />

    <hr><hr>
    <br><br>

    <p>Date and Time</p>
    <q-inline-datetime color="secondary" v-model="date1" type="datetime" />

    <hr><hr>
    <br><br>

    <p>Set First Day of Week</p>
    <q-inline-datetime color="black" v-model="date1" saturday-first type="date" />

    <hr><hr>
    <br><br>

    <p>Disabled State</p>
    <q-inline-datetime color="purple" disable v-model="date1" type="datetime" />

    <hr><hr>
    <br><br>

    <p>Readonly State</p>
    <q-inline-datetime color="brown" readonly v-model="date1" type="datetime" />

    <hr><hr>
    <br><br>

    <p>Set Min and Max</p>
    <q-inline-datetime color="green" type="datetime" v-model="minMaxModel" :min="min" :max="max" />



  </div>
</template>

<script>
  import { date } from 'quasar'
  const today = new Date()
  const { addToDate, subtractFromDate } = date

  export default {
    data: () => ({
      date1: new Date(),
      minMaxModel: today,
      min: subtractFromDate(today, {days: 5}),
      max: addToDate(today, {days: 4, month: 1, minutes: 10})
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
