import * as React from 'react';

import { Card } from '../Card';

type Props = {
  url?: string;
};

export const CardFigma: React.FC<Props> = ({
  url = 'https://www.figma.com/community/file/1077910035665847768',
}) => (
  <Card
    description="The figma library to help our UX/UI designers."
    direction="horizontal"
    heading="Figma library"
    image="img/figma-logo.png"
    target="_blank"
    url={url}
  />
);
