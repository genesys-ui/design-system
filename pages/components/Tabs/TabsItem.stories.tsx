import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TabsItem } from '@devoinc/genesys-ui';

TabsItem.displayName = 'TabsItem';
const meta: Meta<React.ComponentProps<typeof TabsItem>> = {
  title: 'Components/TabsItem',
  component: TabsItem,
  argTypes: {
    icon: {
      control: 'text',
      description: 'The icon to the left of the text.',
    },
    label: {
      control: 'text',
      description: 'The text content of the TabsItem.',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description:
        'Size to define padding, line-height, font-size... etc. of the component.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    state: {
      control: 'radio',
      options: ['disabled', 'enabled', 'selected'],
      description: 'The state of the TabsItem',
      table: {
        defaultValue: { summary: 'enabled' },
      },
    },
    wide: {
      control: 'boolean',
      description: 'Distribute the whole container with between tabs.',
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof TabsItem>>;

export const Example: Story = {
  args: {
    size: 'md',
    state: 'enabled',
    label: 'TabsItem text content',
  },
};
