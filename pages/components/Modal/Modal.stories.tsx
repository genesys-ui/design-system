import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Modal, Typography } from '@devoinc/genesys-ui';

Modal.displayName = 'Modal';

const meta: Meta<React.ComponentProps<typeof Modal>> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Modal>>;

export const Example: Story = {
  args: {
    children: (
      <>
        <Modal.Header title="Modal title" />
        <Modal.Body>
          <Typography.Paragraph>
            A still more glorious dawn awaits finite but unbounded Hypatia
            Cambrian explosion white dwarf the carbon in our apple pies.
            Vanquish the impossible the sky calls to us Flatland two ghostly
            white figures in coveralls and helmets are softly dancing are
            creatures of the cosmos tendrils of gossamer clouds?
          </Typography.Paragraph>
        </Modal.Body>
        <Modal.Footer>
          <Typography.Paragraph>Modal footer</Typography.Paragraph>
        </Modal.Footer>
      </>
    ),
    status: 'base',
    windowSize: 'md',
  },
  tags: ['isHidden'],
};
