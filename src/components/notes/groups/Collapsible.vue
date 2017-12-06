<template>
  <div class="layout-padding">
    <p class="text-bold">Collapsible (+Accordion)</p>

    <div style="width: 500px; max-width: 90vw">
      <q-list>
        <q-collapsible icon="explore" label="First">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorum?
          </div>
        </q-collapsible>
        <q-collapsible icon="perm_identity" label="Second">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorum?
          </div>
        </q-collapsible>
        <q-collapsible icon="shopping_cart" label="Third">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorum?
          </div>
        </q-collapsible>
      </q-list>

      <hr><hr>
      <br><br>

      <p>With Item Separators</p>
      <q-list inset-separator>
        <q-collapsible icon="mail" label="Inbox" sublabel="5 unread emails...">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eos.</div>
        </q-collapsible>
        <q-collapsible icon="send" label="Outbox" sublabel="Empty">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eos.</div>
        </q-collapsible>
        <q-collapsible icon="drafts" label="Draft" sublabel="Draft a new email...">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eos.</div>
        </q-collapsible>
      </q-list>

      <hr><hr>
      <br><br>

      <p>Toggle only on icon (on right)</p>
      <q-list separator>
        <q-collapsible icon-toggle icon="mail" label="Inbox" sublabel="5 unread emails...">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eos.</div>
        </q-collapsible>
        <q-collapsible icon-toggle icon="send" label="Outbox" sublabel="Empty">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eos.</div>
        </q-collapsible>
        <q-collapsible icon-toggle icon="drafts" label="Draft" sublabel="Draft a new email...">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eos.</div>
        </q-collapsible>
      </q-list>

      <hr><hr>
      <br><br>

      <p>Preselected / Opened Collapsible</p>
      <q-list separator>
        <q-collapsible icon="explore" label="First">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorum?
          </div>
        </q-collapsible>
        <q-collapsible icon="perm_identity" label="Second" opened>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorum?
          </div>
        </q-collapsible>
        <q-collapsible icon="shopping_cart" label="Third">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorum?
          </div>
        </q-collapsible>
      </q-list>

      <hr><hr>
      <br><br>

      <p>Accordion (opening one closes the other)</p>
      <q-list separator>
        <q-collapsible group="somegroup" icon="mail" label="Inbox" sublabel="5 unread emails...">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eos.</div>
        </q-collapsible>
        <q-collapsible group="somegroup" icon="send" label="Outbox" sublabel="Empty">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eos.</div>
        </q-collapsible>
        <q-collapsible group="somegroup" icon="drafts" label="Draft" sublabel="Draft a new email...">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eos.</div>
        </q-collapsible>
      </q-list>

      <hr><hr>
      <br><br>

      <p>Using Open and Close Events</p>
      <q-list>
        <q-collapsible @open="counterStart" @close="counterStop" icon="explore" label="counter">
          <div>Will only count when opened...</div>
          <q-chip style="margin-top: 15px">Counter: {{counter}}</q-chip>
        </q-collapsible>
      </q-list>

      <hr><hr>
      <br><br>

      <p>Using Cards as Content</p>
      <q-list separator>
        <q-collapsible icon="explore" label="First Card">
          <q-card color="primary">
            <q-card-title>
              Card Title
            </q-card-title>
            <q-card-main>
              Lorem ipsum dolor sit amet.
            </q-card-main>
          </q-card>
        </q-collapsible>
        <q-collapsible icon="perm_identity" label="Second Card">
          <q-card>
            <q-card-media>
              <img src="~assets/boy-avatar.png" style="height: 100px; width: 100px">
            </q-card-media>
            <q-card-main>
              Lorem ipsum dolor sit amet.
            </q-card-main>
          </q-card>
        </q-collapsible>
        <q-collapsible icon="shopping_cart" label="Third Card">
          <q-card>
            <q-card-media>
              <img src="~assets/guy-avatar.png" style="height: 100px; width: 100px">
            </q-card-media>
            <q-card-main>
              <q-item>
                <q-item-side icon="local_bar" />
                <q-item-main>
                  <q-item-tile label>Bar XYZ</q-item-tile>
                  <q-item-tile sublabel>Have a drink.</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item>
                <q-item-side icon="local_gas_station" />
                <q-item-main>
                  <q-item-tile label>Gas Station</q-item-tile>
                  <q-item-tile sublabel>Fill your gas tank.</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item>
                <q-item-side icon="local_movies" />
                <q-item-main>
                  <q-item-tile label>Cinema XYZ</q-item-tile>
                  <q-item-tile sublabel>Watch a movie.</q-item-tile>
                </q-item-main>
              </q-item>
            </q-card-main>
            <q-card-actions class="group">
              <div class="text-lime">
                13 minutes
              </div>
              <div>
                (1 mile)
              </div>
              <div class="col"></div>
              <q-btn flat color="primary" small icon="directions">
                Start
              </q-btn>
            </q-card-actions>
          </q-card>
        </q-collapsible>
      </q-list>
    </div>

  </div>
</template>

<script>
  import { QCard, QCardTitle, QCardMain, QCardActions, QCardMedia } from 'quasar'

  export default {
    components: {
      QCard, QCardTitle, QCardMain, QCardActions, QCardMedia
    },
    data: () => ({
      counter: 0
    }),
    methods: {
      counterStart () {
        this.timer = setInterval(() => {
          this.counter++
        }, 1000)
      },
      counterStop () {
        clearInterval(this.timer)
      }
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
