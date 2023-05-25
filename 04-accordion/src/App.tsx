import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './components/Question';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main >
      <div className='container w-auto mt-20 mr-auto ml-auto bg-white rounded pt-10 pr-8 max-w-4xl grid'>
        <h3 className='ml-6 font-medium font-bold'>Questions and Answers About Web 3.0 </h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
