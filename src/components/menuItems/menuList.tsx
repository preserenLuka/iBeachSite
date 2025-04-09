import React, { useState } from "react";

interface MenuProps {
  isOpen: boolean;
}

const MenuList: React.FC<MenuProps> = ({ isOpen }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {isOpen && (
        <div className="search-container">
          <input
            type="text"
            placeholder="Search... (DISABLED)"
            className="search-input"
            value={searchQuery}
            onChange={handleInputChange}
            disabled
          />
        </div>
      )}
    </div>
  );
};

export default MenuList;
