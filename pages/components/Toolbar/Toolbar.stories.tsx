import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toolbar, Typography } from '@devoinc/genesys-ui';

Toolbar.displayName = 'Toolbar';

const meta: Meta<React.ComponentProps<typeof Toolbar>> = {
  title: 'Components/Toolbar',
  component: Toolbar,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Toolbar>>;

export const Example: Story = {
  args: {
    alignItems: 'center',
    gap: 'layout-xs',
    size: 'md',
    elevation: 'stickyBottom',
    justifyContent: 'space-between',
    padding: '0 cmp-sm',
    children: [
      <Toolbar.Group>
        <Toolbar.Item>
          <Typography.Paragraph>Item One - G1</Typography.Paragraph>
        </Toolbar.Item>
        <Toolbar.Divider />
        <Toolbar.Item>
          <Typography.Paragraph>Item Two - G1</Typography.Paragraph>
        </Toolbar.Item>
      </Toolbar.Group>,
      <Toolbar.Group>
        <Toolbar.Item>
          <Typography.Paragraph>Item One - G2</Typography.Paragraph>
        </Toolbar.Item>
      </Toolbar.Group>,
      <Toolbar.Group marginLeft="auto" justifyContent="flex-end">
        <Toolbar.Item>
          <Typography.Paragraph>Item One - G3</Typography.Paragraph>
        </Toolbar.Item>
      </Toolbar.Group>,
    ],
  },
  tags: ['isHidden'],
};
