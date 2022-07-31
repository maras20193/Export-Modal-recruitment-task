import styled from "styled-components";

export type ButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  uppercase?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export const ButtonPrototype = styled.button<ButtonProps>`
  border: 1px solid ${({ theme }) => theme.colors.button.primary};
  padding: 10px 20px;
  min-width: 100px;
  transition: 0.3s;
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};

  font-size: 16px;
  letter-spacing: 0.05rem;
`;

const Primary = styled(ButtonPrototype)`
  background-color: ${({ theme }) => theme.colors.button.primary};
  color: ${({ theme }) => theme.colors.button.secondary};

  &:hover {
    background-color: grey;
  }
`;

const Secondary = styled(ButtonPrototype)`
  background-color: ${({ theme }) => theme.colors.button.secondary};
  color: ${({ theme }) => theme.colors.button.primary};

  &:hover {
    background-color: grey;
  }
`;

export const Button = {
  Primary,
  Secondary,
};
