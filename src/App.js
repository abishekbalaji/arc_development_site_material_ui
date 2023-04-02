import { ThemeProvider } from "@emotion/react";

import Header from "./components/ui/Header/Header";

import theme from "./components/ui/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h1>Hello</h1>
    </ThemeProvider>
  );
};
export default App;
