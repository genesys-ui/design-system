import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Thumbnail } from '@devoinc/genesys-ui';

Thumbnail.displayName = 'Thumbnail';

const meta: Meta<React.ComponentProps<typeof Thumbnail>> = {
  title: 'Components/Thumbnail',
  component: Thumbnail,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Thumbnail>>;

export const Example: Story = {
  args: {
    src: 'https://i.pravatar.cc/800',
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    height: '24rem',
  },
  tags: ['isHidden'],
};
