import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
//pages
import ChatMentor from "./Pages/ChatMentor";
import MyAssignment from "./Pages/MyAssignment";
import ReferEarn from "./Pages/ReferEarn.jsx";
import FriendsReferred from "./Pages/FriendsReferred.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" exact element={<ChatMentor />}></Route>
        <Route path="/MyAssignment" exact element={<MyAssignment />}></Route>
        <Route path="/ChatMentor" exact element={<ChatMentor />}></Route>
        <Route path="/ReferEarn" exact element={<ReferEarn />}></Route>
        <Route path="/ReferEarn/FriendsReferred" element={<FriendsReferred />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
