<template>
  <the-header></the-header>
  <section
    class="font-spartan max-w-screen-xl m-auto bg-neutralLighter h-full py-10"
  >
    <card-item></card-item>
    <card-item></card-item>
    <card-item></card-item>
  </section>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import CardItem from './components/card/CardItem.vue';

export default {
  components: {
    TheHeader,
    CardItem,
  },
};
</script>
