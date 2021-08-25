import React from 'react';

type HomeProps = {
  name: string;
};

function Home({ name }: HomeProps) {
  return <div>{name}</div>;
}

Home.defaultProps = {
  name: 'temp',
};

export default Home;
