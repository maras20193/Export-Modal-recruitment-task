import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { RadioInput } from "./RadioInput";

describe("RadioInput", () => {
  test("renders Radio Input component with default style and options", () => {
    render(
      <ThemeProvider theme={theme}>
        <RadioInput label="test label" options={["option 1", "option 2"]} />
      </ThemeProvider>
    );

    expect(screen.getByTestId("radioInput-option 1")).toBeInTheDocument();
    expect(screen.getByTestId("radioInput-option 2")).toBeInTheDocument();
  });

  test("renders Radio Input component error", () => {
    render(
      <ThemeProvider theme={theme}>
        <RadioInput
          label="test label"
          options={["option 1", "option 2"]}
          error="error test"
        />
      </ThemeProvider>
    );

    expect(screen.getByTestId("radioInput-option 1")).toBeInTheDocument();
    expect(screen.getByTestId("radioInput-option 2")).toBeInTheDocument();
    expect(screen.getByText("error test")).toBeInTheDocument();
    expect(screen.getByText("error test")).toHaveStyle(
      `color: red;
      font-weight: 600;`
    );
  });
});
