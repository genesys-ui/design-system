import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ChoiceGroup } from '@devoinc/genesys-ui';

ChoiceGroup.displayName = 'ChoiceGroup';

const meta: Meta<React.ComponentProps<typeof ChoiceGroup>> = {
  title: 'Components/ChoiceGroup',
  component: ChoiceGroup,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof ChoiceGroup>>;

export const Example: Story = {
  // PENDING
  args: {},
};
