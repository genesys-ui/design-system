import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Collapse } from '@devoinc/genesys-ui';

Collapse.displayName = 'Collapse';

const meta: Meta<React.ComponentProps<typeof Collapse>> = {
  title: 'Components/Collapse',
  component: Collapse,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Collapse>>;

export const Example: Story = {
  args: {
    heading: 'Collapse heading',
    truncateLine: 1,
  },
  tags: ['isHidden'],
};
