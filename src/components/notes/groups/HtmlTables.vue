<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw">
      <p class="text-bold">HTML Tables</p>
      <q-card>
        <q-card-title>Configure Table Below</q-card-title>
        <q-card-separator />
        <q-card-main>
          <q-field label="Separators" :label-width="4" style="margin-top: 0">
            <q-option-group v-model="separator" inline type="radio" :options="separatorOptions" />
          </q-field>

          <q-field label="Stipes" :label-width="4">
            <q-option-group v-model="stripe" inline type="radio" :options="stripeOptions" />
          </q-field>

          <q-field label="Layout Type" :label-width="4">
            <q-option-group v-model="type" inline type="radio" :options="layoutOptions" />
          </q-field>

          <q-field label="Gutter" :label-width="4">
            <q-option-group v-model="gutter" inline type="radio" :options="gutterOptions" />
          </q-field>

          <q-field label="Misc" :label-width="4">
            <q-option-group v-model="misc" inline type="radio" :options="miscOptions" />
          </q-field>


          <template v-if="computedClasses.length > 0">
            <q-card-separator style="margin-top: 16px; margin-bottom: 16px" />

            <q-field label="Applying CSS Classes" :label-width="4">
              <div class="group" style="margin: -5px">
                <q-chip v-for="cls in computedClasses" :key="cls" color="secondary" square>
                  {{cls}}
                </q-chip>
              </div>
            </q-field>
          </template>
        </q-card-main>
      </q-card>

      <div class="row justify-center">
        <table style="margin-top: 30px" class="q-table" :class="computedClasses">
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-right">Price</th>
              <th class="text-right">In Stock</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td data-th="Name" class="text-left">Item #1</td>
              <td data-th="Price" class="text-right">$10.00</td>
              <td data-th="In Stock" class="text-right">100</td>
            </tr>
            <tr>
              <td data-th="Name" class="text-left">Item #2</td>
              <td data-th="Price" class="text-right">$20.00</td>
              <td data-th="In Stock" class="text-right">35</td>
            </tr>
            <tr>
              <td data-th="Name" class="text-left">Item #3</td>
              <td data-th="Price" class="text-right">$16.00</td>
              <td data-th="In Stock" class="text-right">150</td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  </div>
</template>

<script>
  import { QCheckbox, QOptionGroup, QChip, QField, QCard, QCardTitle, QCardMain, QCardSeparator } from 'quasar'

  export default {
    components: {
      QCheckbox, QOptionGroup, QChip, QField, QCard, QCardTitle, QCardMain, QCardSeparator
    },
    data: () => ({
      separator: 'none',
      stripe: 'none',
      type: 'none',
      misc: '',
      gutter: 'none',
      separatorOptions: [
        {value: 'none', label: 'No separator'},
        {value: 'horizontal', label: 'Horizontal separator'},
        {value: 'vertical', label: 'Vertical separator'},
        {value: 'cell', label: 'Cell separator'}
      ],
      stripeOptions: [
        {value: 'none', label: 'No Stripe'},
        {value: 'odd', label: 'Striped Odd'},
        {value: 'even', label: 'Striped Even'}
      ],
      layoutOptions: [
        {value: 'none', label: 'Standard'},
        {value: 'flipped', label: 'Flipped'},
        {value: 'responsive', label: 'Responsive'}
      ],
      gutterOptions: [
        {value: 'none', label: 'Standard'},
        {value: 'compact', label: 'Compact'},
        {value: 'loose', label: 'Loose'}
      ],
      miscOptions: [
        {value: 'bordered', label: 'Bordered'},
        {value: 'highlight', label: 'Highlight'}
      ],
      styles: [
        '', 'bordered', 'horizontal-separator', 'vertical-separator', 'cell-separator', 'striped-odd', 'striped-even', 'highlight', 'compact', 'loose', 'flipped'
      ]
    }),
    methods: {

    },
    computed: {
      computedClasses () {
        let classes = []

        if (this.misc.includes('bordered')) {
          classes.push('bordered')
        }
        if (this.misc.includes('highlight')) {
          classes.push('highlight')
        }
        if (this.separator !== 'none') {
          classes.push(this.separator + '-separator')
        }
        if (this.stripe !== 'none') {
          classes.push('striped-' + this.stripe)
        }
        if (this.type !== 'none') {
          classes.push(this.type)
        }
        if (this.gutter !== 'none') {
          classes.push(this.gutter)
        }

        return classes
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
