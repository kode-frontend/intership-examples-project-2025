import styled from 'styled-components/native';

export type OtpFieldProps = {
  onChange: (value: string) => void;
  value: string;
  disabled?: boolean;
};
export const OtpField = ({ value, disabled, onChange }: OtpFieldProps) => {
  return (
    <Wrapper>
      <InputArea>
        <Input
          onChangeText={onChange}
          value={value}
          autoCorrect={false}
          keyboardType="number-pad"
          autoFocus
          editable={!disabled}
        />
      </InputArea>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  padding: ${({ theme }) => theme.spacing(1)}px
    ${({ theme }) => theme.spacing(2)}px;
`;

const InputArea = styled.View`
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  flex-direction: row;
  height: ${({ theme }) => theme.spacing(4.5)}px;
`;

const Input = styled.TextInput`
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};
  flex: 1;
  font-family: ${({ theme }) => theme.typography.body15Regular.fontFamily};
  font-size: ${({ theme }) => theme.typography.body15Regular.size};
  justify-content: center;
  letter-spacing: ${({ theme }) =>
    theme.typography.body15Regular.letterSpacing};
`;
