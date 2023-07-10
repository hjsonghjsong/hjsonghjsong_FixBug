import "./App.css";
import NavBar from "./components/Navbar";
import { ThemeProvider } from "@mui/material";
import { theme } from "./commonTheme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
