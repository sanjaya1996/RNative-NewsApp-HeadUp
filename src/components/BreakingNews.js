import React from 'react';
import HorizontalList from './lists/HorizontalList';

const BreakingNews = ({data, loading, error}) => {
  return (
    <HorizontalList
      title="Breaking News"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default BreakingNews;
