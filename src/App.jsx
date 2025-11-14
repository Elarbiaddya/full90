import SignInForm from "./components/SignInForm_useState";
import BigLayout from "./pages/BigLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/loginUseState" element={<SignInForm />} />
      {/* <Route path="/" element={<BigLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
      </Route> */}
    </Routes>
  );
}

export default App;
