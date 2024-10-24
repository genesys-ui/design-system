import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { KeyValue } from '@devoinc/genesys-ui';

KeyValue.displayName = 'KeyValue';
const meta: Meta<React.ComponentProps<typeof KeyValue>> = {
  title: 'Components/KeyValue',
  component: KeyValue,
  argTypes: {
    format: {
      control: 'radio',
      options: ['base', 'row', 'column'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    invertOrder: {
      control: 'boolean',
    },
    unit: {
      control: 'text',
    },
    valueWidth: {
      control: 'text',
    },
    keyWidth: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof KeyValue>>;

export const Example: Story = {
  args: {
    format: 'base',
    size: 'md',
    keyContent: 'Rick Sanchez',
    valueContent: 'rick.sanchez@ilovemorty.com',
  },
  tags: ['isHidden'],
};
