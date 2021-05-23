import React from 'react';
import HorizontalList from './HorizontalList';

const BreakingNews = ({data, loading}) => {
  return <HorizontalList title="Breaking News" data={data} loading={loading} />;
};

export default BreakingNews;
