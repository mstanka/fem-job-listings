export default {
  setFilter(state, payload) {
    const allCurrentFilters = state.allFilters;

    if (!allCurrentFilters.includes(payload)) {
      allCurrentFilters.push(payload);
    } else {
      const index = allCurrentFilters.indexOf(payload);
      allCurrentFilters.splice(index, 1);
    }
  },
  clearFilters(state) {
    state.allFilters = [];
  },
};
