<template>
  <div class="card w-full -mt-16">
    <div>
      <button class="btn-label" type="button">filters</button>
    </div>
    <div class="text-sm">Clear</div>
  </div>
</template>

<script>
export default {
  computed: {
    getFilters() {
      return this.$store.getters.getFilters;
    },
  },
};
</script>
