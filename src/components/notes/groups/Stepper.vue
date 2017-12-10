<template>
  <div class="layout-padding">
    <p class="text-bold">Steppers</p>

    <p class="caption">Horizontal Stepper</p>

    <q-option-group v-model="defaultOptions" type="toggle" :options="options" />

    <p>{{globalNavigation}}</p>

    <br><br>

    <q-stepper flat ref="stepper" v-model="step" color="primary" :alternative-labels="alt" :contractable="contractable">
      <q-step default name="campaign" title="Campaign">
        <p>For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.</p>

        <q-stepper-navigation v-if="!globalNavigation">
          <q-btn color="primary" @click="$refs.stepper.next()">Continue</q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step name="ad_group" :error="stepError" title="Ad Groups" subtitle="Create some...">
        <p>An ad group contains one or more ads which target a shared set of keywords.</p>
        <q-stepper-navigation v-if="!globalNavigation">
          <q-btn color="primary" @click="$refs.stepper.next()">Continue</q-btn>
          <q-btn color="primary" flat @click="$refs.stepper.previous()">Back</q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step name="disabled_step" :disable="disabledStep" icon="attach_money" title="Payment" subtitle="Create some...">
        <p>Try out different payment schemes for your customers, and learn how to enhance payments using extensions.</p>
        <q-stepper-navigation v-if="!globalNavigation">
          <q-btn color="primary" @click="$refs.stepper.next()">Continue</q-btn>
          <q-btn color="primary" flat @click="$refs.stepper.previous()">Back</q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step name="create_ad" title="Create and Ad">
        <p>Try out different ad text to see what brings in the most customers.</p>
        <q-stepper-navigation v-if="!globalNavigation">
          <q-btn color="primary" @click="$refs.stepper.goToStep('campaign')">Restart</q-btn>
          <q-btn color="primary" flat @click="$refs.stepper.previous()">Back</q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-stepper-navigation v-if="globalNavigation">
        <q-btn v-if="step !== 'campaign'" color="primary" flat @click="$refs.stepper.previous()">Back</q-btn>
        <q-btn color="primary" @click="$refs.stepper.next()">
          {{ step === 'create_ad' ? 'Finalize' : 'Next' }}
        </q-btn>
      </q-stepper-navigation>
      <q-inner-loading :visible="progress" />
    </q-stepper>

    <hr><hr>
    <br><br>

    <p class="caption">Vertical Stepper</p>

    <q-stepper ref="stepper2" color="secondary" v-model="step2" :alternative-labels="alt" vertical>
       <q-step default name="campaign" title="Campaign">
         <p>
           For each ad campaign that you create, you can control how much you're willing to
           spend on clicks and conversions, which networks and geographical locations you want
           your ads to show on, and more.
         </p>

         <q-stepper-navigation v-if="!globalNavigation">
           <q-btn color="secondary" @click="$refs.stepper2.next()">Continue</q-btn>
         </q-stepper-navigation>
       </q-step>

       <q-step name="ad_group" :error="stepError" title="Ad Groups" subtitle="Create some">
         <p>An ad group contains one or more ads which target a shared set of keywords.</p>

         <q-stepper-navigation v-if="!globalNavigation">
           <q-btn color="secondary" @click="$refs.stepper2.next()">Continue</q-btn>
           <q-btn color="secondary" flat @click="$refs.stepper2.previous()">Back</q-btn>
         </q-stepper-navigation>
       </q-step>

       <q-step name="disabled_step" :disable="disabledStep" icon="attach_money" title="Payment">
         <p>
           Try out different payment schemes for your customers, and learn how
           to enhance payments using extensions.
         </p>

         <q-stepper-navigation v-if="!globalNavigation">
           <q-btn color="secondary" @click="$refs.stepper2.next()">Continue</q-btn>
           <q-btn color="secondary" flat @click="$refs.stepper2.previous()">Back</q-btn>
         </q-stepper-navigation>
       </q-step>

       <q-step name="create_ad" title="Create an ad">
         <p>
           Try out different ad text to see what brings in the most customers, and learn how
           to enhance your ads using features like ad extensions. If you run into any problems
           with your ads, find out how to tell if they're running and how to resolve approval
           issues.
         </p>

         <q-stepper-navigation v-if="!globalNavigation">
           <q-btn color="secondary" @click="$refs.stepper2.goToStep('campaign')">Restart</q-btn>
           <q-btn color="secondary" flat @click="$refs.stepper2.previous()">Back</q-btn>
         </q-stepper-navigation>
       </q-step>

       <q-inner-loading :visible="progress" />
    </q-stepper>


  </div>
</template>

<script>
  import { QStepper, QStep, QStepperNavigation, QBtn, QOptionGroup, QInnerLoading } from 'quasar'

  export default {
    components: {
      QStepper, QStep, QStepperNavigation, QBtn, QOptionGroup, QInnerLoading
    },
    data: () => ({
      step: 'first',
      step2: 'first',
      defaultOptions: ['contractable', 'disable_payment', 'step_error'],
      options: [
        {value: 'alt', label: 'Alternative Labels (on wide windows only)'},
        {value: 'contractable', label: 'Contractable on narrow windows'},
        {value: 'global_navigation', label: 'Global Stepper Navigation'},
        {value: 'step_error', label: 'Make <strong>Add Groups</strong> step signal an error'},
        {value: 'disable_payment', label: 'Disable <strong>Payment</strong> Step'},
        {value: 'progress', label: 'Show a background process is in progress'}
      ]
    }),
    methods: {

    },
    computed: {
      alt () {
        return this.defaultOptions.includes('alt')
      },
      contractable () {
        return this.defaultOptions.includes('contractable')
      },
      globalNavigation () {
        return this.defaultOptions.includes('global_navigation')
      },
      stepError () {
        return this.defaultOptions.includes('step_error')
      },
      disabledStep () {
        return this.defaultOptions.includes('disable_payment')
      },
      progress () {
        return this.defaultOptions.includes('progress')
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
