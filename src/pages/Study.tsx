import React from 'react';

type StudyProps = {
  name: string;
};

function Study({ name }: StudyProps) {
  return <div>{name}</div>;
}

Study.defaultProps = {
  name: 'temp',
};

export default Study;
