// src/hooks/useJobSearch.js
import { useState, useEffect, useCallback } from 'react';

const useJobSearch = (filters) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJobs = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Correct mock data as an array of job objects
      const mockJobs = [
        {
          id: 1,
          position: "Frontend Developer",
          company: "Tech Solutions Inc",
          location: "New York, NY",
          contract: "Full Time",
          postedAt: "2023-06-15",
          description: "We're looking for an experienced frontend developer..."
        },
        {
          id: 2,
          position: "Backend Engineer",
          company: "Data Systems LLC",
          location: "San Francisco, CA",
          contract: "Full Time",
          postedAt: "2023-06-20",
          description: "Backend developer needed for Node.js position..."
        },
        {
          id: 3,
          position: "UI/UX Designer",
          company: "Creative Designs Co",
          location: "Remote",
          contract: "Part Time",
          postedAt: "2023-06-18",
          description: "Looking for a talented UI/UX designer..."
        },
        {
          id: 4,
          position: "DevOps Engineer",
          company: "Cloud Infrastructure Ltd",
          location: "Austin, TX",
          contract: "Full Time",
          postedAt: "2023-06-22",
          description: "DevOps specialist needed for CI/CD pipelines..."
        }
      ];

      // Filtering logic
      const filteredJobs = mockJobs.filter(job => {
        const matchesSearch = 
          filters.search === '' || 
          job.position.toLowerCase().includes(filters.search.toLowerCase()) ||
          job.company.toLowerCase().includes(filters.search.toLowerCase());
        
        const matchesLocation = 
          filters.location === '' || 
          job.location.toLowerCase().includes(filters.location.toLowerCase());
        
        const matchesEmployment = 
          !filters.fullTime || 
          job.contract === 'Full Time';
        
        return matchesSearch && matchesLocation && matchesEmployment;
      });

      setJobs(filteredJobs);
    } catch (err) {
      setError('Failed to fetch jobs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    const timerId = setTimeout(fetchJobs, 300);
    return () => clearTimeout(timerId);
  }, [filters, fetchJobs]);

  return { jobs, loading, error };
};

export default useJobSearch;