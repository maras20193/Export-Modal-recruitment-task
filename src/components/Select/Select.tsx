import { forwardRef } from "react";
import * as S from "./Select.styled";

export type SelectProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, ...rest }: SelectProps, ref) => (
    <S.Wrapper>
      <S.SelectWrapper>
        <S.Label htmlFor={label}>{label}</S.Label>
        <S.Select
          defaultValue=""
          ref={ref}
          id={label}
          data-testid="select"
          {...rest}
        >
          <option value="" disabled hidden>
            Choose
          </option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </S.Select>
      </S.SelectWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
);
