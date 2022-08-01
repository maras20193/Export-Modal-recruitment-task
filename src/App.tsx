import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Dashboard } from "./pages";
import { GlobalStyle, theme } from "./styles";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard />
      <ToastContainer newestOnTop position="top-right" />
    </ThemeProvider>
  );
}

export default App;
