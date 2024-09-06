import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ContentSwitcher } from '@devoinc/genesys-ui';

ContentSwitcher.displayName = 'ContentSwitcher';

const meta: Meta<React.ComponentProps<typeof ContentSwitcher>> = {
  title: 'Components/ContentSwitcher',
  component: ContentSwitcher,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof ContentSwitcher>>;

export const Example: Story = {
  // PENDING
  args: {
    children: [
      <ContentSwitcher.Item state="selected">Content one</ContentSwitcher.Item>,
      <ContentSwitcher.Item>Content two</ContentSwitcher.Item>,
    ],
    size: 'md',
  },
  tags: ['isHidden'],
};
