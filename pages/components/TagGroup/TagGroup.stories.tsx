import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TagGroup } from '@devoinc/genesys-ui';

TagGroup.displayName = 'TagGroup';

const meta: Meta<React.ComponentProps<typeof TagGroup>> = {
  title: 'Components/TagGroup',
  component: TagGroup,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof TagGroup>>;

export const Example: Story = {
  // PENDING
  args: {},
};
