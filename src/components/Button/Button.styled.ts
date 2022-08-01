import styled from "styled-components";

export type ButtonProps = {
  disabled?: boolean;
  isLoading?: boolean;
  uppercase?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export const ButtonPrototype = styled.button<ButtonProps>`
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled
        ? theme.colors.button.disabled.border
        : theme.colors.button.primary};
  padding: 10px 20px;
  min-width: 100px;
  transition: 0.3s;
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};

  font-size: 16px;
  letter-spacing: 0.05rem;

  text-indent: ${({ isLoading }) => (isLoading ? "-9000px" : "0")};
  position: relative;
  cursor: ${({ disabled, isLoading }) =>
    disabled || isLoading ? "auto" : "pointer"};
  pointer-events: ${({ disabled, isLoading }) =>
    disabled || isLoading ? "none" : "auto"};

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }

  &::after {
    content: "";
    display: ${({ isLoading }) => (isLoading ? "inline-block" : "none")};
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: ${({ isLoading }) => (isLoading ? "3px solid" : "none")};
    border-radius: 50%;
    border-top-color: transparent;
    animation: button-loading-spinner 1s ease infinite;
  }
`;

const Primary = styled(ButtonPrototype)`
  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.button.disabled.primary
      : theme.colors.button.primary};
  color: ${({ theme }) => theme.colors.button.secondary};

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled
        ? theme.colors.button.disabled.primary
        : theme.colors.button.hover.primary};
  }
`;

const Secondary = styled(ButtonPrototype)`
  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.button.disabled.primary
      : theme.colors.button.secondary};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.button.secondary : theme.colors.button.primary};

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled
        ? theme.colors.button.disabled.primary
        : theme.colors.button.hover.secondary};
  }
`;

export const Button = {
  Primary,
  Secondary,
};
