import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import SSnackBar from "./components/snackbar";

function App() {
  return (
    <BrowserRouter>
      <SSnackBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
