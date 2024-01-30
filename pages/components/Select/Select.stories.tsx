import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Select } from '@devoinc/genesys-ui-form';

Select.displayName = 'Select';
const meta: Meta<React.ComponentProps<typeof Select>> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'A boolean indicating whether the field should be disabled or not.',
    },
    labelPosition: {
      control: 'radio',
      options: ['top', 'left', 'between'],
      description: 'Position of the label text relative to the input control.',
      table: {
        defaultValue: { summary: 'top' },
      },
    },
    status: {
      control: 'radio',
      options: ['base', 'success', 'error', 'warning'],
      description:
        'This property defines the status color schema for the field.',
      table: {
        defaultValue: { summary: 'base' },
      },
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
    placeholder: {
      control: 'text',
      description:
        'A text hint that describes the expected value of the text field',
    },
    helper: {
      control: 'text',
      description:
        // prettier-ignore
        'The message for the Helper: it\'s displayed as extra info to fill the form or the field or as status message if there are error, warning or success contexts.',
    },
    label: {
      control: 'text',
      description: 'Label for the component (aria-label is the same as Label).',
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Select>>;

export const Example: Story = {
  args: {
    label: 'Input label',
    labelPosition: 'top',
    placeholder: 'Select an option...',
    size: 'md',
    status: 'base',
  },
};
