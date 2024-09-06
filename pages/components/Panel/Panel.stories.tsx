import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Panel, Typography } from '@devoinc/genesys-ui';
import { lorem, lorem2 } from '../../../utils';

Panel.displayName = 'Panel';

const meta: Meta<React.ComponentProps<typeof Panel>> = {
  title: 'Components/Panel',
  component: Panel,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Panel>>;

export const Example: Story = {
  args: {
    bordered: true,
    size: 'md',
    elevation: 'raised',
    children: [
      <Panel.Header
        bordered
        title="Header tittle"
        closeSettings={{ onClick: () => true }}
      />,
      <Panel.Body>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
      </Panel.Body>,
    ],
  },
  tags: ['isHidden'],
};
