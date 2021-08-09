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
    <button class="btn" type="button" @click="clearFilters">Clear</button>
  </div>
</template>

<script>
export default {
  computed: {
    currentFilters() {
      return this.$store.getters.currentFilters;
    },
  },
  methods: {
    clearFilters() {
      this.$store.dispatch('clearFilters');
    },
  },
};
</script>
