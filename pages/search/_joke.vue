<template>
  <div>
    <span>This is joke : {{ id }}</span>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Joke #' + this.id,
      meta: [
        {
          hid: 'joke' + this.id,
          name: 'dazzle',
          description: `individual joke number ${this.id}`,
        },
      ],
    }
  },
  computed: {
    id() {
      return this.$route.params.joke
    },
  },
}
</script>

<style></style>
