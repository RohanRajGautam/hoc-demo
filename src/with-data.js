import React, { useState, useEffect } from 'react';

const withData = (WrappedComponent, datasource) => {
  const WithData = ({ ...props }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(datasource)
        .then((response) => response.json())
        .then((data) => setData(data.slice(0, 5)));
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };
  return WithData;
};

export default withData;
