import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from '@devoinc/genesys-ui';

RadioGroup.displayName = 'RadioGroup';

const meta: Meta<React.ComponentProps<typeof RadioGroup>> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof RadioGroup>>;

export const Example: Story = {
  // PENDING
  args: {},
};
