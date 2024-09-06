import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@devoinc/genesys-ui';
import { GIAbacus } from '@devoinc/genesys-icons';

Icon.displayName = 'Icon';

const meta: Meta<React.ComponentProps<typeof Icon>> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Icon>>;

export const Example: Story = {
  args: {
    children: <GIAbacus />,
    size: 'md',
  },
  tags: ['isHidden'],
};
