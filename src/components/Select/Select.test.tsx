import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { Select } from "./Select";

describe("Select", () => {
  test("renders Select component with default style", () => {
    render(
      <ThemeProvider theme={theme}>
        <Select label="select test label" />
      </ThemeProvider>
    );

    expect(screen.getByTestId("select")).toBeInTheDocument();
    expect(screen.getByText("Monday")).toBeInTheDocument();
    expect(screen.getByText("Friday")).toBeInTheDocument();
    expect(screen.getByText("select test label")).toBeInTheDocument();
  });

  test("renders Select component with error", () => {
    render(
      <ThemeProvider theme={theme}>
        <Select label="select test label" error="test error" />
      </ThemeProvider>
    );

    expect(screen.getByTestId("select")).toBeInTheDocument();
    expect(screen.getByText("test error")).toBeInTheDocument();
    expect(screen.getByText("test error")).toHaveStyle(`color: red;`);
  });
});
