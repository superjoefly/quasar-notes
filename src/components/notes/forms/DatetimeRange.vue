<template>
  <div class="layout-padding">
    <p class="text-bold">Datetime Range</p>

    <p>Date Range</p>
    <q-datetime-range v-model="range1" class="full-width" />

    <hr><hr>
    <br><br>

    <p>Time Range</p>
    <q-datetime-range v-model="range1" type="time" class="full-width" />

    <hr><hr>
    <br><br>

    <p>Date and Time Range</p>
    <q-datetime-range v-model="range1" type="datetime" class="full-width" />

    <hr><hr>
    <br><br>

    <p>24hr Format with Monday as First Day</p>
    <q-datetime-range inverted color="teal" v-model="range1" format24h monday-first type="datetime" class="full-width" />

    <hr><hr>
    <br><br>

    <p>Limit Interval Selection</p>
    <q-datetime-range inverted color="brown" v-model="range1" :min="past" :max="future" class="full-width" />

    <hr><hr>
    <br><br>

    <p>Disabled State</p>
    <q-datetime-range v-model="range1" disable class="full-width" />

    <hr><hr>
    <br><br>

    <p>Error State</p>
    <q-datetime-range v-model="range1" error class="full-width" />

    <hr><hr>
    <br><br>

    <p>In a Field</p>
    <q-field icon="golf_course" label="Golf Course" helper="Pick a time to golf!" :label-width="4">
      <q-datetime-range inverted color="green" v-model="range1" :min="today" class="full-width" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>In a List</p>
    <q-list>
      <q-list-header>Date or Time</q-list-header>
        <q-item>
          <q-item-side icon="access_time" />
          <q-item-main>
            <q-datetime-range class="no-margin" inverted color="orange" v-model="range1" type="time" />
          </q-item-main>
        </q-item>

        <q-item>
          <q-item-side icon="update" />
          <q-item-main>
            <q-datetime-range class="no-margin" inverted color="yellow" v-model="range1" type="date" />
          </q-item-main>
        </q-item>

        <q-item-separator />

      <q-list-header>Date & Time</q-list-header>
        <q-item>
          <q-item-side icon="notifications" />
          <q-item-main>
            <q-datetime-range inverted color="lime-8" class="no-margin" v-model="range1" type="datetime" />
          </q-item-main>
        </q-item>
    </q-list>

    <hr><hr>
    <br><br>

    <p>Dark Background</p>
    <div class="bg-dark layout-padding">
      <q-field icon="date range" label="Date" helper="Day of Class">
        <q-datetime dark color="purple" v-model="test" :min="today" float-label="Pick Date" />
      </q-field>

      <q-field dark icon="school" label="JavaScript" helper="Pick a start time...">
        <q-datetime-range dark color="secondary" v-model="range1" type="time" />
      </q-field>
    </div>


  </div>
</template>

<script>
  import { date } from 'quasar'
  const { addToDate, subtractFromDate } = date,
    today = new Date(),
    past = subtractFromDate(today, {days: 5}),
    future = addToDate(today, {days: 3})

  export default {
    data: () => ({
      range1: {
        from: null,
        to: null
      },
      today,
      past,
      future,
      test: null
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
