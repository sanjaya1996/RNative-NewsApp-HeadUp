import React from 'react';
import HorizontalList from './lists/HorizontalList';

const TechNews = ({data, loading}) => {
  return <HorizontalList title="Technology" data={data} loading={loading} />;
};

export default TechNews;
