import { forwardRef } from "react";
import * as S from "./Input.styled";

export type InputProps = {
  label?: string;
  error?: string;
  isShortWidth?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, isShortWidth, ...rest }: InputProps, ref) => (
    <S.Wrapper>
      <S.InputWrapper>
        {label && <S.Label htmlFor={label}>{label}</S.Label>}
        <S.Input isShortWidth={isShortWidth} ref={ref} id={label} {...rest} />
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
);

export const ShortInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, isShortWidth, ...rest }: InputProps, ref) => (
    <S.Wrapper>
      <S.InputWrapper>
        {label && <S.Label htmlFor={label}>{label}</S.Label>}
        <S.ShortInput
          isShortWidth={isShortWidth}
          ref={ref}
          id={label}
          {...rest}
        />
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
);
