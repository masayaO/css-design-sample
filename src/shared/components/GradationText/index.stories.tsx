import { Meta, StoryObj } from '@storybook/react';
import GradationText from './index';

const meta: Meta<typeof GradationText> = {
  title: 'shared/components/GradationText',
  component: GradationText,
};

export default meta;

type Story = StoryObj<typeof GradationText>;

export const DefaultButton: Story = {
  args: { text: 'Gradation Text' },
};
