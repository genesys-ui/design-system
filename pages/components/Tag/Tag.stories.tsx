import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tag } from '@devoinc/genesys-ui';

Tag.displayName = 'Tag';
const meta: Meta<React.ComponentProps<typeof Tag>> = {
  title: 'Components/Tag',
  component: Tag,
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
        'Size to define padding, line-height, font-size... etc. of the component.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    text: {
      control: 'text',
      // prettier-ignore
      description: 'Text for the component (it shouldn\'t be too long)',
    },
    quiet: {
      control: 'boolean',
      description: 'Defines if the tag has background color or use a marker.',
    },
    wide: {
      control: 'boolean',
      description: 'It Defines if the tag spans the full width of its parent.',
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Tag>>;

export const Example: Story = {
  args: {
    colorScheme: 'neutral',
    size: 'md',
    text: 'Tag text',
  },
};
