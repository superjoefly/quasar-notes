<template>
  <div class="layout-padding">
    <p class="text-bold">JS Date</p>

    <p>Today: {{ today }}</p>

    <p>Tomorrow: {{ tomorrow }}</p>

    <p>Yesterday: {{ yesterday }}</p>

    <hr><hr>

    <p>Formatted Date: {{ formattedString }}</p>

    <p>Created Date: {{ createdDate }}</p>

    <p>Validated Date: {{ validatedDate }}</p>

    <hr><hr>

    <p>Adjusted Date: {{ adjustedDate }}</p>

    <p>Normalized Timerange Date: {{ dateNormalized }}</p>

    <p>Date Difference: {{ dateDifference }} days</p>

    <hr><hr>

    <p>Week Number in Year: {{ week }}</p>
    <p>Day Number in Year: {{ dayYear}}</p>
    <p>Day Number in Week: {{ dayWeek }}</p>
    <p>Number of Days in Month: {{ days }}</p>

  </div>
</template>

<script>
  // /*eslint-disable*/
  // Import Date
  import { date } from 'quasar'
  console.log(date)

  // Get Current Date
  const today = new Date()

  // Pull out the objects that we need to use (tree-shaking)
  const { addToDate, subtractFromDate } = date

  // Format Date
  let timeStamp = Date.now()
  console.log(timeStamp)
  let formattedString = date.formatDate(timeStamp, 'MM-DD-YYYY' + ' @ ' + 'ZA')

  // Create Date
  let createdDate = date.buildDate({ year: 2010, date: 5, hours: 15, milliseconds: 123 })

  // Validate Date
  let validatedDate
  let dateString = 'Wed, 09, Aug 1995 00:00:00 GMT'
  if (date.isValid(dateString)) {
    validatedDate = dateString
  }

  // Set date / time
  let setDate = new Date(2017, 10, 2)
  let adjustedDate = date.adjustDate(setDate, { year: 2010, month: 2 })

  // Min / Max from Array of Dates
  let dates = [ new Date(2017, 6, 24), new Date(2017, 5, 20), new Date(2017, 6, 26) ]
  let min = date.getMinDate(dates)
  let max = date.getMaxDate(dates)

  // Timerange
  let dateFrom = new Date(1979, 12, 12)
  let dateTo = new Date(2017, 12, 12)
  if (date.isBetweenDates(today, dateFrom, dateTo)) {
    console.log('Is Between')
  }
  else {
    console.log('Not between')
  }

  // Normalized Timerange Date
  let dateMin = new Date(2010, 12, 12)
  let dateMax = new Date(2018, 12, 12)
  let dateNormalized = date.getDateBetween(today, dateMin, dateMax)

  // Equality
  let date1 = new Date(2017, 12, 5)
  let date2 = new Date(2017, 12, 6)
  if (date.isSameDate(date1, date2)) {
    console.log('same')
  }
  else {
    console.log('not the same')
  }

  // Difference
  let unit = 'days'
  let dateDifference = date.getDateDiff(date1, date2, unit)

  // Calendar Dates
  let newYears = new Date(1, 1, 2018)
  // Get Week Number
  let week = date.getWeekOfYear(newYears)
  // Get Day Number in Year
  let dayYear = date.getDayOfYear(newYears)
  // Get Day Number in Week
  let dayWeek = date.getDayOfWeek(newYears)
  // Get Number of Days in Month
  let days = date.daysInMonth(newYears)

  export default {
    data: () => ({
      today,
      createdDate,
      formattedString,
      validatedDate,
      adjustedDate,
      min,
      max,
      dateNormalized,
      dateDifference,
      week,
      dayYear,
      dayWeek,
      days,
      // Add / Subtract
      tomorrow: addToDate(today, {days: 1}),
      yesterday: subtractFromDate(today, {days: 1})
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
