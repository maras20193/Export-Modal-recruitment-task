import { forwardRef } from "react";
import * as S from "./Input.styled";

export type InputProps = {
  label?: string;
  error?: string;
  isShortWidth?: boolean;
  scheduleInput?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, isShortWidth, scheduleInput, ...rest }: InputProps, ref) => (
    <S.Wrapper>
      <S.InputWrapper>
        {label && <S.Label htmlFor={label}>{label}</S.Label>}
        <S.Input
          isShortWidth={isShortWidth}
          scheduleInput={scheduleInput}
          ref={ref}
          id={label}
          data-testid="input"
          {...rest}
        />
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
);
