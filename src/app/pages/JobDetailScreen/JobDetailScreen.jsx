import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jobs from '../../data/jobdb.json';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import Job from './components/Job/Job';
import './job_detail.css';

export class JobDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { jobId: props.jobId };
  }

  componentDidMount() {
    this.props.remapButtons(this.buttonActions);
  }

  buttonActions = {
    LEFT: () => ButtonAction.goToPage({ pathname: '/jobpost', state: { jobId: this.state.jobId } }),
    RIGHT: () => ButtonAction.goToPage('/counter'),
    TOP: () => ButtonAction.scrollUp(),
    BOTTOM: () => ButtonAction.scrollDown(),
  };

  render() {
    return (
      <div id='contact-screen' className='job-screen'>
        <Job
          className='job-list'
          JobId={ jobs[this.state.jobId - 1].JobId }
          Title={ jobs[this.state.jobId - 1].Title }
          Department={ jobs[this.state.jobId - 1].Department }
          Company={ jobs[this.state.jobId - 1].Company }
          Description={ jobs[this.state.jobId - 1].Description }
          Salary={ jobs[this.state.jobId - 1].Salary }
        />
      </div>
    );
  }
}

JobDetailScreen.propTypes = {
  remapButtons: PropTypes.func.isRequired,
  jobId: PropTypes.number,
};

JobDetailScreen.defaultProps = {
  jobId: 1,
};

export default WithButtonConfigs(JobDetailScreen);
