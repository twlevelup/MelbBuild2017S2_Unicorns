import React from 'react';
import ReactDOM from 'react-dom';

import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import CounterScreen from './app/pages/CounterScreen/CounterScreen';
import ContactScreen from './app/pages/ContactListScreen/ContactListScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';
import JobInfoScreen from './app/pages/JobDetailScreen/JobDetailScreen';
import contacts from './app/data/contacts.json';
import jobs from './app/data/jobdb.json';
import userdb from './app/data/userdb.json';
import WatchApp from './framework';
import JobPostScreen from './app/pages/JobPostScreen/JobPostScreen';
import jobs from './app/data/jobdb.json';

const pages = [
  { path: '/', Component: HomeScreen, props: { userdb } },
  { path: '/contacts', Component: ContactScreen, props: { contacts } },
  { path: '/counter', Component: CounterScreen },
  { path: '/notfound', Component: NotFoundScreen },
  { path: '/jobpost', Component: JobPostScreen, props: { jobs } },
  { path: '/job_detail', Component: JobInfoScreen },
];

ReactDOM.render(
  <WatchApp pages={ pages } />,
  document.getElementById('root'));
