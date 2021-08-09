export default {
  setFilter(state, payload) {
    const allCurrentFilters = state.allFilters;

    if (!allCurrentFilters.includes(payload)) {
      allCurrentFilters.push(payload);
    }
  },
  clearFilters(state) {
    state.allFilters = [];
  },
  removeFilter(state, payload) {
    console.log(payload);
    const allCurrentFilters = state.allFilters;
    const index = allCurrentFilters.indexOf(payload);
    allCurrentFilters.splice(index, 1);
  },
};
