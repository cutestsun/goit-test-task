import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Tweets from "../pages/Tweets/Tweets";
import { AppWrapper } from "./App.styled";

export default function App() {
  return (
    <AppWrapper>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </AppWrapper>
  );
}
