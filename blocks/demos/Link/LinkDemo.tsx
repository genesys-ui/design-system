import * as React from 'react';

import { Link } from '@devo/coco';

export interface LinkDemoProps {
  colorScheme:
    | 'base'
    | 'inverse'
    | 'success'
    | 'error'
    | 'help'
    | 'info'
    | 'warning';
  isUnderlined?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: string;
}

export const LinkDemo: React.FC<LinkDemoProps> = ({
  children = 'This a link',
  colorScheme = 'base',
  isUnderlined,
  size = 'md',
}) => (
  <Link size={size} isUnderlined={isUnderlined} colorScheme={colorScheme}>
    {children}
  </Link>
);
