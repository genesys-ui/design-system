import * as React from 'react';

import { Card, CardProps } from '../Card';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CardReactProps extends Pick<CardProps, 'height' | 'url'> {}

export const CardReact: React.FC<CardReactProps> = ({
  height = '12rem',
  url,
}) => (
  <Card
    height={height}
    description="View this component in React"
    direction="horizontal"
    image="img/react-logo.png"
    target="_blank"
    title="View this component in our Genesys UI components library (React)"
    url={url}
  />
);
