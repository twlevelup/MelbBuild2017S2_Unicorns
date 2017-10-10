import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import jobs from '../../data/jobdb.json';
import './JobPost.css';

export class JobPostScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { jobId: props.jobId };
  }

  componentDidMount() {
    this.props.remapButtons(this.buttonActions);
  }

  componentDidUpdate() {
    this.props.remapButtons(this.buttonActions);
  }

  buttonActions = {
    LEFT: () => this.setState({ jobId: this.state.jobId - 1 }),
    RIGHT: () => this.setState({ jobId: this.state.jobId + 1 }),
    SCREEN: () => ButtonAction.goToPage({ pathname: '/job_detail', state: { jobId: this.state.jobId } }),
    BOTTOM: () => ButtonAction.goToPage('/'),
  };

  render() {
    return (
      <div id='Job Post'>
        <div id='job-posts-container'>
          <div>
            <h1 id='job-title'>{ jobs[this.state.jobId - 1].Title }</h1>
            <p id='job-tags'>Matching tags: { jobs[this.state.jobId - 1].Tags.join(', ') }</p>
          </div>
        </div>
      </div>
    );
  }
}

JobPostScreenComponent.propTypes = {
  remapButtons: PropTypes.func.isRequired,
  jobId: PropTypes.number,
};

JobPostScreenComponent.defaultProps = {
  jobId: 2,
};

export default WithButtonConfigs(JobPostScreenComponent);
