import styled from 'styled-components/native';
import { Typography } from '../typography';

type TErrorScreenProps = {
  message: string;
};

export const ErrorScreen = ({ message }: TErrorScreenProps) => {
  return (
    <Wrapper>
      <Text variant="body15Regular">{message}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;
