import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Banner } from '@devoinc/genesys-ui';

Banner.displayName = 'Banner';
const meta: Meta<React.ComponentProps<typeof Banner>> = {
  title: 'Components/Banner',
  component: Banner,
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Banner>>;

export const Example: Story = {
  args: {
    title: 'An example of Banner',
    content: 'This is the content of this Banner',
    status: 'info',
  },
};
