import React from 'react';
import {
  string,
  arrayOf,
  shape,
} from 'prop-types';

import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import Job from './components/Job/Job';
import './job_detail.css';

export const JobDetailScreen = ({ jobs }) => {
  // console.log('Hello!!!!');
  // console.log(jobId);
  // const i = parseInt(jobId, 10);
  // console.log(i);
  // if (!isNaN(i) && i < jobs.length) {
    // return (
      // <div id='contact-screen' className='job-screen'>
        // <Job
          // className='job-list'
          // JobId={ jobs[i - 1].JobId }
          // Title={ jobs[i - 1].Title }
          // Department={ jobs[i - 1].Department }
          // Company={ jobs[i - 1].Company }
          // Description={ jobs[i - 1].Description }
          // Salary={ jobs[i - 1].Salary }
        // />
      // </div>
    // );
  // }
  return (
    <div id='contact-screen' className='job-screen'>
      <Job
        className='job-list'
        JobId={ jobs[0].JobId }
        Title={ jobs[0].Title }
        Department={ jobs[0].Department }
        Company={ jobs[0].Company }
        Description={ jobs[0].Description }
        Salary={ jobs[0].Salary }
      />
    </div>
  );
};

JobDetailScreen.propTypes = {
  jobs: arrayOf(shape({
    JobId: string,
    Title: string,
    Company: string,
  })).isRequired,
  // jobId: string.isRequired,
};

export const JobDetailScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/jobpost'),
  RIGHT: () => ButtonAction.goToPage('/counter'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(JobDetailScreen, JobDetailScreenButtons);
