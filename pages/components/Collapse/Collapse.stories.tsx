import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Collapse } from '@devoinc/genesys-ui';

Collapse.displayName = 'Collapse';

const meta: Meta<React.ComponentProps<typeof Collapse>> = {
  title: 'Components/Collapse',
  component: Collapse,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Collapse>>;

export const Example: Story = {
  // PENDING
  args: {},
};
