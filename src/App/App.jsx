import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Tweets from "../pages/Tweets";
import { AppWrapper } from "./App.styled";

export default function App() {
  return (
    <AppWrapper>
      <Routes>
        
        <Route path="/" element={<Home />}>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>

        <Route path="/tweets" element={<Tweets />}></Route>
      </Routes>
    </AppWrapper>
  );
}
