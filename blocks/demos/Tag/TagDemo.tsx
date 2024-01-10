import * as React from 'react';

import { Tag } from '@devo/coco';

export interface TagDemoProps {
  colorScheme?:
    | 'primary'
    | 'secondary'
    | 'blend-base'
    | 'blend-inverse'
    | 'error'
    | 'help'
    | 'info'
    | 'neutral'
    | 'success'
    | 'data-blue'
    | 'data-bronze'
    | 'data-dusk'
    | 'data-green'
    | 'data-indigo'
    | 'data-magenta'
    | 'data-purple'
    | 'data-red'
    | 'data-sky'
    | 'data-slate'
    | 'data-teal'
    | 'warning';
  icon?: string;
  size?: 'sm' | 'md' | 'lg';
  text: string;
}

export const TagDemo: React.FC<TagDemoProps> = ({
  colorScheme = 'neutral',
  icon = 'tag_price_sale',
  size = 'md',
  text = 'Category',
}) => <Tag colorScheme={colorScheme} icon={icon} size={size} text={text} />;
