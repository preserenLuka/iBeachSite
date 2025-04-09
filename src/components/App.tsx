import React, { useState } from "react";
import Menu from "./menu";
import Content from "./content";
import "../css/app.css";

const App: React.FC = () => {
  const [OpenContent, setOpenContent] = useState<string>(""); // Content to be opened
  const [isContentOpen, setisContentOpen] = useState<boolean>(true);

  return (
    <div className="app-container">
      <Menu
        OpenContent={OpenContent}
        isContentOpen={isContentOpen}
        setOpenContent={setOpenContent}
        setisContentOpen={setisContentOpen}
      />
      <Content OpenContent={OpenContent} isContentOpen={isContentOpen} />
    </div>
  );
};

export default App;
