import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Thumbnail } from '@devoinc/genesys-ui';

Thumbnail.displayName = 'Thumbnail';

const meta: Meta<React.ComponentProps<typeof Thumbnail>> = {
  title: 'Components/Thumbnail',
  component: Thumbnail,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Thumbnail>>;

export const Example: Story = {
  // PENDING
  args: {},
};
