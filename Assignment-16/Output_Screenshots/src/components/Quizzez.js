import React, { useState } from 'react';

const Quizzes = ({ questions }) => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate results
    let score = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score += 1;
      }
    });
    setResults(score);
  };

  return (
    <div>
      <h2>Quizzes</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id}>
            <p>{question.text}</p>
            {question.options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  onChange={() => handleAnswerChange(question.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {results !== null && <p>Your score: {results} / {questions.length}</p>}
    </div>
  );
};

export default Quizzes;
