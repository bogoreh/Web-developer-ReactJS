// src/components/JobList.js
import React, { memo } from 'react';
import JobCard from './JobCard';

const JobList = memo(({ jobs }) => {
  if (jobs.length === 0) {
    return <div className="no-results">No jobs found. Try different filters.</div>;
  }

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
});

export default JobList;