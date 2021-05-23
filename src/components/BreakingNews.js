import React from 'react';
import HorizontalList from './HorizontalList';

const BreakingNews = ({data}) => {
  console.log(data);
  return <HorizontalList title="Breaking News" data={data} />;
};

export default BreakingNews;
