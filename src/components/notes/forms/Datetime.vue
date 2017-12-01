<template>
  <div class="layout-padding">
    <p class="text-bold">Datetime</p>

    <span class="desktop-only">
      On a real mobile device, datetime opens up a modal instead of a pop-over.
    </span>
    <span class="mobile-only">
      On a desktop platform, datetime opens up a pop-over instead of a modal.
    </span>

    <hr><hr>
    <br><br>

    <p>Default:</p>
    <q-datetime v-model="date1" float-label="Date" />

    <p>Monday as First Day</p>
    <q-datetime inverted color="primary" monday-first v-model="date1" stack-label="Date (Monday as First Day)" />

    <p>Saturday as First Day</p>
    <q-datetime color="orange" saturday-first v-model="date1" stack-label="Date (Saturday as First Day)" />

    <hr><hr>
    <br><br>

    <p>Only Time</p>

    <q-datetime inverted color="secondary" v-model="date1" type="time" float-label="Time" />

    <p>Material Theme</p>
    <q-datetime color="brown" v-if="$q.theme === 'mat'" v-model="date1" type="time" format24hr float-label="Time (24h) format" />

    <hr><hr>
    <br><br>

    <p>Date & Time</p>
    <q-datetime color="purple" v-model="date1" type="datetime" float-label="Date & Time" />

    <hr><hr>
    <br><br>

    <p>Default Selection</p>
    <q-datetime :default-selection="defaultSelection" type="datetime" v-model="date1" color="brown" float-label="With default selection and placeholder" placeholder="Start of this year as default" />

    <hr><hr>
    <br><br>

    <p>With Display Value</p>
    <q-datetime :display-value="date1 ? 'Picked date, Thanks!' : 'Pick a date, will ya?'" type="date" v-model="date1" inverted color="brown" stack-label="With Display Value" />

    <hr><hr>
    <br><br>

    <p>No Clear Button</p>
    <q-datetime type="date" v-model="today" color="amber" stack-label="No 'Clear' Button" no-clear />

    <hr><hr>
    <br><br>

    <p>Min / Max Selection</p>
    <q-datetime v-model="date1" :min="tomorrow" color="primary" stack-label="Pick a date starting with tomorrow" />

    <q-datetime v-model="date1" :max="yesterday" color="secondary" stack-label="Pick a date in the past" />

    <q-datetime v-model="date1" :min="yesterday" :max="tomorrow" color="orange" stack-label="Date and Time Interval" />

    <hr><hr>
    <br><br>

    <p>Disable and Error States</p>

    <small>Disabled</small>
    <q-datetime disable v-model="state" />

    <small>Error</small>
    <q-datetime error float-label="There was an error!" v-model="state" />

    <hr><hr>
    <br><br>

    <p>In a Field</p>
    <q-field icon="local_movies" helper="Pick a day for a movie!">
      <q-datetime v-model="date1" :min="today" float-label="Pick Date" />
    </q-field>

    <q-field icon="golf_course" label="Golf Course" helper="Pick a day to golf!">
      <q-datetime color="purple" inverted v-model="date1" :min="today" float-label="Pick Date" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>In a List</p>
    <q-list>
      <q-list-header>Date or Time</q-list-header>
      <q-item>
        <q-item-side icon="access_time" />
        <q-item-main>
          <q-datetime class="no-maring" v-model="date1" type="time" />
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-side icon="update" />
        <q-item-main>
          <q-datetime class="no-maring" v-model="date1" type="date" />
        </q-item-main>
      </q-item>
      <q-item-separator />
      <q-list-header>Date & Time</q-list-header>
      <q-item>
        <q-item-side icon="notifications" />
        <q-item-main>
          <q-datetime class="no-margin" v-model="date1" type="datetime" />
        </q-item-main>
      </q-item>
    </q-list>

    <hr><hr>
    <br><br>

    <p>Dark Background</p>
    <div class="bg-dark layout-padding">
      <q-datetime dark stack-label="Pick Start Time" color="amber" v-model="date1" type="time" />

      <q-field dark icon="school" label="JavaScript" helper="Pick Start Time">
        <q-datetime dark color="secondary" v-model="date1" type="time" />
      </q-field>
    </div>

  </div>
</template>

<script>
  import { date } from 'quasar'
  console.log(date)

  const today = new Date()
  const { startOfDate, addToDate, subtractFromDate } = date

  export default {
    data: () => ({
      date1: null,
      today,
      tomorrow: addToDate(today, { days: 1 }),
      yesterday: subtractFromDate(today, {days: 1}),
      state: new Date(),
      defaultSelection: startOfDate(today, 'year')
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
