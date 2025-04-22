import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

const ACTIVE_OPACITY = 0.75;

export type TPressableProps = TouchableOpacityProps;

export const Pressable = (props: TPressableProps) => {
  return <TouchableOpacity activeOpacity={ACTIVE_OPACITY} {...props} />;
};
