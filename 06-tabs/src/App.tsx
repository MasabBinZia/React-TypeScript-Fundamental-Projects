import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'

const url: string = 'https://course-api.com/react-tabs-project';

interface Job {
  id: string;
  title: string;
  company: string;
  dates: string;
  duties: string[];
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async (): Promise<void> => {
    try {
      const response = await fetch(url);
      const data: Job[] = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <section className="section text-center">
    <h1>Loading...</h1>
  </section>
  }

  const { title, company, dates, duties } = jobs[value];

  return (
    <section className='section'>
      <div className='title mb-16 text-center'>
        <h2 className='font-bold underline'>Experience</h2>
      </div>
      <div className="job-center w-80vw mx-auto max-w-1170px">
        <div className="btn-container flex flex-row justify-center mb-16 flex-wrap">
        {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info font-normal">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty,index)=>{
            return(
              <div className="job-desc grid grid-cols-1 gap-8" key={index}>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button className='btn h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800' type='button'>
        More Info
      </button>
    </section>
  );
};

export default App;



