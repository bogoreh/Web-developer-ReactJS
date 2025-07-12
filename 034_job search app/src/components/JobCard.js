// src/components/JobCard.js
import React, { memo } from 'react';

const JobCard = memo(({ job }) => {
  // Format date without date-fns
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <article className="job-card">
      <div className="job-header">
        <div className="company-logo">
          {job.company.substring(0, 2)}
        </div>
        <div>
          <h2 className="job-title">{job.position}</h2>
          <p className="company-name">{job.company}</p>
        </div>
      </div>
      
      <div className="job-details">
        <span className="job-location">{job.location}</span>
        <span className="job-type">{job.contract}</span>
      </div>
      
      <div className="job-footer">
        <time dateTime={job.postedAt} className="post-time">
          {formatDate(job.postedAt)}
        </time>
        <button className="apply-button">Apply Now</button>
      </div>
    </article>
  );
});

export default JobCard;