import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, HFlex, IconButton } from '@devoinc/genesys-ui';

const Template: React.FC = () => null;

const meta: Meta<React.ComponentProps<typeof Template>> = {
  title: 'Patterns/Loading states',
  component: Template,
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Template>>;

export const IconButtonLoading: Story = {
  render: () => (
    <HFlex spacing="cmp-md">
      <HFlex.Item>
        <IconButton
          title="Add to favorites"
          icon="like_heart_favorite_rating_love"
        />
      </HFlex.Item>
      <HFlex.Item>
        <IconButton
          title="Adding..."
          state="loading"
          icon="like_heart_favorite_rating_love"
        />
      </HFlex.Item>
    </HFlex>
  ),
};

export const ButtonTextLoading: Story = {
  render: () => (
    <HFlex spacing="cmp-md">
      <HFlex.Item>
        <Button>Add to favorites</Button>
      </HFlex.Item>
      <HFlex.Item>
        <Button state="loading">Adding to favorites...</Button>
      </HFlex.Item>
    </HFlex>
  ),
};

export const ButtonIconTextLoading: Story = {
  render: () => (
    <HFlex spacing="cmp-md">
      <HFlex.Item>
        <Button icon="like_heart_favorite_rating_love">
          Add to favorites...
        </Button>
      </HFlex.Item>
      <HFlex.Item>
        <Button state="loading" icon="like_heart_favorite_rating_love">
          Adding to favorites...
        </Button>
      </HFlex.Item>
    </HFlex>
  ),
};
