import "./App.css";
import Home from "./pages/Home";
import { TableContextProvider } from "./context/TableContext";
function App() {
  return (
    <>
      <TableContextProvider>
        <Home />
      </TableContextProvider>
    </>
  );
}

export default App;
