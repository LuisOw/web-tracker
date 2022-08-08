import AppRoutes from "./AppRoutes";
import { purple } from "@mui/material/colors";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppRoutes />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
