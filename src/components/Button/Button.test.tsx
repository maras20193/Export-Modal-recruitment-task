import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { Button } from "./Button.styled";

describe("Button", () => {
  const onClickFunction = jest.fn();
  test("renders a default Button.Primary with default style", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button.Primary>Test Button.Primary</Button.Primary>
      </ThemeProvider>
    );

    expect(screen.getByText("Test Button.Primary")).toBeInTheDocument();
    expect(screen.getByText("Test Button.Primary")).toHaveStyle(
      `padding: 10px 20px;
      min-width: 100px;
      background-color: ${theme.colors.button.primary};
      color: ${theme.colors.button.secondary}`
    );
  });

  test("renders a default Button.Secondary with default style", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button.Secondary>Test Button.Secondary</Button.Secondary>
      </ThemeProvider>
    );

    expect(screen.getByText("Test Button.Secondary")).toBeInTheDocument();
    expect(screen.getByText("Test Button.Secondary")).toHaveStyle(
      `padding: 10px 20px;
      min-width: 100px;
      background-color: ${theme.colors.button.secondary};
      color: ${theme.colors.button.primary}`
    );
  });

  test("renders a default Button.Primary with isLoading prop", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button.Primary isLoading>Test Button.Primary</Button.Primary>
      </ThemeProvider>
    );

    expect(screen.getByText("Test Button.Primary")).toHaveStyle(
      `text-indent: -9000px;`
    );
  });

  test("renders a default Button.Primary with disabled prop", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button.Primary disabled>Test Button.Primary</Button.Primary>
      </ThemeProvider>
    );

    expect(screen.getByText("Test Button.Primary")).toHaveStyle(
      `cursor: auto;
      pointer-events: none;
      border: 1px solid ${theme.colors.button.disabled.border};`
    );
  });

  test("should do events", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button.Primary onClick={onClickFunction}>
          Test Button.Primary
        </Button.Primary>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Test Button.Primary"));
    expect(onClickFunction).toHaveBeenCalledTimes(1);
  });

  test("shouldn't do events when disabled", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button.Primary disabled onClick={onClickFunction}>
          Test Button.Primary
        </Button.Primary>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Test Button.Primary"));
    expect(onClickFunction).toHaveBeenCalledTimes(0);
  });

  test("shouldn't do events when isLoading", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button.Primary isLoading onClick={onClickFunction}>
          Test Button.Primary
        </Button.Primary>
      </ThemeProvider>
    );

    expect(screen.getByText("Test Button.Primary")).toHaveStyle(
      `pointer-events: none;`
    );
  });
});
