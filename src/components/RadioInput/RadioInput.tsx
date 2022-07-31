import { forwardRef } from "react";
import * as S from "./RadioInput.styled";

export type InputProps = {
  label: string;
  error?: string;
  options: string[];
} & React.InputHTMLAttributes<HTMLInputElement>;

export const RadioInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, options, error, ...rest }: InputProps, ref) => (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Label>{label}</S.Label>
        <S.RadiosWrapper>
          {options.map((option) => (
            <S.RadioBox>
              <S.Radio
                type="radio"
                value={option.toLocaleLowerCase()}
                ref={ref}
                id={option}
                {...rest}
              />
              <label htmlFor={option}>{option}</label>
            </S.RadioBox>
          ))}
        </S.RadiosWrapper>
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
);
