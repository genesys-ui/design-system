import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@devoinc/genesys-ui';

Icon.displayName = 'Icon';

const meta: Meta<React.ComponentProps<typeof Icon>> = {
  title: 'Components/Icon',
  component: Icon,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Icon>>;

export const Example: Story = {
  // PENDING
  args: {},
};
