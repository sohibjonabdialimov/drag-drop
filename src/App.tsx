import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
