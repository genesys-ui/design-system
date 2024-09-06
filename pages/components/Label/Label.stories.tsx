import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Label } from '@devoinc/genesys-ui';

Label.displayName = 'Label';
const meta: Meta<React.ComponentProps<typeof Label>> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    colorScheme: {
      control: 'select',
      options: [
        'base',
        'inverse',
        'strong',
        'stronger',
        'weak',
        'weaker',
        'weakest',
        'success',
        'error',
        'warning',
        'help',
        'info',
      ],
      description:
        'This property defines the color scheme for the Label. There are predefined types: base, error... etc.',
      table: {
        defaultValue: { summary: 'strong' },
      },
    },
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size to define padding, line-height, font-size... etc.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    srOnly: {
      control: 'boolean',
      description: 'The label is hidden but accessible for screen-readers.',
    },
    truncated: {
      control: 'boolean',
      description:
        // prettier-ignore
        'If the text of the label doesn\'t fit then there is a text ellipsis',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    cursor: {
      control: 'text',
      description:
        'The cursor CSS property sets the mouse cursor, if any, to show when the mouse pointer is over an element.',
    },
    children: {
      description: 'Content for the Label.',
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Label>>;

export const Example: Story = {
  args: {
    colorScheme: 'strong',
    size: 'md',
    children: 'The label text',
    truncated: true,
  },
  tags: ['isHidden'],
};
