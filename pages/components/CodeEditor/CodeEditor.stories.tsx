import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Editor } from '@devoinc/genesys-ui-code';

Editor.displayName = 'Editor';

const meta: Meta<React.ComponentProps<typeof Editor>> = {
  title: 'Components/CodeEditor',
  component: Editor,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Editor>>;

export const Example: Story = {
  args: {
    bordered: true,
    value: 'Hey there!, I am a code editor',
    height: '20rem',
  },
  tags: ['isHidden'],
};
