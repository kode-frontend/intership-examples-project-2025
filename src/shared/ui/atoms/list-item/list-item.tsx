import { useCallback } from 'react';
import styled from 'styled-components/native';
import { Pressable } from '../pressable';
import { Typography } from '../typography';
import {Icon, TIconProps} from "@shared/ui/atoms/icon";

export type TListItem = TIconProps & {
  label: string;
  id: string;
};

type TListItemProps = TListItem & {
  onPress: (item: TListItem) => void;
};
const Wrapper = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1.75)}px 0;
`;

const Label = styled(Typography)`
  flex: 1;
`;

export const ListItem = ({
  id,
  label,
  onPress,
  src,
  size,
  iconSize,
}: TListItemProps) => {
  const handlePress = useCallback(() => onPress({ id, label, src }), []);

  return (
    <Wrapper onPress={handlePress}>
      <Icon src={src} size={size} iconSize={iconSize} />
      <Label variant="body15Regular">{label}</Label>
    </Wrapper>
  );
};
