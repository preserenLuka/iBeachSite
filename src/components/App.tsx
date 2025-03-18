import React, { useState } from "react";
import Sidebar from "./sidebar";
import Content from "./content";
import "../css/app.css";

const App: React.FC = () => {
  const [OpenContent, setOpenContent] = useState<string>(""); // Content to be opened

  return (
    <div className="app-container">
      <Sidebar OpenContent={OpenContent} setOpenContent={setOpenContent} />
      <Content OpenContent={OpenContent} />
    </div>
  );
};

export default App;
