import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Input } from '@devoinc/genesys-ui-form';

Input.displayName = 'Input';
const meta: Meta<React.ComponentProps<typeof Input>> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    labelPosition: {
      control: 'radio',
      options: ['top', 'left', 'between'],
      description: `Position of the label text relative to the input control.`,
      table: {
        defaultValue: { summary: 'top' },
      },
    },
    status: {
      control: 'radio',
      options: ['base', 'success', 'error', 'warning'],
      description: `This property defines the status color schema for the field.`,
      table: {
        defaultValue: { summary: 'base' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description:
        'Size to define padding, line-height, font-size... etc. of the Input.',
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
        "The message for the Helper: it's displayed as extra info to fill the form or the field or as status message if there are error, warning or success contexts.",
    },
    disabled: {
      control: 'boolean',
      description:
        'A boolean indicating whether the field should be disabled or not.',
    },
    readOnly: {
      control: 'boolean',
      description:
        'A boolean indicating whether the field should be readonly or not.',
    },
    label: {
      control: 'text',
      description: 'Label for the input (aria-label is the same as Label).',
    },
    type: {
      control: 'text',
      description: 'The type of input field, such as "text" or "email".',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Input>>;

export const Example: Story = {
  args: {
    label: 'Input label',
    labelPosition: 'top',
    placeholder: 'This is the placeholder...',
    size: 'md',
    status: 'base',
    type: 'text',
  },
};
