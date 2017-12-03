<template>
  <div class="layout-padding">
    <p class="text-bold">Uploader</p>

    <p>Quasar Uploader Component</p>

    <div>
      <div>
        <q-uploader :url="url" :multiple="true" extensions=".jpg"  :float-label="'please select the photos'" ></q-uploader>
      </div>
    </div>

    <hr><hr>
    <br><br>

    <p>Custom Component</p>
    <image-upload></image-upload>
  </div>
</template>

<script>
  import uploadImage from './UploadImage'

  export default {
    components: {
      'image-upload': uploadImage
    },
    data: () => ({
      url: '/upload'
    }),
    methods: {

    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
