import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Modal } from '@devoinc/genesys-ui';

Modal.displayName = 'Modal';

const meta: Meta<React.ComponentProps<typeof Modal>> = {
  title: 'Components/Modal',
  component: Modal,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Modal>>;

export const Example: Story = {
  // PENDING
  args: {},
};
