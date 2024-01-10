import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Panel } from '@devoinc/genesys-ui';

Panel.displayName = 'Panel';

const meta: Meta<React.ComponentProps<typeof Panel>> = {
  title: 'Components/Panel',
  component: Panel,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Panel>>;

export const Example: Story = {
  // PENDING
  args: {},
};
