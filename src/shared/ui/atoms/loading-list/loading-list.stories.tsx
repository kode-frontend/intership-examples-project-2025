import type { Meta, StoryObj } from '@storybook/react';
import { LoadingList } from './loading-list';

const meta: Meta<typeof LoadingList> = {
  title: 'ui/molecules/LoadingList',
  component: LoadingList,
  args: {},
};

export default meta;

type TLoadingListStory = StoryObj<typeof LoadingList>;

export const Default: TLoadingListStory = {}
