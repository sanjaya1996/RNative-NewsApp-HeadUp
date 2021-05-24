import React from 'react';
import VerticalList from './lists/VerticalList';

const EntertainmentNews = ({data, loading, error}) => {
  return (
    <VerticalList
      title="Entertainment"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default EntertainmentNews;
