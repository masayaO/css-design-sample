import { Meta, StoryObj } from '@storybook/react';
import ResponsiveImage from './index';

const meta: Meta<typeof ResponsiveImage> = {
  title: 'shared/components/ResponsiveImage',
  component: ResponsiveImage,
};

export default meta;

type Story = StoryObj<typeof ResponsiveImage>;

export const DefaultButton: Story = {};
