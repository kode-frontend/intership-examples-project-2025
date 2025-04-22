import styled from "styled-components/native";


export type TSeparatorProps = {
  spacing?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
};

export const Separator = ({ spacing }: TSeparatorProps) => {
  return (
    <Wrapper spacing={spacing}>
      <SeparatorItem />
    </Wrapper>
  );
};

const Wrapper = styled.View<TSeparatorProps>`
  margin-bottom: ${({ theme, spacing }) =>
    theme.spacing(spacing?.bottom || 0)}px;
  margin-left: ${({ theme, spacing }) => theme.spacing(spacing?.left || 0)}px;
  margin-right: ${({ theme, spacing }) => theme.spacing(spacing?.right || 0)}px;
  margin-top: ${({ theme, spacing }) => theme.spacing(spacing?.top || 0)}px;
`;

const SeparatorItem = styled.View<TSeparatorProps>`
  align-self: flex-start;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
`;
