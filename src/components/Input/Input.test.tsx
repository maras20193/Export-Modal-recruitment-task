import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { Input } from "./Input";

describe("Input", () => {
  test("renders a default Input with default style", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>
    );

    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toHaveStyle(`width: 100%;`);
  });

  test("renders a default Input with label", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input label="test label" />
      </ThemeProvider>
    );

    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByText("test label")).toBeInTheDocument();
  });

  test("renders a default Input with error", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input error="test error" />
      </ThemeProvider>
    );

    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByText("test error")).toBeInTheDocument();
    expect(screen.getByText("test error")).toHaveStyle(
      `color: red;
      font-weight: 600;`
    );
  });

  test("renders a default Input with isShortWidth prop", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input isShortWidth />
      </ThemeProvider>
    );

    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toHaveStyle(`width: 20%;`);
  });

  test("renders a default Input with scheduleInput prop", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input scheduleInput />
      </ThemeProvider>
    );

    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toHaveStyle(`width: 40%;
    margin-left: -25px`);
  });
});
