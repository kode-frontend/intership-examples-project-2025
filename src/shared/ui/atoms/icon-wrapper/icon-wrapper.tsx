import styled from 'styled-components/native';

const StyledIconWrapper = styled.View<{
  size: number;
  backgroundColor?: string;
}>`
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.palette.content.secondary};
  border-radius: ${({ size }) => size}px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`;

export type TIconProps = {
  size?: number;
  children: React.ReactNode;
};

export const IconWrapper = ({ size = 40, children }: TIconProps) => {
  return <StyledIconWrapper size={size}>{children}</StyledIconWrapper>;
};
