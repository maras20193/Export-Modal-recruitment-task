import { forwardRef } from "react";
import * as S from "./Input.styled";

export type InputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }: InputProps, ref) => (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Label htmlFor={label}>{label}</S.Label>
        <S.Input ref={ref} id={label} {...rest} />
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
);
