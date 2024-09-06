import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ChoiceGroup } from '@devoinc/genesys-ui';
import {
  GICheckThick,
  GIOfficeTrashBin,
  GIRedo,
  GIUndoReset,
} from '@devoinc/genesys-icons';

ChoiceGroup.displayName = 'ChoiceGroup';

const meta: Meta<React.ComponentProps<typeof ChoiceGroup>> = {
  title: 'Components/ChoiceGroup',
  component: ChoiceGroup,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof ChoiceGroup>>;

export const Example: Story = {
  args: {
    colorScheme: 'quiet',
    size: 'md',
    children: [
      <ChoiceGroup.IconButton icon={<GICheckThick />} />,
      <ChoiceGroup.IconButton icon={<GIRedo />} />,
      <ChoiceGroup.IconButton icon={<GIUndoReset />} />,
      <ChoiceGroup.IconButton icon={<GIOfficeTrashBin />} />,
    ],
  },
  tags: ['isHidden'],
};
