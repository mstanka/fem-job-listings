<template>
  <div
    class="card w-full -mt-16 flex-row justify-between"
    v-if="isFilterActive"
  >
    <div class="flex flex-wrap">
      <button
        class="btn-filter"
        type="button"
        v-for="filter in currentFilters"
        :key="filter"
        @click="removeItem"
        :value="filter"
      >
        {{ filter }}
        <div
          class="
            p-1
            ml-1
            bg-primary
            rounded-r-md
            hover:bg-neutralDarker
            transition
            duration-500
            ease-in
          "
        >
          <img
            src="../../assets/images/icon-remove.svg"
            alt="delete icon"
            class="w-4 inline text-neutralLight hover:bg-neutralDarker"
          />
        </div>
      </button>
    </div>
    <button
      class="
        btn
        font-bold
        text-neutralDark
        hover:text-primary hover:border-b
        transition
        duration-500
        ease-in
      "
      type="button"
      @click="clearFilters"
    >
      Clear
    </button>
  </div>
</template>

<script>
export default {
  pros: {
    filters: Array,
  },
  computed: {
    currentFilters() {
      return this.$store.getters.currentFilters;
    },
    isFilterActive() {
      return this.currentFilters.length !== 0;
    },
  },
  methods: {
    clearFilters() {
      this.$store.dispatch('clearFilters');
    },
    removeItem(event) {
      this.$store.dispatch('removeFilter', event.target.value);
    },
  },
};
</script>
