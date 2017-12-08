<template>
  <div class="layout-padding">
    <p class="text-bold">Lists and List Items</p>

    <q-list highlight inset-separator>
      <q-item>
        <q-item-side :avatar="boyAvatar" />
        <q-item-main label="Brunch this weekend? Brunch this weekend? Brunch this weekend?" label-lines="1" />
        <q-item-side right stamp="1 min" />
      </q-item>

      <q-item multiline>
        <q-item-side :avatar="guyAvatar" />
        <q-item-main label="Brunch this weekend? Brunch this weekend? Brunch this weekend?" label-lines="1" sublabel="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quia." sublabel-lines="2" />
        <q-item-side right stamp="1 week<br />ago" />
      </q-item>

      <q-item multiline>
        <q-item-side :avatar="guyAvatar" />
        <q-item-main label="Brunch this weekend? Brunch this weekend? Brunch this weekend?" label-lines="2" sublabel="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quia." sublabel-lines="2" />
        <q-item-side right stamp="10 min" />
      </q-item>

      <q-item multiline>
        <q-item-side>
          <q-item-tile avatar>
            <img src="~assets/boy-avatar.png">
          </q-item-tile>
        </q-item-side>
        <q-item-main>
          <q-item-tile label>Brunch <span>5</span></q-item-tile>
          <q-item-tile sublabel lines="2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sunt, eveniet. Ut, labore itaque dolore!
          </q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-item-tile stamp>10 min</q-item-tile>
          <q-item-tile icon="star" color="yellow" />
        </q-item-side>
      </q-item>

      <q-item multiline>
        <q-item-side :avatar="guyAvatar" />
        <q-item-main>
          <q-item-tile label lines="1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, possimus.</q-item-tile>
          <q-item-tile sublabel lines="2">
            <span>John Doe</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quia corporis mollitia earum ducimus. Magnam commodi excepturi labore, illum aut voluptatibus quidem, dolore exercitationem libero reprehenderit velit. Dicta, expedita, autem.
          </q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-item-tile stamp>2 years</q-item-tile>
          <q-item-tile icon="mail" color="primary" />
        </q-item-side>
      </q-item>
    </q-list>


    <q-list inset-separator>
      <q-item>
        <q-item-side :avatar="boyAvatar" />
        <q-item-main label="Brunch this weekend?" />
        <q-item-side right icon="more_vert">
          <q-popover ref="popover" :anchor="anchor" :self="self">
            <q-list link>
              <q-item @click="$refs.popover.close()">
                <q-item-main label="Reply" />
              </q-item>
              <q-item @click="$refs.popover.close()">
                <q-item-main label="Forward" />
              </q-item>
              <q-item @click="$refs.popover.close()">
                <q-item-main label="Delete" />
              </q-item>
            </q-list>
          </q-popover>
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-side :avatar="guyAvatar" />
        <q-item-main label="Brunch this weekend?" />
        <q-item-side right>
          <q-chip square color="primary" class="shadow-2">10k</q-chip>
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-side :avatar="boyAvatar" />
        <q-item-main label="Brunch this weekend?" />
        <q-item-side right>
          <q-item-tile stamp>10 min ago</q-item-tile>
          <span class="text-amber">
            <q-item-tile icon="star" v-for="n in 2" :key="n" />
          </span>
        </q-item-side>
      </q-item>
    </q-list>

    <hr><hr>

    <p>Embedding Form Components</p>

    <q-list link>
      <q-list-header>Radios</q-list-header>
      <q-item tag="label">
        <q-item-side>
          <q-radio v-model="option" val="opt1"></q-radio>
        </q-item-side>
        <q-item-main label="Option 1" />
      </q-item>
      <q-item tag="label">
        <q-item-side>
          <q-radio color="purple" v-model="option" val="opt2"></q-radio>
        </q-item-side>
        <q-item-main>
          <q-item-tile label>Option 2</q-item-tile>
          <q-item-tile sublabel>Allows notifications</q-item-tile>
        </q-item-main>
      </q-item>
      <q-item tag="label">
        <q-item-side>
          <q-radio color="red" v-model="option" val="opt3"></q-radio>
        </q-item-side>
        <q-item-main>
          <q-item-tile label>Option 3</q-item-tile>
          <q-item-tile sublabel lines="3" style="max-width: 300px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-item-tile>
        </q-item-main>
        <q-item-side right>
          <p>You chose: {{option}}</p>
        </q-item-side>
      </q-item>

      <q-item-separator />
      <q-list-header>Toggles</q-list-header>
      <q-item tag="label">
        <q-item-main label="Events and reminders" />
        <q-item-side right>
          <q-toggle v-model="checked"></q-toggle>
        </q-item-side>
      </q-item>
      <q-item tag="label" multiline>
        <q-item-main>
          <q-item-tile label>Events and reminders</q-item-tile>
          <q-item-tile sublabel>Lorem ipsum</q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-toggle v-model="checked" color="purple"></q-toggle>
        </q-item-side>
      </q-item>
      <q-item tag="label" multiline>
        <q-item-main>
          <q-item-tile label>Events and reminders</q-item-tile>
          <q-item-tile sublabel lines="3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          </q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-toggle v-model="checked" color="red"></q-toggle>
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-main>
          <q-item-tile label>Checked?</q-item-tile>
          <q-item-tile sublabel>{{checked}}</q-item-tile>
        </q-item-main>
      </q-item>
      <q-item-separator />

      <q-list-header>Selects</q-list-header>
      <q-item>
        <q-item-side icon="supervisor_account" />
        <q-item-main>
          <q-select class="full-width" v-model="select" :options="selectOptions" />
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-side icon="supervisor_account" />
        <q-item-main>
          <q-select class="full-width" multiple checkbox v-model="multipleSelect" :options="selectOptions" />
        </q-item-main>
      </q-item>
      <q-item-separator />


      <q-list-header>Ranges</q-list-header>
      <q-item>
        <q-item-side icon="volume_down" />
        <q-item-main>
          <q-slider v-model="slider" :min="0" :max="50" label-always />
        </q-item-main>
        <q-item-side right icon="volume_up" />
      </q-item>
      <q-item>
        <q-item-side icon="volume_down" />
        <q-item-main>
          <q-slider v-model="slider" :min="0" :max="50" label-always />
        </q-item-main>
        <q-item-side right icon="volume_up" />
      </q-item>
      <q-item>
        <q-item-side icon="euro_symbol" />
        <q-item-main>
          <q-range v-model="range" :min="0" :max="50" label-always />
        </q-item-main>
      </q-item>
    </q-list>

  </div>
</template>

<script>
  import { QList, QListHeader, QItem, QItemSeparator, QItemSide, QItemMain, QItemTile, QChip, QPopover, QSlider } from 'quasar'
  export default {
    components: {
      QList, QListHeader, QItem, QItemSeparator, QItemSide, QItemMain, QItemTile, QChip, QPopover, QSlider
    },
    data: () => ({
      boyAvatar: require('../../../assets/boy-avatar.png'),
      guyAvatar: require('../../../assets/guy-avatar.png'),
      option: '',
      select: '',
      checked: '',
      multipleSelect: [
        {value: 'test', label: 'Label'}
      ],
      selectOptions: [
        {value: 1, label: 'Option 1'},
        {value: 2, label: 'Option 2'},
        {value: 3, label: 'Option 3'}
      ],
      slider: 10,
      range: {
        min: 10,
        max: 40
      },
      anchor: 'center left',
      self: 'top right'
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
