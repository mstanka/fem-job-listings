export default {
  setFilter(context, payload) {
    const newFilter = payload;
    console.log(payload);
    context.commit('setFilter', newFilter);
  },
  clearFilters(context) {
    context.commit('clearFilters');
  },
  removeFilter(context, payload) {
    context.commit('removeFilter', payload);
  },
};
