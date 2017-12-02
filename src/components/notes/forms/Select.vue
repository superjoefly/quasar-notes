<template>
  <div class="layout-padding">
    <p class="text-bold">Select Menu</p>

    <p>Default</p>
    <q-select v-model="select" :options="options" />

    <hr><hr>
    <br><br>

    <p>Stack Label</p>
    <q-select stack-label="Choose One" inverted color="amber" separator v-model="select" :options="options" />

    <hr><hr>
    <br><br>

    <p>Float Label</p>
    <q-select float-label="Choose One" color="secondary" v-model="select" :options="listOptions" separator />

    <hr><hr>
    <br><br>

    <p>Multiple Selection</p>
    <q-select multiple color="indigo" v-model="multipleSelect" :options="options"></q-select>

    <hr><hr>
    <br><br>

    <p>Toggle Selection</p>
    <q-select multiple toggle color="dark" class="bg-yellow layout-padding" float-label="Toggles" v-model="multipleSelect" :options="options" />

    <hr><hr>
    <br><br>

    <p>With Chips</p>
    <q-select multiple chips color="purple" float-label="Float Label" v-model="multipleSelect" :options="options" />

    <hr><hr>
    <br><br>

    <p>Custom Display Value</p>
    <q-select multiple float-label="Float Label" :display-value="`${multipleSelect.length} companies selected`" v-model="multipleSelect" :options="listOptions" />

    <hr><hr>
    <br><br>

    <p>With Filter / Search</p>
    <q-select filter v-model="select" :options="listOptions" />

    <hr><hr>
    <br><br>

    <p>Disabled</p>
    <q-select inverted color="grey" disable v-model="select" :options="options" />

    <hr><hr>
    <br><br>

    <p>Error</p>
    <q-select error float-label="There was an error" v-model="select" :options="options" />

    <hr><hr>
    <br><br>

    <p>In a Field</p>
    <q-field icon="public" label="Pick Employers" helper="Choose a company name...">
      <q-select multiple v-model="multipleSelect" :options="options" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>Field with Chips and Frame Color</p>
    <q-field icon="public" :count="5" label="Pick Employers" helper="Choose company names...">
      <q-select inverted chips color="black" frame-color="teal" multiple v-model="multipleSelect" :options="options" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>Dark Background</p>
    <div class="bg-dark layout-padding">
      <q-select
        dark
        stack-label="Stack Label"
        color="orange"
        separator
        v-model="select"
        :options="options"
      />
      <q-field
        dark
        icon="school"
        label="Company"
      >
        <q-select
          dark
          stack-label="Stack label"
          color="lime"
          v-model="select"
          :options="listOptions"
        />
      </q-field>
    </div>


  </div>
</template>

<script>
  export default {
    data: () => ({
      select: 'google',
      multipleSelect: ['google', 'facebook'],
      options: [
        { label: 'Google', value: 'google' },
        { label: 'Facebook', value: 'facebook' }
      ],
      listOptions: [
        { label: 'Google', icon: 'email', value: 'google' },
        { label: 'Facebook', icon: 'chat', description: 'Enables Communication', value: 'facebook' },
        { label: 'Twitter', inset: true, rightIcon: 'live_help', value: 'twitter' },
        { label: 'Apple', inset: true, stamp: '10 min', value: 'apple' }
      ]
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
