import React, { useContext, useState } from 'react';
import { ForumContext } from '../context/ForumContext';

const Community = () => {
  const { discussions, addDiscussion } = useContext(ForumContext);
  const [newDiscussion, setNewDiscussion] = useState('');

  const handleDiscussionChange = (e) => {
    setNewDiscussion(e.target.value);
  };

  const handleDiscussionSubmit = (e) => {
    e.preventDefault();
    addDiscussion(newDiscussion);
    setNewDiscussion('');
  };

  return (
    <div>
      <h2>Community Discussions</h2>
      <form onSubmit={handleDiscussionSubmit}>
        <input
          type="text"
          value={newDiscussion}
          onChange={handleDiscussionChange}
          placeholder="Start a new discussion"
        />
        <button type="submit">Post</button>
      </form>
      <ul>
        {discussions.map((discussion, index) => (
          <li key={index}>{discussion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Community;
