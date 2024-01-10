import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Loader } from '@devoinc/genesys-ui';

Loader.displayName = 'Loader';

const meta: Meta<React.ComponentProps<typeof Loader>> = {
  title: 'Components/Loader',
  component: Loader,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Loader>>;

export const Example: Story = {
  // PENDING
  args: {},
};
