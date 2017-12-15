<template>
  <div class="layout-padding" style="max-width: 500px;">
    <p class="caption">Chat</p>
    <q-chat-message v-for="msg in messages" :key="msg" :label="msg.label" :sent="msg.sent" :text-color="msg.textColor" :bg-color="msg.bgColor" :name="msg.name" :avatar="msg.avatar" :text="msg.text" :stamp="msg.stamp" />

    <q-chat-message name="John" avatar="statics/avatars/guy-avatar.png">
      <q-spinner-dots size="2rem" />
    </q-chat-message>
  </div>
</template>

<script>
  import { QChatMessage, QSpinnerDots } from 'quasar'
  export default {
    components: {
      QChatMessage, QSpinnerDots
    },
    data: () => ({
      messages: [
        {
          label: 'Monday, 3rd'
        },
        {
          name: 'John',
          text: ['Hey, whats up?'],
          avatar: 'statics/avatars/guy-avatar.png',
          stamp: 'Yesterday 12:00'
        },
        {
          name: 'Joe',
          text: ['Not much...how are you?'],
          sent: true,
          textColor: 'white',
          bgColor: 'tertiary',
          avatar: 'statics/avatars/boy-avatar.png',
          stamp: 'Yesterday 12:02'
        },
        {
          label: 'Tues, 4th'
        },
        {
          name: 'John',
          bgColor: 'amber',
          textColor: 'primary',
          text: ['Lets hang out today!'],
          avatar: 'statics/avatars/guy-avatar.png',
          stamp: 'Today 13:55'
        },
        {
          name: 'Joe',
          text: ['Ya, definitely...what time?'],
          sent: true,
          textColor: 'white',
          bgColor: 'tertiary',
          avatar: 'statics/avatars/boy-avatar.png',
          stamp: 'Yesterday 12:02'
        }
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
