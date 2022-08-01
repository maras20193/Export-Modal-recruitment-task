import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { Button } from "./Button.styled";

describe("Button", () => {
  test("renders a default Button.Primary with default style and hover style", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button.Primary>Test Button.Primary</Button.Primary>
      </ThemeProvider>
    );

    const testButton = screen.getByText("Test Button.Primary");

    expect(testButton).toBeInTheDocument();
    expect(testButton).toHaveStyle(
      `padding: 10px 20px;
      min-width: 100px;
      background-color: ${theme.colors.button.primary};
      color: ${theme.colors.button.secondary}`
    );

    userEvent.hover(testButton);

    expect(testButton).toHaveStyle(
      `background-color: red;
      color: red`
    );
  });
});
