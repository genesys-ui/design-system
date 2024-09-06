import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ChipGroup } from '@devoinc/genesys-ui';

ChipGroup.displayName = 'ChipGroup';
const meta: Meta<React.ComponentProps<typeof ChipGroup>> = {
  title: 'Components/ChipGroup',
  component: ChipGroup,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof ChipGroup>>;

export const Example: Story = {
  args: {
    size: 'md',
    children: [
      <ChipGroup.Chip>Chip one</ChipGroup.Chip>,
      <ChipGroup.Chip>Chip two</ChipGroup.Chip>,
    ],
  },
  tags: ['isHidden'],
};
