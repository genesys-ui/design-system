import * as React from 'react';

import { TabsContainer, TabsItem } from '@devo/coco';

export interface TabsDemoProps {
  colorScheme?: 'default' | 'primary';
  contained?: boolean;
  tabsName: string;
}

export const TabsDemo: React.FC<TabsDemoProps> = ({
  colorScheme = 'default',
  contained,
  tabsName,
}) => (
  <TabsContainer
    tabsName={tabsName}
    colorScheme={colorScheme}
    contained={contained}
  >
    <TabsItem label="Tab one" state="active" />
    <TabsItem label="Tab two" />
    <TabsItem label="Tab three" />
    <TabsItem label="Tab four" state="disabled" />
  </TabsContainer>
);
