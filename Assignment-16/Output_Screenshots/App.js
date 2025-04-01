import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SkillSelection from './components/SkillSelection';
import Roadmap from './components/Roadmap';
import ProgressTracker from './components/ProgressTracker';
import Quizzes from './components/Quizzes';
import Certificate from './components/Certificate';
import Community from './components/Community';
import { ProgressProvider } from './context/ProgressContext';
import { ForumProvider } from './context/ForumContext';
import './styles.css';

const App = () => {
  const [selectedSkill, setSelectedSkill] = useState('');

  const handleSelectSkill = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <Router>
      <div className="App">
        <h1>Personalized Learning Pathway Generator</h1>
        <Switch>
          <Route path="/" exact>
            <SkillSelection onSelectSkill={handleSelectSkill} />
          </Route>
          <Route path="/roadmap">
            <Roadmap skill={selectedSkill} />
          </Route>
          <Route path="/progress">
            <ProgressProvider>
              <ProgressTracker />
            </ProgressProvider>
          </Route>
          <Route path="/quizzes">
            <Quizzes questions={[]} />
          </Route>
          <Route path="/certificate">
            <Certificate name="User" skill={selectedSkill} />
          </Route>
          <Route path="/community">
            <ForumProvider>
              <Community />
            </ForumProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
