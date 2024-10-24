import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  Box,
  SplitLayout,
  Typography,
  useSyncSplitResize,
} from '@devoinc/genesys-ui';

SplitLayout.displayName = 'SplitLayout';
const meta: Meta<React.ComponentProps<typeof SplitLayout>> = {
  title: 'Components/SplitLayout',
  component: SplitLayout,
  parameters: {
    layout: 'fullscreen',
    info: {
      propTables: false,
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof SplitLayout>>;

export const Base: Story = {
  tags: ['noWrap', 'isHidden'],
  render: (args) =>
    ((props) => {
      const [sizes, setSizes] = React.useState(props?.sizes);
      const { onChange } = useSyncSplitResize({ setSizes });
      return (
        <Box height="20rem">
          <SplitLayout {...props} sizes={sizes} onChange={onChange}>
            <Box overflow="hidden">
              <Box padding="cmp-md">
                <Typography.Paragraph>Left</Typography.Paragraph>
              </Box>
            </Box>
            <Box padding="cmp-md" overflow="hidden">
              <Typography.Paragraph>Right</Typography.Paragraph>
            </Box>
          </SplitLayout>
        </Box>
      );
    })(args),
};
