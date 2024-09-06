import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Radio, RadioGroup } from '@devoinc/genesys-ui';

RadioGroup.displayName = 'RadioGroup';

const meta: Meta<React.ComponentProps<typeof RadioGroup>> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof RadioGroup>>;

export const Example: Story = {
  args: {
    children: [
      <Radio
        key="key-1"
        id="radio-one-id"
        name="Name for radio"
        label="Radio one"
        defaultChecked
      />,
      <Radio
        key="key-2"
        id="radio-two-id"
        name="Name for radio"
        label="Radio two"
      />,
      <Radio
        key="key-3"
        id="radio-three-id"
        name="Name for radio"
        label="Radio three"
      />,
    ],
    direction: 'column',
    hasLegendLabelFormat: true,
    legend: 'Radio group legend',
    legendPosition: 'top',
    status: 'base',
  },
  tags: ['isHidden'],
};
