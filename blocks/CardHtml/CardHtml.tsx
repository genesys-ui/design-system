import * as React from 'react';

import { Card, CardProps } from '../Card';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CardHtmlProps extends Pick<CardProps, 'height' | 'url'> {}

export const CardHtml: React.FC<CardHtmlProps> = ({
  height = '12rem',
  url,
}) => (
  <Card
    height={height}
    direction="horizontal"
    description="View this component in HTML & CSS"
    image="img/html-5-logo.png"
    target="_blank"
    title="View this component in our library Genesys Styles (HTML & CSS)"
    url={url}
  />
);
