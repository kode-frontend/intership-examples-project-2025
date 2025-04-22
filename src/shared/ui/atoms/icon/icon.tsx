import { Image } from 'react-native';
import { IconWrapper } from '../icon-wrapper';

export type TIconProps = {
  src: string | React.ReactNode;
  size?: number;
  iconSize?: number;
};

export const Icon = ({ src, size = 40, iconSize }: TIconProps) => {
  if (typeof src === 'string') {
    const iconWH = iconSize || size;
    return (
      <IconWrapper size={size}>
        <Image
          style={{ width: iconWH, height: iconWH }}
          source={{ uri: src }}
        />
      </IconWrapper>
    );
  }
  return <IconWrapper size={size}>{src}</IconWrapper>;
};
