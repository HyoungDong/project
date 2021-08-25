import React from 'react';

type AllProps = {
  name: string;
};

function All({ name }: AllProps) {
  return <div>{name}</div>;
}

All.defaultProps = {
  name: 'temp',
};

export default All;
