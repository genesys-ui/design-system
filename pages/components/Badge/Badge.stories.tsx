import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@devoinc/genesys-ui';

Badge.displayName = 'Badge';
const meta: Meta<React.ComponentProps<typeof Badge>> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    colorScheme: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'neutral',
        'blend-base',
        'blend-inverse',
        'success',
        'error',
        'warning',
        'help',
        'info',
        'data-blue',
        'data-bronze',
        'data-dusk',
        'data-green',
        'data-indigo',
        'data-magenta',
        'data-purple',
        'data-red',
        'data-sky',
        'data-slate',
        'data-teal',
      ],
      description: `It defines the color schema for the background and text color.
There are predefined types: primary, secondary... etc.
It's possible to use a custom color used for the background color and auto-generated for the text based on this one to maintain AA accessible contrast.`,
      table: {
        defaultValue: { summary: 'neutral' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description:
        'Size to define padding, line-height, font-size... etc. of the Badge.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    text: {
      // eslint-disable-next-line quotes
      description: `Text for the Badge (it shouldn't be longer than 2 characters)`,
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Badge>>;

export const Example: Story = {
  args: {
    colorScheme: 'neutral',
    size: 'md',
    text: '42',
  },
};

export const Role: Story = {
  render: () => (
    <>
      <Badge
        aria-label="42 alert notifications"
        aria-atomic="true"
        aria-live="polite"
        role="status"
        text="42"
      />
      <Badge
        colorScheme="error"
        aria-label="There is an error with the alert"
        title="There is an error with the alert"
        aria-atomic="true"
        aria-live="polite"
        role="status"
      />
    </>
  ),
};
