import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '@devoinc/genesys-ui';
import { GIReloadRefreshUpdate } from '@devoinc/genesys-icons';

IconButton.displayName = 'IconButton';
const meta: Meta<React.ComponentProps<typeof IconButton>> = {
  title: 'Components/IconButton',
  component: IconButton,
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
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      description:
        'Size to define padding, line-height, font-size... etc. of the IconButton.',
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
    icon: {
      // eslint-disable-next-line quotes
      description: `The icon for the IconButton.`,
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof IconButton>>;

export const Example: Story = {
  args: {
    colorScheme: 'neutral',
    size: 'md',
    state: 'enabled',
    icon: 'reload_refresh_update',
  },
};

export const AccAriaControls: Story = {
  render: () => (
    <IconButton
      aria-haspopup="true"
      aria-controls="modal-id"
      icon="gi-reload_refresh_update"
    />
  ),
};

export const AccAriaExpanded: Story = {
  render: () => (
    <IconButton
      state="expanded"
      aria-controls="dropdown-id"
      icon="gi-reload_refresh_update"
    />
  ),
};
