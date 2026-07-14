import { BrowserRouter, Routes, Route } from "react-router-dom";
import AudioProvider from "../providers/AudioProvider";
import HomePage from "../pages/HomePage";

function AppRouter() {
  return (
    <BrowserRouter>
      <AudioProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AudioProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
