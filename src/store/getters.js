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
  jobsFiltered(state, getters) {
    // filter all jobs matching at least one chosen filter
    const jobs = getters.jobsUpdated;
    const currentFilters = state.allFilters;

    if (currentFilters.length === 0) {
      return jobs;
    }

    // const b = a1.some((val) => a2.indexOf(val) !== -1);
    return jobs.filter((job) =>
      job.filters.some((item) => currentFilters.indexOf(item) !== -1),
    );
  },
};
