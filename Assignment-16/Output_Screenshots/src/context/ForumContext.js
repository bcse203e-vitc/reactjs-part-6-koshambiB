import React, { useState } from 'react';

const SkillSelection = ({ onSelectSkill }) => {
  const [selectedSkill, setSelectedSkill] = useState('');

  const handleSkillChange = (e) => {
    setSelectedSkill(e.target.value);
  };

  const handleSkillSubmit = (e) => {
    e.preventDefault();
    onSelectSkill(selectedSkill);
  };

  return (
    <div>
      <h2>Select a Skill</h2>
      <form onSubmit={handleSkillSubmit}>
        <select value={selectedSkill} onChange={handleSkillChange}>
          <option value="">Select a skill</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select>
        <button type="submit">Generate Roadmap</button>
      </form>
    </div>
  );
};

export default SkillSelection;
