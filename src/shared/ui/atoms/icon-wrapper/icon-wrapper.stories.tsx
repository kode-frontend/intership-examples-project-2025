import type { Meta, StoryObj } from '@storybook/react';

import { IconWrapper } from './icon-wrapper';

const meta: Meta<typeof IconWrapper> = {
  title: 'IconWrapper',
  component: IconWrapper,
  args: {
    size: 40,
    children: null
  },
};

export default meta;

type TIconWrapperStory = StoryObj<typeof IconWrapper>;

export const Default: TIconWrapperStory = {}
export const SmallImage: TIconWrapperStory = {
  render: args => <IconWrapper {...args} size={16} />
}
