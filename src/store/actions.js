export default {
  addNewFilter(context, payload) {
    //....
    console.log(payload);
    context.commit('setFilter', newFilter);
  },
};
