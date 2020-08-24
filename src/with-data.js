import React, { useState, useEffect } from 'react';

const withData = (WrappedComponent) => {
  const WithData = ({ dataSource, ...props }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(dataSource)
        .then((response) => response.json())
        .then((data) => setData(data.slice(0, 5)));
    }, [dataSource]);

    return <WrappedComponent data={data} {...props} />;
  };
  return WithData;
};

export default withData;
