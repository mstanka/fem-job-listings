export default {
  setFilter(context, payload) {
    const newFilter = payload;
    console.log(payload);
    context.commit('setFilter', newFilter);
  },
};
