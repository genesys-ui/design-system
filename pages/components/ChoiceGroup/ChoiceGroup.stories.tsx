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
      <ChoiceGroup.IconButton key={1} icon={<GICheckThick />} />,
      <ChoiceGroup.IconButton key={2} icon={<GIRedo />} />,
      <ChoiceGroup.IconButton key={3} icon={<GIUndoReset />} />,
      <ChoiceGroup.IconButton key={4} icon={<GIOfficeTrashBin />} />,
    ],
  },
  tags: ['isHidden'],
};
