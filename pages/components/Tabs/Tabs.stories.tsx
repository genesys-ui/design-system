import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '@devoinc/genesys-ui';

Tabs.displayName = 'Tabs';
const meta: Meta<React.ComponentProps<typeof Tabs>> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    colorScheme: {
      control: 'radio',
      options: ['default', 'primary'],
      description:
        'ColorScheme to define the color of the marker, text... etc.',
      table: {
        defaultValue: { summary: 'default' },
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
    colorScheme: 'default',
  },
  render: (args) =>
    ((args) => {
      const [activeTab, setActiveTab] = React.useState(0);
      return (
        <Tabs {...args}>
          <Tabs.Item
            icon="gi-check_thick"
            label="Tiny"
            onTabClick={() => setActiveTab(0)}
            state={activeTab === 0 ? 'selected' : undefined}
            wide={false}
          />
          <Tabs.Item
            icon="gi-check_thick"
            label="Tab with a very very long title"
            onTabClick={() => setActiveTab(1)}
            state={activeTab === 1 ? 'selected' : undefined}
            wide={false}
          />
          <Tabs.Item
            label="Normal tab"
            onTabClick={() => setActiveTab(2)}
            state={activeTab === 2 ? 'selected' : undefined}
            wide={false}
          />

          <Tabs.Item
            label="Disabled tab"
            onTabClick={() => setActiveTab(3)}
            state="disabled"
            wide={false}
          />
        </Tabs>
      );
    })(args),
};
