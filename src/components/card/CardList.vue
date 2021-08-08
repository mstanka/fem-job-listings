<template>
  <filter-list></filter-list>
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
</template>

<script>
import CardItem from './CardItem.vue';
import FilterList from '../filters/FilterList.vue';

export default {
  components: {
    CardItem,
    FilterList,
  },
  props: {
    jobs: Object,
  },
};
</script>
