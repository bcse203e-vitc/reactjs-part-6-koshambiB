import React, { useContext } from 'react';
import { ProgressContext } from '../context/ProgressContext';
import { Progress } from 'recharts';

const ProgressTracker = () => {
  const { progress } = useContext(ProgressContext);

  return (
    <div>
      <h2>Learning Progress</h2>
      <Progress percent={progress} />
      <p>{progress}% completed</p>
    </div>
  );
};

export default ProgressTracker;
