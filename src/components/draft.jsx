import RoutesObjects from "./routes";
import { AuthProvider } from "./context/AuthContext";

function App(props) {
  return (
    <div className=" bg-[#151828]  text-white app font-sans ">
      <AuthProvider></AuthProvider>
    </div>
  );
}

export default App;
