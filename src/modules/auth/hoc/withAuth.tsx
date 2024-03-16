import React from 'react';
const withAuth = (WrappedComponent: any) => {
  const HOC = () => {
    const login = () => {};

    <WrappedComponent />;
  };
  return HOC;
};

export default withAuth;
