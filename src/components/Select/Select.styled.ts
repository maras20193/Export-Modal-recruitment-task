import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  position: relative;
  width: 100%;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 16px;
  width: 150px;
`;

export const Select = styled.select`
  margin-left: -25px;
  width: 40%;
  height: 40px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  outline: none;
`;

export const Error = styled.p`
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  bottom: -2px;
  right: 0;
  color: red;
`;
