<template>
  <!-- component -->
  <div class="px-1 w-max">
    <div
      class="
        grid
        md:grid-cols-1
        lg:grid-cols-2
        md:gap-x-10
        xl-grid-cols-2
        gap-x-80
      "
    >
      <div v-for="joke in jokes" :key="joke.id">
        <Card :data="joke" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from './card.vue'

export default {
  components: {
    Card,
  },
  computed: {
    ...mapState(['jokes']),
  },
}
</script>

<style></style>
