import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TagGroup } from '@devoinc/genesys-ui';

TagGroup.displayName = 'TagGroup';

const meta: Meta<React.ComponentProps<typeof TagGroup>> = {
  title: 'Components/TagGroup',
  component: TagGroup,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof TagGroup>>;

export const Example: Story = {
  args: {
    children: [
      <TagGroup.Tag key={1} text="Category one" />,
      <TagGroup.Tag key={2} colorScheme="secondary" text="Category two" />,
      <TagGroup.Tag key={3} colorScheme="data-dusk" text="Category three" />,
      <TagGroup.Tag key={4} colorScheme="warning" text="Category four" />,
    ],
    label: 'TagGroup label',
    labelPosition: 'left',
    quiet: false,
    size: 'md',
  },
  tags: ['isHidden'],
};
