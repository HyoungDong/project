import React from 'react';

type ITNewsProps = {
  name: string;
};

function ITNews({ name }: ITNewsProps) {
  return <div>{name}</div>;
}

ITNews.defaultProps = {
  name: 'temp',
};

export default ITNews;
