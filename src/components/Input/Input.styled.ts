import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  width: 100%;
  position: relative;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 16px;
  width: 150px;
`;

export const Input = styled.input<{
  isShortWidth?: boolean;
  scheduleInput?: boolean;
}>`
  height: 40px;
  padding: 10px;
  border: 1px solid grey;
  outline: none;
  margin-left: ${({ scheduleInput }) => (scheduleInput ? "-25px" : "none")};

  ${({ isShortWidth, scheduleInput }) => {
    if (isShortWidth) {
      return "width: 20%;";
    }
    if (scheduleInput) {
      return "width: 40%;";
    }
    return "width: 100%;";
  }}
`;

export const Error = styled.p`
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  bottom: -2px;
  right: 0;
  color: red;
`;
