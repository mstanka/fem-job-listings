<template>
  <div class="card w-full -mt-16">
    <div>
      <button
        class="btn-label"
        type="button"
        v-for="filter in currentFilters"
        :key="filter"
        
      >
        {{ filter }}
      </button>
    </div>
    <div class="text-sm">Clear</div>
  </div>
</template>

<script>
export default {
  computed: {
    currentFilters() {
      return this.$store.getters.currentFilters;
    },
  },
};
</script>
