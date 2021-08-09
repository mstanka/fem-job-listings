export default {
  jobs(state) {
    return state.jobs;
  },
  jobsUpdated(_, getters) {
    const jobs = getters.jobs;
    return jobs.map((job) => ({
      ...job,
      filters: [job.position, job.role, ...job.languages, ...job.tools],
    }));
  },
  currentFilters(state) {
    return state.allFilters;
  },
};
