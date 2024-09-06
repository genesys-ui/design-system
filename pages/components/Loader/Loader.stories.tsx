import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Loader } from '@devoinc/genesys-ui';

Loader.displayName = 'Loader';

const meta: Meta<React.ComponentProps<typeof Loader>> = {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Loader>>;

export const Example: Story = {
  args: {
    colorScheme: 'inherited',
    size: 'md',
    zIndex: 10,
    children: <Loader.Spinner />,
  },
  tags: ['isHidden'],
};
