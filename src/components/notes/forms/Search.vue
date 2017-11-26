<template>
  <div class="layout-padding">

    <p class="text-bold">Search (textfield)</p>

    <p>Basic Q-Search</p>
    <q-search v-model="search" />

    <br>

    <q-search icon="place" color="lime" v-model="search" stack-label="Search for a place..." />

    <br>

    <q-search icon="local_airport" color="secondary" v-model="search" float-label="Search for an airport" />

    <br>

    <q-search icon="local_dining" inverted v-model="search" placeholder="Search for a nearby restaurant..." />

    <br>

    <q-search icon="ev_station" inverted color="orange" v-model="search" stack-label="Search for an ev-station..." />

    <br>

    <q-search icon="hotel" inverted color="secondary" v-model="search" float-label="Search for a hotel..." />

    <br>

    <q-search icon="local_movies" inverted color="teal" loading v-model="search" />

    <hr><hr>
    <br><br>

    <p>Inside Q-Field</p>

    <q-field icon="local_hospital" label="Local Hosptial" :count="15" helper="Type name here...">
      <q-search color="purple" v-model="search" />
    </q-field>

    <q-field icon="local_car_wash" label="Car Wash" :count="12" helper="Type name here...">
      <q-search inverted v-model="search" />
    </q-field>


    <hr><hr>
    <br><br>

    <p>Disable / Error State</p>

    <q-search disable icon="local_dining" color="orange" v-model="search" placeholder="Search for nearby restaurant..." />

    <q-search disable inverted icon="local_dining" color="orange" v-model="search" placeholder="Search for nearby restaurant..." />

    <q-search error icon="ev_station" color="secondary" v-model="search" stack-label="Search for ev-station..." placeholder="Type a name..." />

    <q-search error icon="ev_station" color="secondary" inverted v-model="search" stack-label="Search for ev-station..." placeholder="Type a name..." />

    <hr><hr>
    <br><br>

    <p>Dark Background</p>

    <div class="bg-dark" style="padding: 5px;">
      <q-search dark icon="local_airport" color="secondary" v-model="search" stack-label="Search for an airport" />

      <q-field dark icon="local_car_wash" label="Car wash" count helper="Type a name">
        <q-search dark color="yellow" v-model="search" />
      </q-field>
    </div>

    <hr><hr>
    <br><br>

    <p>Show warning icon button when there is an error on QInput:</p>

    <q-field icon="cloud" label="Address" helper="Search for an address" :error="hasError" error-label="Please enter an address" :count="10">
      <q-search v-model="search" :after="[
          {
            icon: 'warning',
            error: true,
            handler () {
              // do something
            }
          }
        ]"
      />
    </q-field>

    <br>

    <q-search v-model="search" :after="[
      {
        icon: 'attach_file',
        content: true,
        handler () {
          // do something
        }
      }
    ]" />

    <hr><hr>
    <br><br>

    <p>Search within QLayout</p>

    <q-layout>
      ...content

      <q-toolbar slot="header" color="primary">
        <q-search inverted color="nont" v-model="search" />
      </q-toolbar>
    </q-layout>

  </div>
</template>

<script>
  export default {
    data: () => ({
      search: '',
      hasError: true
    }),
    methods: {
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
