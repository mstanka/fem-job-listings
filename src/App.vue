<template>
  <the-header></the-header>
  <section
    class="font-spartan max-w-screen-xl m-auto bg-neutralLighter h-full py-10"
  >
    <ul>
      <card-item
        v-for="job in jobs"
        :key="job.id"
        :id="job.id"
        :company="job.company"
        :logo="job.logo"
        :isNew="job.new"
        :featured="job.featured"
        :position="job.position"
        :role="job.role"
        :level="job.level"
        :postedAt="job.postedAt"
        :contract="job.contract"
        :location="job.location"
        :languages="job.languages"
        :tools="job.tools"
      ></card-item>
    </ul>
  </section>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import CardItem from './components/card/CardItem.vue';
import jobsData from './data.json';

export default {
  components: {
    TheHeader,
    CardItem,
  },
  data() {
    return {
      jobs: jobsData,
    };
  },
};
</script>
