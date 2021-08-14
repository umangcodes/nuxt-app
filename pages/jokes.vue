<template>
  <div>
    <h1>List of Jokes</h1>
    <Cardgrid />
  </div>
</template>

<script>
import Cardgrid from '../components/card-grid.vue'
export default {
  components: {
    Cardgrid,
  },
  data() {
    return {}
  },

  head() {
    return {
      title: 'Jokes',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'use the link to search for jokes with criteria. Powered by jokeApi v2',
        },
      ],
    }
  },
  async created() {
    await this.$store.dispatch('loadNewJokes', {
      category: 'Dark',
      type: 'single',
      flag: 'nsfw',
      amount: this.$store.state.amount,
    })
  },
}
</script>
