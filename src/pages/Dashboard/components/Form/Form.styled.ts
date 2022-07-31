import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputsWrapper = styled.div`
  padding: 30px 20px 60px 20px;
  flex-grow: 1;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-top: 1px solid grey;
  gap: 15px;
  padding: 15px;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;
