import React from 'react';
import { Exception } from 'ant-design-pro';

const PartiesListError: React.FC = () => {
  return (
    <Exception
      title="Oops!"
      desc="Something went wrong"
      img={'../static/warning.svg'}
    />
  );
};

export default PartiesListError;
