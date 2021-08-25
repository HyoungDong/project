import React from 'react';

type ProjectProps = {
  name: string;
};

function Project({ name }: ProjectProps) {
  return <div>{name}</div>;
}

Project.defaultProps = {
  name: 'temp',
};

export default Project;
