import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormItemWrapper = styled.div`
  padding: 14px 20px;
  min-height: 340px;
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  gap: 15px;
  padding: 15px;
`;

export const ExtraLabel = styled.p`
  margin-left: -70px;
  margin-right: 60px;
`;
