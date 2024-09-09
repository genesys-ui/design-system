import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tabs, useTabsAccessibility } from '@devoinc/genesys-ui';
import { GIChart, GICheckThick } from '@devoinc/genesys-icons';

Tabs.displayName = 'Tabs';
const meta: Meta<React.ComponentProps<typeof Tabs>> = {
  title: 'Components/FloatingMessage',
  component: Tabs,
  argTypes: {
    colorScheme: {
      control: 'radio',
      options: ['base', 'primary'],
      description:
        'ColorScheme to define the color of the marker, text... etc.',
      table: {
        defaultValue: { summary: 'base' },
      },
    },
    contained: {
      control: 'boolean',
      description: 'Boxed appearance of the component.',
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Tabs>>;

export const Example: Story = {
  args: {
    colorScheme: 'base',
    size: 'md',
  },
  render: (args) =>
    ((args) => {
      const tabsRef = React.useRef<HTMLDivElement>();
      const [activeTab, setActiveTab] = React.useState(0);
      useTabsAccessibility({ activeTab, tabsRef });
      return (
        <Tabs {...args}>
          <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
            <Tabs.Item
              icon={<GIChart />}
              label="Tiny"
              onClick={() => setActiveTab(0)}
              state={activeTab === 0 ? 'selected' : undefined}
              wide={false}
            />
            <Tabs.Item
              icon={<GICheckThick />}
              label="Tab with a very very long title"
              onClick={() => setActiveTab(1)}
              state={activeTab === 1 ? 'selected' : undefined}
              wide={false}
            />
            <Tabs.Item
              label="Normal tab"
              onClick={() => setActiveTab(2)}
              state={activeTab === 2 ? 'selected' : undefined}
              wide={false}
            />

            <Tabs.Item
              label="Disabled tab"
              onClick={() => setActiveTab(3)}
              state="disabled"
              wide={false}
            />
          </Tabs.List>
        </Tabs>
      );
    })(args),
  tags: ['isHidden'],
};
