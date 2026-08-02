import { HomePage } from "./Pages/HomePage/HomePage";
import { IntroPage } from "./Pages/IntroPage/IntroPage";
import { Route,Routes } from "react-router";


function App() {
  return(
    <Routes>
      <Route index element={<IntroPage />} />
      <Route path="/projects" element={<HomePage />} />
    </Routes>
  );
}

export default App
