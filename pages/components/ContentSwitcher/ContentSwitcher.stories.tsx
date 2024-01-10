import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ContentSwitcher } from '@devoinc/genesys-ui';

ContentSwitcher.displayName = 'ContentSwitcher';

const meta: Meta<React.ComponentProps<typeof ContentSwitcher>> = {
  title: 'Components/ContentSwitcher',
  component: ContentSwitcher,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof ContentSwitcher>>;

export const Example: Story = {
  // PENDING
  args: {},
};
