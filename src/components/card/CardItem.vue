<template>
  <div class="card" :class="isFeaturedStyle">
    <div class="md:flex md:flex-row md:items-center md:justify-between">
      <img
        :src="logo"
        :alt="company"
        class="
          absolute
          md:relative
          w-12
          h-12
          -top-6
          md:top-0
          left-6
          md:left-0 md:mr-4
        "
      />
      <div>
        <div class="flex items-center mt-2 md:mt-0">
          <h3 class="text-sm text-primary font-bold mr-2 md:mr-0">
            {{ company }}
          </h3>
          <button class="btn btn-primary" type="button" v-if="isNew">
            NEW!
          </button>
          <button class="btn btn-secondary" type="button" v-if="featured">
            FEATURED
          </button>
        </div>
        <h2 class="text-neutralDarker font-bold py-2">
          {{ position }}
        </h2>
        <div
          class="
            text-neutralDark
            flex
            items-center
            border-b border-neutralDark
            md:border-none
            pb-2
            md:pb-0
            text-sm
          "
        >
          <span>{{ postedAt }}</span>
          <span class="mx-1">&#183;</span>
          <span>{{ contract }}</span>
          <span class="mx-1"> &#183;</span>
          <span>{{ location }}</span>
        </div>
      </div>
    </div>

    <div class="pt-2 md:pt-0 flex flex-wrap items-center">
      <button
        class="btn-label"
        type="button"
        @click="toggleFilter"
        :value="role"
      >
        {{ role }}
      </button>
      <button
        class="btn-label"
        type="button"
        @click="toggleFilter"
        :value="level"
      >
        {{ level }}
      </button>
      <button
        v-for="language in languages"
        :key="language"
        class="btn-label"
        type="button"
        @click="toggleFilter"
        :value="language"
      >
        {{ language }}
      </button>
      <button
        v-for="tool in tools"
        :key="tool"
        class="btn-label"
        type="button"
        @click="toggleFilter"
        :value="tool"
      >
        {{ tool }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    company: String,
    logo: String,
    isNew: Boolean,
    featured: Boolean,
    position: String,
    role: String,
    level: String,
    postedAt: String,
    contract: String,
    location: String,
    languages: Array,
    tools: Array,
  },
  computed: {
    isFeaturedStyle() {
      return this.featured ? 'border-l-4 border-primary' : null;
    },
  },
  methods: {
    toggleFilter(event) {
      this.$store.dispatch('setFilter', event.target.value);
    },
  },
};
</script>
