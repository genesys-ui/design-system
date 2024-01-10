import * as React from 'react';

import { IconButton } from '@devo/coco';

export interface IconButtonDemoProps {
  colorScheme?:
    | 'accent'
    | 'accent-high'
    | 'blend-base'
    | 'error'
    | 'help'
    | 'info'
    | 'quiet'
    | 'neutral'
    | 'success'
    | 'warning';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  state?:
    | 'enabled'
    | 'hovered'
    | 'focused'
    | 'pressed'
    | 'expanded'
    | 'selected'
    | 'activated'
    | 'disabled';
  isCircular?: boolean;
  isIconBold?: boolean;
}

export const IconButtonDemo: React.FC<IconButtonDemoProps> = ({
  colorScheme = 'neutral',
  isCircular,
  isIconBold,
  size = 'md',
  state = 'enabled',
}) => (
  <IconButton
    colorScheme={colorScheme}
    icon="reload_refresh_update"
    isCircular={isCircular}
    isIconBold={isIconBold}
    size={size}
    state={state}
  />
);
