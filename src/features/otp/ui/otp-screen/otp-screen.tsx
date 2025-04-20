import { ScrollView } from 'react-native-gesture-handler';
import { OtpField, OtpFieldProps } from '../otp-field/otp-field';

import styled from 'styled-components/native';

type Props = {
  attemptsLeft: number;
  canResend: boolean;
  onResend: () => void;
  resendIn: number;
  isLoading: boolean;
} & OtpFieldProps;
export const OtpScreen = ({
  onChange,
  value,
  attemptsLeft,
  canResend,
  isLoading,
  onResend,
  resendIn,
}: Props) => {
  const isAttemptsMessage = attemptsLeft === 0;

  return (
    <ScrollView style={{ flex: 1 }}>
      <OtpField
        disabled={isLoading}
        onChange={onChange}
        value={value}
      />

      {isLoading ? <Loader>Отправляем</Loader> : null}

      {isAttemptsMessage && (
        <ErrorText>Неверный код. Осталось {attemptsLeft} попытки</ErrorText>
      )}
      <ResendButton
        disabled={!canResend}
        onPress={onResend}
        title={
          canResend ? 'Выслать код повторно' : `Повторить через ${resendIn}`
        }
      />
    </ScrollView>
  );
};

const ErrorText = styled.Text`
  color: ${({ theme }) => theme.palette.indicator.error};
  text-align: center;
`;

const ResendButton = styled.Button``;

const Loader = styled.Text`
  color: ${({ theme }) => theme.palette.indicator.done};
  text-align: center;
`;
