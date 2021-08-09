export default {
  setFilter(context, payload) {
    context.commit('setFilter', payload);
  },
  clearFilters(context) {
    context.commit('clearFilters');
  },
  removeFilter(context, payload) {
    context.commit('removeFilter', payload);
  },
};
