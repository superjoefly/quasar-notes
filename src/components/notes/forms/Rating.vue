<template>
  <div class="layout-padding">
    <p class="text-bold">Rating</p>

    <q-rating v-model="ratingModel" :max="3" />

    <hr><hr>
    <br><br>

    <p>Pets Icon</p>
    <q-rating color="primary" v-model="ratingModel" :max="5" icon="pets" />

    <hr><hr>
    <br><br>

    <p>Thubm Up Icon</p>
    <q-rating color="teal" v-model="ratingModel" :max="9" icon="thumb_up" />

    <hr><hr>
    <br><br>

    <p>Size</p>
    <q-rating color="orange" size="3rem" v-model="ratingModel" :max="6" icon="favorite_border" />

    <hr><hr>
    <br><br>

    <p>Readonly</p>
    <q-rating size="2rem" color="gold" v-model="ratingModel" :max="6" icon="loyalty" readonly />

    <hr><hr>
    <br><br>

    <p>Readonly</p>
    <q-rating size="2rem" color="brown" v-model="ratingModel" :max="6" icon="create" disable />

    <hr><hr>
    <br><br>

    <p>In a Field</p>
    <q-field icon="thumb_up" label="Rating" helper="Rate this article!">
      <q-rating size="2rem" v-model="ratingModel" :max="5" />
    </q-field>

  </div>
</template>

<script>
  export default {
    data: () => ({
      ratingModel: 4
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
