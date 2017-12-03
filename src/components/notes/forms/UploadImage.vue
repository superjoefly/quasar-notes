<template>
  <div class="container">
    <div v-if="!image">
      <label for="file-upload" class="file-upload">
        <img src="~assets/placeholder.png" style="max-height: 100px;" id="image" />
      </label>
      <input id="file-upload" type="file" @change="onFileChange" />

    </div>
    <div v-else>
      <img :src="image" style="max-height: 100px;" />
      <button @click="removeImage" style="font-size: 16px; border: none; background-color: blue; box-shadow: none;">Remove</button>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      image: ''
    }),
    methods: {
      // Image Upload
      onFileChange (e) {
        var files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.createImage(files[0])
      },
      createImage (file) {
        // var image = new Image()
        var reader = new FileReader()
        var vm = this

        reader.onload = (e) => {
          vm.image = e.target.result
        }

        reader.readAsDataURL(file)
      },
      removeImage (e) {
        this.image = ''
      }
    },
    computed: {

    }
  }
</script>

<style lang="stylus" scoped>
  input[type='file']
    display: none;

  img
    margin: 5px;

  #image:hover
    border: 1px solid blue;
    cursor: pointer;
</style>
