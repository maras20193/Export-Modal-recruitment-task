import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  position: relative;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
`;
export const RadiosWrapper = styled.div`
  display: flex;
  width: 75%;
  gap: 20px;
`;

export const RadioBox = styled.div`
  display: flex;
  gap: 6px;
`;

export const Radio = styled.input``;

export const Error = styled.p`
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  bottom: -2px;
  right: 0;
  color: red;
`;
