<template>
  <div class="layout-padding">
    <p class="text-bold">Autocomplete</p>

    <!-- <q-input color="amber" v-model="test" placeholder="Type 'fre'">
      <q-autocomplete @search="search" :min-characters="3" @selected="selected" />
    </q-input>

    <q-search v-model="test" placeholder="Start typing a country name">
      <q-autocomplete @search="search" @selected="selected" />
    </q-search>

    <q-search v-model="test">
      <q-autocomplete separator @search="search" @selected="selected" />
    </q-search> -->

    <hr><hr>
    <br><br>

    <p class="text-bold">Normal:</p>

    <q-search v-model="terms" placeholder="Start typing a country name">
      <q-autocomplete @search="search" @selected="selected" />
    </q-search>

    <hr><hr>
    <br><br>

    <p class="text-bold">Inverted:</p>

    <q-search inverted v-model="terms" placeholder="Start typing a country name">
      <q-autocomplete @search="search" @selected="selected" />
    </q-search>

    <hr><hr>
    <br><br>

    <p class="text-bold">Max 2 Results:</p>

    <q-search v-model="terms" placeholder="Start typing a country name">
      <q-autocomplete @search="search" :max-results="2" @selected="selected" />
    </q-search>

    <hr><hr>
    <br><br>

    <p class="text-bold">Min 3 Characters to trigger search:</p>

    <q-search inverted v-model="terms" placeholder="Start typing a country name">
      <q-autocomplete @search="search" :min-characters="3" @selected="selected" />
    </q-search>

    <hr><hr>
    <br><br>

    <p class="text-bold">Custom Debounce:</p>

    <q-search v-model="terms" placeholder="Start typing a country name">
      <q-autocomplete @search="search" :debounce="1000" @selected="selected" />
    </q-search>

    <hr><hr>
    <br><br>

    <p class="text-bold">Static List Data</p>

    <q-search inverted color="secondary" v-model="terms" placeholder="Start typing a country name">
      <q-autocomplete :static-data="{field: 'value', list: countries}" @selected="selected" />
    </q-search>

    <hr><hr>
    <br><br>

    <p class="text-bold">Separator Between Results</p>

    <q-search inverted color="amber" v-model="terms" placeholder="Start typing a country name">
      <q-autocomplete separator @search="search" @selected="selected" />
    </q-search>




  </div>
</template>

<script>
  import countries from 'country-json/src/countries-by-name.json'

  import {
    uid,
    filter,
    Toast
  } from 'quasar'

  const icons = ['alarm', 'email', 'search', 'build', 'card_giftcard', 'perm_identity', 'receipt', 'schedule', 'speaker_phone', 'archive', 'weekend', 'battery_charging_full']

  function getRandomIcon () {
    return icons[Math.floor(Math.random() * icons.length)]
  }

  function getRandomStamp () {
    if (Math.floor(Math.random() * 50) % 3 === 0) {
      return `${Math.floor(Math.random() * 10)} min`
    }
  }

  function getRandomSecondLabel () {
    if (Math.floor(Math.random() * 50) === 0) {
      return `UID: ${uid().substring(0, 8)}`
    }
  }

  function parseCountries () {
    return countries.map(item => {
      let countryName = item.country
      return {
        label: countryName,
        sublabel: getRandomSecondLabel(),
        icon: getRandomIcon(),
        stamp: getRandomStamp(),
        value: countryName
      }
    })
  }

  export default {
    data: () => ({
      test: '',
      terms: '',
      countries: parseCountries()
    }),
    methods: {
      search (terms, done) {
        setTimeout(() => {
          done(filter(terms, {field: 'value', list: parseCountries()}))
        }, 1000)
      },
      selected (item) {
        Toast.create(`Selected suggestion "${item.label}"`)
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
