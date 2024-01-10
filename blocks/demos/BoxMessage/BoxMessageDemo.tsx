import * as React from 'react';

import { BoxMessage } from '@devo/coco';

export interface BoxMessageDemoProps {
  status: 'error' | 'help' | 'info' | 'success' | 'warning';
}

export const BoxMessageDemo: React.FC<BoxMessageDemoProps> = ({
  status = 'info',
}) => (
  <BoxMessage
    title="This is some title"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    status={status}
  />
);
