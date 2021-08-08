export default {
  jobs(state) {
    return state.jobs;
  },
  filteredJobs(state) {
    const filters = 'Frontend';
    return state.jobs.filter(job => job.role === filters)
  },
};
