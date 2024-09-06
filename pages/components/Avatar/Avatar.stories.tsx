import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@devoinc/genesys-ui';

Avatar.displayName = 'Avatar';
const meta: Meta<React.ComponentProps<typeof Avatar>> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Avatar>>;

export const Example: Story = {
  args: {
    imageSrc: 'https://i.pravatar.cc/300',
    size: 'md',
  },
  tags: ['isHidden'],
};
