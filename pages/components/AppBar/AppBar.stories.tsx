import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppBar, Button, ButtonGroup } from '@devoinc/genesys-ui';
import { GIReloadRefreshUpdate } from '@devoinc/genesys-icons';

AppBar.displayName = 'AppBar';
const meta: Meta<React.ComponentProps<typeof AppBar>> = {
  title: 'Components/AppBar',
  component: AppBar,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof AppBar>>;

export const Example: Story = {
  args: {
    alignItems: 'center',
    heading: 'AppBar heading',
    justifyContent: 'space-between',
    sticky: true,
    children: (
      <AppBar.Item>
        <ButtonGroup>
          <Button icon={<GIReloadRefreshUpdate />}>Reload</Button>
        </ButtonGroup>
      </AppBar.Item>
    ),
  },
  tags: ['isHidden'],
};
