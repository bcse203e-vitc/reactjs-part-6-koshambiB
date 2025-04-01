import React, { useEffect, useState } from 'react';

const Roadmap = ({ skill }) => {
  const [roadmap, setRoadmap] = useState([]);

  useEffect(() => {
    // Fetch roadmap details from a JSON file or API
    const fetchRoadmap = async () => {
      const response = await fetch(`/roadmaps/${skill}.json`);
      const data = await response.json();
      setRoadmap(data);
    };

    if (skill) {
      fetchRoadmap();
    }
  }, [skill]);

  return (
    <div>
      <h2>Roadmap for {skill}</h2>
      {roadmap.length > 0 ? (
        <ul>
          {roadmap.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No roadmap available for this skill.</p>
      )}
    </div>
  );
};

export default Roadmap;
