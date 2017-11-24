<template>
  <div class="layout-padding">
    <div>
      <p class="text-bold">Flexbox:</p>

      <p class="text-bold">Row - With Wrap (Default)</p>
      <div class="row box">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>

      <p class="text-bold">Row with No-Wrap</p>
      <div class="row box no-wrap">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>

      <hr>


      <!-- Alignment -->
      <p class="text-bold">Horizontal Alignment</p>
      <p>Row with Justify-Start</p>
      <div class="row box justify-start">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>
      <p>Row with Justify-End</p>
      <div class="row box justify-end">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>
      <p>Row with Justify-Center</p>
      <div class="row box justify-center">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>
      <p>Row with Justify Between</p>
      <div class="row box justify-between">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>
      <p>Row with Justify Around</p>
      <div class="row box justify-around">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>


      <hr>


    >Vertical Alignment</p>
      <p>Row with Items-Start</p>
      <div class="row box items-start">
        <div class="item-vertical" style="height: 100px">First Item</div>
        <div class="item-vertical" style="height: 250px">Second Item</div>
        <div class="item-vertical"style="height: 50px">Third Item</div>
        <div class="item-vertical" style="height: 200px">Fourth Item</div>
        <div class="item-vertical" style="height: 100px">Fifth Item</div>
      </div>
      <p>Row with Items-End</p>
      <div class="row box items-end">
        <div class="item-vertical" style="height: 100px">First Item</div>
        <div class="item-vertical" style="height: 250px">Second Item</div>
        <div class="item-vertical"style="height: 50px">Third Item</div>
        <div class="item-vertical" style="height: 200px">Fourth Item</div>
        <div class="item-vertical" style="height: 100px">Fifth Item</div>
      </div>
      <p>Row with Items-Center</p>
      <div class="row box items-center">
        <div class="item-vertical" style="height: 100px">First Item</div>
        <div class="item-vertical" style="height: 250px">Second Item</div>
        <div class="item-vertical"style="height: 50px">Third Item</div>
        <div class="item-vertical" style="height: 200px">Fourth Item</div>
        <div class="item-vertical" style="height: 100px">Fifth Item</div>
      </div>
      <p>Row with Items-Stretch</p>
      <div class="row box items-stretch">
        <div class="item-vertical" >First Item</div>
        <div class="item-vertical" >Second Item</div>
        <div class="item-vertical" >Third Item</div>
        <div class="item-vertical" >Fourth Item</div>
        <div class="item-vertical" >Fifth Item</div>
      </div>
      <p>Row with Items-Baseline</p>
      <div class="row box items-baseline">
        <div class="item-vertical" style="height: 100px">First Item</div>
        <div class="item-vertical" style="height: 250px">Second Item</div>
        <div class="item-vertical"style="height: 50px">Third Item</div>
        <div class="item-vertical" style="height: 200px">Fourth Item</div>
        <div class="item-vertical" style="height: 100px">Fifth Item</div>
      </div>



      <hr>



      <p class="text-bold">Align Flex Lines</p>
      <p>Row with Content-Start</p>
      <div class="row box content-start">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>
      <p>Row with Content-End</p>
      <div class="row box content-end">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>
      <p>Row with Content-Center</p>
      <div class="row box content-center">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>
      <p>Row with Content-Stretch</p>
      <div class="row box content-stretch">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>
      <p>Row with Content-Between</p>
      <div class="row box content-between">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>
      <p>Row with Content-Around</p>
      <div class="row box content-around">
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
        <div class="item">First Item</div>
        <div class="item">Second Item</div>
        <div class="item">Third Item</div>
        <div class="item">Fourth Item</div>
        <div class="item">Fifth Item</div>
      </div>

      <hr>

      <p class="text-bold">Child Classes</p>

      <p>Row with Columns</p>
      <div class="row box">
        <div class="border col-8">col-8</div>
        <div class="border col-2">col-2</div>
        <div class="border col-auto">col-auto</div>
        <div class="border col">remainder</div>
      </div>

      <p>Row with 3 Columns</p>
      <div class="row box">
        <div class="border col">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
      </div>

      <p>Row with 3 different sized columns</p>
      <div class="row box">
        <div class="border col-3">col-3</div>
        <div class="border col-6">col-6</div>
        <div class="border col-3">col-3</div>
      </div>

      <hr>

      <p class="text-bold">Wrapping</p>

      <p>Going over 12 points will result in wrap unless no-wrap is specified:</p>

      <div class="row box">
        <div class="border col-2">col-2</div>
        <div class="border col-6">col-6</div>
        <div class="border col-10">col-10</div>
        <div class="border col-3">col-3</div>
      </div>

      <hr>

      <p class="text-bold">Self Alignment</p>

      <p>We can override alignment of parent by specifying alignment of individual items:</p>

      <div class="row box justify-start">
        <div class="item self-start">self-start</div>
        <div class="item self-center">self-center</div>
        <div class="item self-baseline">self-baseline</div>
        <div class="item self-end">self-end</div>
        <div class="item self-stretch">self-stretch</div>
      </div>


      <hr>

      <p class="text-bold">Order Items</p>

      <div class="row box">
        <div class="item" style="order: 2">style = item order: 2</div>
        <div class="item order-last">class = order-last</div>
        <div class="item order-first">class = order-first</div>
      </div>


      <hr>

      <p class="text-bold">Responsive Design</p>

      <div class="row box">
        <div class="item col-xs-12 col-sm-3 col-md-4" style="margin: 0px; border: 1px solid black">
          col-xs-12 col-sm-3 col-md-4
        </div>
        <div class="item col-xs-12 col-sm-6 col-md-4" style="margin: 0px; border: 1px solid black">
          col-xs-12 col-sm-6 col-md-4
        </div>
        <div class="item col-xs-12 col-sm-3 col-md-4" style="margin: 0px; border: 1px solid black">
          col-xs-12 col-sm-3 col-md-4
        </div>
      </div>

      <p>Using more than 12 points will wrap:</p>

      <div class="row box">
        <div class="item col-8">col-8</div>
        <div class="item col-8">col-8</div>
      </div>

      <p class="text-bold">Gutters</p>


      <p>Extra Small Gutter on Right:</p>
      <div>
        <div class="row xs-gutter">
          <div class="item col-6" style="margin: 0px; border: 1px solid black">
            <p>Content</p>
          </div>
          <div class="item col-6" style="margin: 0px; border: 1px solid black">
            <p>Content</p>
          </div>
        </div>
      </div>

      <p>Using gutters on around some components will add to the margin that the component already has. To avoid this, remove the margin from the components with 'no-margin' class:</p>

      <div>
        <div class="row xs-gutter">
          <div class="col-6">
            <q-input v-model="text" class="no-margin" />
          </div>
          <div class="col-6">
            <q-input v-model="text" class="no-margin" />
          </div>
        </div>
      </div>

      <hr>

      <p>Example from Docs:</p>

      <div>
        <div class="row xs-gutter normal">
          <div class="col-12">
            <q-input inverted v-model="model" class="no-margin" float-label="col-12 TEST" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-input inverted v-model="model" class="no-margin" float-label="col-xs-12 col-sm-6 TOP LEFT" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-input inverted v-model="model" class="no-margin" float-label="col-xs-12 col-sm-6 TOP RIGHT" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-input inverted v-model="model" class="no-margin" float-label="col-xs-12 col-sm-6 BOTTOM LEFT" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-input inverted v-model="model" class="no-margin" float-label="col-xs-12 col-sm-6 BOTTOM RIGHT" />
          </div>
          <div class="col-12">
            <q-input inverted v-model="model" class="no-margin" float-label="col-12" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: 'test',
      model: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~variables'
  .text-bold
    font-size 25px

  .box
    width 100%
    height 300px
    border 2px solid green


  .item
    width 100px
    height 100px
    margin 5px
    background-color $secondary

  .item-vertical
    width 100px
    margin 5px
    background-color $secondary

  .border
    border: 2px solid blue
</style>
