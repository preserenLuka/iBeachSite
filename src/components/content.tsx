import React from "react";

interface ContentProps {
  OpenContent: string;
}

const Content: React.FC<ContentProps> = ({ OpenContent }) => {
  return (
    <div className="content">
      {OpenContent === "" && <div>Nothing to show</div>}
      {OpenContent === "defense" && <div>Defence Content</div>}
      {OpenContent === "attack" && <div>Attack Content</div>}
      {/* Add more content conditions as necessary */}
    </div>
  );
};

export default Content;
