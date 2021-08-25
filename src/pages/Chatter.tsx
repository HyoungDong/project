import React from 'react';

type ChatterProps = {
  name: string;
};

function Chatter({ name }: ChatterProps) {
  return <div>{name}</div>;
}

Chatter.defaultProps = {
  name: 'temp',
};

export default Chatter;
