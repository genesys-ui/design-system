import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { UploadFiles } from '@devoinc/genesys-ui-upload';

UploadFiles.displayName = 'UploadFiles';

const meta: Meta<React.ComponentProps<typeof UploadFiles>> = {
  title: 'Components/UploadFiles',
  component: UploadFiles,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof UploadFiles>>;

export const Example: Story = {
  // PENDING
  args: {},
};
