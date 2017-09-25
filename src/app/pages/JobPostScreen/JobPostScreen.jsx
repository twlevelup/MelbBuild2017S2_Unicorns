import React from 'react';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';

export const JobPostScreenComponent = () => {
  return (
    <div id='Job Post'>
      <div id='job-posts-container'>
        <div>
          <h1 id='job-title'>Job Title</h1>
          <p id='job-tags'>Matching tags:</p>
        </div>
      </div>
    </div>
  );
};

export const JobPostScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/job_detail'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(JobPostScreenComponent, JobPostScreenButtons);
