import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup } from '@devoinc/genesys-ui';

ButtonGroup.displayName = 'ButtonGroup';
const meta: Meta<React.ComponentProps<typeof ButtonGroup>> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof ButtonGroup>>;

export const Example: Story = {
  // PENDING
  args: {},
};
