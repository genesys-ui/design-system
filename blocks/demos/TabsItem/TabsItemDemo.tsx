import * as React from 'react';

import { TabsItem } from '@devo/coco';

export interface TabsItemDemoProps {
  href?: string;
  iconId?: string;
  label: string;
  onActionClick?: () => void;
  onTabClick: () => void;
  size?: 'sm' | 'md' | 'lg';
  state?: 'base' | 'active' | 'disabled';
  target?: '_blank' | '_parent' | '_self' | '_top';
  wide?: boolean;
}

export const TabsItemDemo: React.FC<TabsItemDemoProps> = ({
  href,
  iconId,
  label,
  onActionClick,
  onTabClick,
  size = 'md',
  state = 'base',
  target,
  wide = false,
}) => (
  <TabsItem
    href={href}
    iconId={iconId}
    label={label}
    onActionClick={onActionClick}
    onTabClick={onTabClick}
    size={size}
    state={state}
    target={target}
    wide={wide}
  />
);
