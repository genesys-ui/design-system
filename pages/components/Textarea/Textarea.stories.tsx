import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '@devoinc/genesys-ui-form';

Textarea.displayName = 'Textarea';
const meta: Meta<React.ComponentProps<typeof Textarea>> = {
  title: 'Components/Textarea',
  component: Textarea,
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
    rows: {
      control: 'number',
      description: 'The number of visible text lines in the textarea.',
      table: {
        defaultValue: { summary: 4 },
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Textarea>>;

export const Example: Story = {
  args: {
    label: 'Input label',
    labelPosition: 'top',
    placeholder: 'This is the placeholder...',
    rows: 4,
    size: 'md',
    status: 'base',
  },
};
