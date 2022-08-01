import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { Modal } from "./Modal";

describe("Modal component", () => {
  test("renders a default modal component", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal title="modal header" isOpen onClose={jest.fn()}>
          Content modal
        </Modal>
      </ThemeProvider>
    );

    const testModal = screen.getByTestId("modal");
    const testModalBack = screen.getByTestId("modal-back");
    expect(testModal).toBeInTheDocument();
    expect(testModal).toHaveStyle(
      `background-color: ${theme.colors.secondary};`
    );

    expect(testModalBack).toBeInTheDocument();
    expect(testModalBack).toHaveStyle(
      `position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;`
    );

    expect(screen.getByText("Content modal")).toBeInTheDocument();
    expect(screen.getByText("modal header")).toBeInTheDocument();
  });
});
