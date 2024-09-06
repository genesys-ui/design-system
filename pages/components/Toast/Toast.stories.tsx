import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, toast, ToastContainer } from '@devoinc/genesys-ui';
import { lorem } from '../../../utils';

ToastContainer.displayName = 'Toast';

const meta: Meta<React.ComponentProps<typeof ToastContainer>> = {
  title: 'Components/Toast',
  component: ToastContainer,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof ToastContainer>>;

export const Example: Story = {
  args: {
    id: 'default-toast',
    content: lorem,
    subtitle: 'Toasts notifications are useful',
    title: 'Notification title',
    status: 'info',
  },
  render: (args) =>
    ((args) => (
      <>
        <Button
          aria-controls="base-toast"
          colorScheme={'info'}
          onClick={() => {
            toast({
              id: 'base-toast',
              ...args,
            });
          }}
        >
          Open notification
        </Button>
        <ToastContainer />
      </>
    ))(args),
  tags: ['isHidden'],
};
