import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Overlay } from '@devoinc/genesys-ui';

Overlay.displayName = 'Overlay';

const meta: Meta<React.ComponentProps<typeof Overlay>> = {
  title: 'Components/Overlay',
  component: Overlay,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Overlay>>;

export const Example: Story = {
  // PENDING
  args: {},
};
