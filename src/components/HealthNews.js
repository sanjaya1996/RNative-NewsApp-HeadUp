import React from 'react';
import VerticalList from './lists/VerticalList';

const HealthNews = ({data, loading, error}) => {
  return (
    <VerticalList
      title="Health News"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default HealthNews;
