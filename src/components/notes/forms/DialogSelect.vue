<template>
  <div class="layout-padding">
    <p class="text-bold">Dialog Select</p>

    <p>Single Selection</p>
    <q-dialog-select v-model="select" :options="options" />

    <hr><hr>
    <br><br>

    <p>Delimited</p>
    <q-dialog-select stack-label="Stack Label" inverted color="teal" separator v-model="select" :options="options" />

    <hr><hr>
    <br><br>

    <p>Floating Label</p>
    <q-dialog-select inverted color="indigo" float-label="Float Label" v-model="select" :options="listOptions" />

    <hr><hr>
    <br><br>

    <p>Radio</p>
    <q-dialog-select radio color="secondary" float-label="Float Label" v-model="select" :options="options" />

    <hr><hr>
    <br><br>

    <p>Multiple Selection</p>
    <q-dialog-select multiple radio color="orange" float-label="Float Label" v-model="multipleSelect" :options="options" />

    <hr><hr>
    <br><br>

    <p>Delimited Multiple</p>
    <q-dialog-select multiple inverted color="dark" stack-label="Delimited Options" separator v-model="multipleSelect" :options="listOptions" />

    <hr><hr>
    <br><br>

    <p>With Chips</p>
    <q-dialog-select multiple chips color="purple" float-label="Float Label" v-model="multipleSelect" :options="listOptions" />

    <hr><hr>
    <br><br>

    <p>Custom Display Value</p>
    <q-dialog-select multiple float-label="Float Label" :display-value="`${multipleSelect.length} companies selected`" v-model="multipleSelect" :options="listOptions" />

    <hr><hr>
    <br><br>

    <p>Disabled</p>
    <q-dialog-select disable class="bg-grey layout-padding" v-model="select" :options="options" />

    <hr><hr>
    <br><br>

    <p>Error State</p>
    <q-dialog-select error float-label="There was an error!" v-model="select" :options="options" />

    <hr><hr>
    <br><br>

    <p>In a Field</p>
    <q-field icon="public" label="Pick Employer" helper="Pick company">
      <q-dialog-select multiple v-model="multipleSelect" :options="listOptions" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>Frame Color</p>
    <q-field icon="public" :count="5" label="Pick Employer" helper="Helper Text">
      <q-dialog-select inverted chips color="black" frame-color="secondary" multiple v-model="multipleSelect" :options="options" />
    </q-field>

    <hr><hr>
    <br><br>

    <p>Dark Background</p>
    <div class="bg-dark layout-padding">
      <q-dialog-select dark stack-label="Stack Label" color="secondary" separator v-model="select" :options="options" />
      <q-field dark icon="school" label="Company">
        <q-dialog-select dark stack-label="Stack Label" color="lime" v-model="select" :options="options" />
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
