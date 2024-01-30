import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Link } from '@devoinc/genesys-ui';

Link.displayName = 'Link';
const meta: Meta<React.ComponentProps<typeof Link>> = {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    colorScheme: {
      control: 'select',
      options: [
        'base',
        'inverse',
        'success',
        'error',
        'warning',
        'help',
        'info',
      ],
      description:
        'This property defines the color scheme. There are predefined types: base, error... etc.',
      table: {
        defaultValue: { summary: 'base' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size to define padding, line-height, font-size... etc.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    state: {
      control: 'select',
      options: ['disabled', 'enabled', 'focused', 'hovered', 'pressed'],
      description: 'Interaction state of the component.',
      table: {
        defaultValue: { summary: 'enabled' },
      },
    },
    children: {
      description: 'Content for the component.',
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Link>>;

export const Example: Story = {
  args: {
    colorScheme: 'base',
    size: 'md',
    state: 'enabled',
    children: 'The link text',
  },
};
