<template>
  <div>
    <h1>Jokes page</h1>
  </div>
</template>

<script>
export default {
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
}
</script>
