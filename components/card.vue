<template>
  <div class="min-h-screen bg-gray-100 grid items-center justify-center">
    <div
      class="
        p-6
        bg-white
        flex
        items-center
        space-x-6
        rounded-lg
        shadow-md
        hover:scale-105
        transition
        transform
        duration-500
        cursor-pointer
      "
    >
      <div>
        <h1 class="text-xl font-bold text-gray-700 mb-2">
          {{ data.category }} {{ data.id }}
        </h1>
        <p class="text-gray-600 w-80 text-sm">
          {{ data.joke }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style scoped></style>
