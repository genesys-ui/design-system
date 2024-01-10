import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@devoinc/genesys-ui';

Button.displayName = 'Button';
const meta: Meta<React.ComponentProps<typeof Button>> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colorScheme: {
      control: 'select',
      options: [
        'accent-high',
        'accent',
        'neutral',
        'blend-base',
        'blend-inverse',
        'quiet',
        'success',
        'error',
        'warning',
        'help',
        'info',
      ],
      description: `It defines the color schema for the background and text color.
There are predefined types: accent-high, accent... etc.`,
      table: {
        defaultValue: { summary: 'neutral' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description:
        'Size to define padding, line-height, font-size... etc. of the Button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    state: {
      control: 'select',
      options: [
        'enabled',
        'hovered',
        'focused',
        'pressed',
        'expanded',
        'selected',
        'activated',
        'loading',
        'loading-error',
        'loading-success',
        'disabled',
      ],
      description: `It Sets the color scheme adjustments according to component state.`,
      table: {
        defaultValue: { summary: 'enabled' },
      },
    },
    children: {
      // eslint-disable-next-line quotes
      description: `Main content of the button (usually a text).`,
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Button>>;

export const Example: Story = {
  args: {
    colorScheme: 'neutral',
    size: 'md',
    state: 'enabled',
    children: 'Button text',
  },
};

export const AccAriaControls: Story = {
  render: () => (
    <Button aria-haspopup="true" aria-controls="modal-id">
      Button text
    </Button>
  ),
};

export const AccAriaExpanded: Story = {
  render: () => (
    <Button state="expanded" aria-controls="dropdown-id" icon="gi-arrow_up_fat">
      Button text
    </Button>
  ),
};
