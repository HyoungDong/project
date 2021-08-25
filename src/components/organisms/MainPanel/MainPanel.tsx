import React from 'react';
import { HeaderBar } from '../../molecules';

type MainPanelProps = {
  name: string;
};

function MainPanel({ name }: MainPanelProps) {
  return <HeaderBar />;
}

MainPanel.defaultProps = {
  name: 'temp',
};

export default MainPanel;
