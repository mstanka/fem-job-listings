<template>
  <the-header> </the-header>
  <section
    class="font-spartan max-w-screen-xl m-auto bg-neutralLighter h-full py-10"
  >
    <card-list :jobs="currentJobs"></card-list>
  </section>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import CardList from './components/card/CardList.vue';

export default {
  components: {
    TheHeader,
    CardList,
  },
  computed: {
    currentJobs() {
      return this.$store.getters.jobsUpdated;
    },
  },
};
</script>
