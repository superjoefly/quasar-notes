<template>
  <div class="layout-padding">
    <p class="text-bold">Cards</p>

    <div class="layout-padding row items-start">
      <q-card inline class="bigger">
        <q-card-media>
          <img src="~assets/guy-avatar.png">
        </q-card-media>
        <q-card-title>
          Guy Avatar
          <q-rating slot="subtitle" v-model="stars" :max="5" />
          <div slot="right" class="row items-center">
            <q-icon name="play circle filled" /> The Simpsons
          </div>
        </q-card-title>
        <q-card-main>
          <p>Paragraph</p>
          <p class="text-faded">An awesome cartoon</p>
        </q-card-main>
        <q-card-separator />
        <q-card-actions>
          <q-btn flat round small>
            <q-icon name="event" />
          </q-btn>
          <q-btn flat>5:30pm</q-btn>
          <q-btn flat>7:30pm</q-btn>
          <q-btn flat>9:30pm</q-btn>
          <q-btn flat color="primary">Record</q-btn>
        </q-card-actions>
      </q-card>
    </div>

    <hr><hr>
    <br><br>

    <p>Basic</p>
    <q-card inline>
      <q-card-main>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias.
      </q-card-main>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Title and Subtitle</p>
    <q-card inline>
      <q-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
      </q-card-title>
      <q-card-main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, eligendi.</q-card-main>
    </q-card>

    <hr><hr>
    <br><br>

    <p>With Icon and Buttons</p>
    <q-card inline color="secondary">
      <q-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
        <q-icon slot="right" name="alarm" />
      </q-card-title>
      <q-card-main>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, ipsa.
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn color="white" class="text-blue">Action 1</q-btn>
        <q-btn color="white" class="text-blue">Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <hr><hr>
    <br><br>

    <p>With Popover</p>

    <q-card inline>
      <q-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
        <q-icon slot="right" name="more_vert">
          <q-popover ref="popover">
            <q-list link class="no-border">
              <q-item @click="$refs.popover.close()">
                <q-item-main label="Remove Card" />
              </q-item>
              <q-item @click="$refs.popover.close()">
                <q-item-main label="Send Feedback" />
              </q-item>
              <q-item @click="$refs.popover.close()">
                <q-item-main label="Share" />
              </q-item>
            </q-list>
          </q-popover>
        </q-icon>
      </q-card-title>
      <q-card-main>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, consequuntur!
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat>Action1</q-btn>
        <q-btn flat>Action2</q-btn>
      </q-card-actions>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Vertical Actions</p>
    <q-card inline>
      <q-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
      </q-card-title>
      <q-card-separator />
      <q-card-actions vertical>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <hr><hr>
    <br><br>

    <p>With Media</p>
    <q-card inline>
      <q-card-media>
        <img src="~assets/boy-avatar.png" style="height: 100px; width: 100px">
      </q-card-media>
      <q-card-title>
        Title
        <span slot="subtitle">Boy Avatar</span>
      </q-card-title>
      <q-card-main>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quisquam.
      </q-card-main>
    </q-card>

    <hr><hr>
    <br><br>

    <p>With Overlay</p>
    <q-card inline>
      <q-card-media>
        <img src="~assets/linux-avatar.png">
        <q-card-title slot="overlay">
          Linux Avatar
        </q-card-title>
      </q-card-media>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Test</p>
    <q-card inline>
      <q-card-media>
        <img src="~assets/quasar-logo-full.svg" style="height: 300px; width: 300px;">
        <q-card-title slot="overlay">
          Quasar Rocks
          <span slot="subtitle">Subtitle</span>
        </q-card-title>
      </q-card-media>
      <q-card-main>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, sit?
      </q-card-main>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Top Position Overlay</p>
    <q-card inline>
      <q-card-media overlay-position="top">
        <img src="~assets/placeholder.png">
        <q-card-title slot="overlay">
          Title
          <span slot="subtitle">Subtitle</span>
        </q-card-title>
      </q-card-media>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Subtitle to Right</p>
    <q-card inline>
      <q-card-media overlay-position="top">
        <img src="~assets/placeholder.png">
        <q-card-title slot="overlay">
          <div slot="subtitle" class="text-right">Subtitle</div>
        </q-card-title>
      </q-card-media>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Full Position Overlay</p>
    <q-card inline>
      <q-card-media overlay-position="full">
        <img src="~assets/guy-avatar.png">
        <q-card-title slot="overlay">
          Title
          <span slot="subtitle">Subtitle</span>
        </q-card-title>
      </q-card-media>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Overlay with Action Buttons</p>
    <q-card inline>
      <q-card-media>
        <img src="~assets/guy-avatar.png">

        <q-card-title slot="overlay">
          Title
          <span slot="subtitle">Subtitle</span>
        </q-card-title>
      </q-card-media>
      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Paralax</p>
    <q-card inline>
      <q-card-media>
        <q-parallax :src="image" :height="150">
          <div slot="loading">Loading...</div>
        </q-parallax>
      </q-card-media>
      <q-card-title>
        Parallax
        <span slot="subtitle">Subtitle</span>
      </q-card-title>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Test</p>
    <q-card inline>
      <q-item>
        <q-item-side :avatar="image" />
        <q-item-main>
          <q-item-tile label>Label</q-item-tile>
          <q-item-tile sublabel>Sublabel</q-item-tile>
        </q-item-main>
      </q-item>
      <q-card-media>
        <img :src="image">
      </q-card-media>
      <q-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
      </q-card-title>
      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <hr><hr>
    <br><br>

    <p>With List</p>
    <q-card inline>
      <q-card-media>
        <img src="~assets/guy-avatar.png">
      </q-card-media>
      <q-list>
        <q-item>
          <q-item-side>
            <q-item-tile color="primary" icon="local bar" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Label</q-item-tile>
            <q-item-tile sublabel>Sublabel</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile color="red" icon="local gas station" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Gas Station</q-item-tile>
            <q-item-tile sublabel>Fill up!</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile color="purple" icon="local movies" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Cinema</q-item-tile>
            <q-item-tile sublabel>Watch a Move!</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </q-card>

    <hr><hr>
    <br><br>

    <p>With Collapsibles</p>
    <q-card inline>
      <q-card-title>
        Title
      </q-card-title>
      <q-list separator>
        <q-collapsible icon="explore" label="First">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, non!</div>
        </q-collapsible>

        <q-collapsible icon="perm_identity" label="Second">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, non!</div>
        </q-collapsible>

        <q-collapsible icon="shopping_cart" label="Third">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, non!</div>
        </q-collapsible>
      </q-list>
    </q-card>

    <hr><hr>
    <br><br>

    <p>With Video</p>
    <q-card inline>
      <q-card-media>
        <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
      </q-card-media>
      <q-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
      </q-card-title>
      <q-card-main>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, adipisci.
      </q-card-main>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Inset Separator</p>
    <q-card inline>
      <q-card-title>
        Title
      </q-card-title>
      <q-card-main>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, rem.
      </q-card-main>
      <q-card-separator inset />
      <q-card-main>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id.
      </q-card-main>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Icons</p>
    <q-card inline>
      <q-card-media>
        <img src="~assets/boy-avatar.png">
      </q-card-media>
      <q-card-actions align="around">
        <q-btn flat round small color="orange"><q-icon name="favorite" /></q-btn>
        <q-btn flat round small color="blue"><q-icon name="bookmark" /></q-btn>
        <q-btn flat round small color="green"><q-icon name="share" /></q-btn>
      </q-card-actions>
    </q-card>

    <hr><hr>
    <br><br>

    <p>Test</p>
    <q-card inline>
      <q-card-media>
        <img src="~assets/linux-avatar.png">
      </q-card-media>
      <q-card-title>
        Title
        <q-rating slot="subtitle" v-model="stars" :max="5" />
        <span slot="right" class="row items-center">
          <q-icon name="place" /> 20 miles
        </span>
      </q-card-title>
    </q-card>


  </div>
</template>

<script>
  import { QCard, QCardTitle, QCardMain, QCardActions, QCardMedia, QCardSeparator, QPopover, QParallax, QItemTile, QVideo } from 'quasar'

  export default {
    components: {
      QCard, QCardTitle, QCardMain, QCardActions, QCardMedia, QCardSeparator, QPopover, QParallax, QItemTile, QVideo
    },
    data: () => ({
      stars: 3,
      image: require('../../../assets/boy-avatar.png')
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
