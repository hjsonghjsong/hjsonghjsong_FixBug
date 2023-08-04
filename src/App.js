import "./App.css";
import NavBar from "./components/Navbar";
import { ThemeProvider } from "@mui/material";
import { theme } from "./commonTheme";
import Footer from "./components/Footer/Footer";
import { useAuth } from "./Contexts/Auth";

function App() {
  const { session } = useAuth();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar session={session} />
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  );
}
export default App;
