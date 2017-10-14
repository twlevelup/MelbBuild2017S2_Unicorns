import React from 'react';
import { string } from 'prop-types';

const History = (props) => {
  const {
    Title,
    Department,
    Status,
  } = props;

  return (
    <div className='history'>
      <div className='Title'>
        <b>Title</b>: {Title}
      </div>
      <div className='Department'>
        <b>Department</b>: {Department}
      </div>
      <div className='Status'>
        <b>Status</b>: {Status}
      </div>
      <br />
    </div>
  );
};


History.propTypes = {
  Title: string.isRequired,
  Department: string.isRequired,
  Status: string.isRequired,
};

export default History;
