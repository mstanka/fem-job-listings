import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
import jobsData from '../data.json';

const store = createStore({
  state() {
    return {
      jobs: jobsData,
      allFilters: [],
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
