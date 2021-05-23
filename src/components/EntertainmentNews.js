import React from 'react';
import VerticalList from './VerticalList';

const EntertainmentNews = ({data, loading}) => {
  return <VerticalList title="Entertainment" data={data} loading={loading} />;
};

export default EntertainmentNews;
