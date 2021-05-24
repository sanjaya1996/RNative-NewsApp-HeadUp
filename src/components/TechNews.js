import React from 'react';
import HorizontalList from './lists/HorizontalList';

const TechNews = ({data, loading, error}) => {
  return (
    <HorizontalList
      title="Technology"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default TechNews;
