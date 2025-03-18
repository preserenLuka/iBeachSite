import React, { useState } from "react";
import "../css/Sidebar.css";
import { LuSword } from "react-icons/lu";
import { FaShieldAlt } from "react-icons/fa";

interface SidebarProps {
  OpenContent: string;
  setOpenContent: (content: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ OpenContent, setOpenContent }) => {
  const handleContentChange = (content: string) => {
    setOpenContent(content); // Update the content being shown in the main area
  };

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menu: string) => {
    if (openSubMenu === menu) {
      setOpenSubMenu(null); // Close the menu if it's already open
    } else {
      setOpenSubMenu(menu); // Open the clicked menu
    }
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        {isOpen && <span className="sidebar-title">Game Fundamentals</span>}
        <button className="toggle-btn" onClick={toggleSidebar}>
          <div className="icon-placeholder">≡</div>
        </button>
      </div>

      {/* Search Input */}
      {isOpen && (
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      )}

      {/* Navigation Links */}
      <nav className="nav-links">
        <ul>
          {/* Menu Item with Sub-menu */}
          <li className="menu-item">
            <div
              className="menu-title"
              onClick={() => toggleSubMenu("fundamentals")}
            >
              Fundamentals{" "}
              <span className="arrow">
                {openSubMenu === "fundamentals" ? "▲" : "▼"}
              </span>
            </div>
            <div
              className={`sub-menu ${
                openSubMenu === "fundamentals" ? "open" : ""
              }`}
            >
              <div
                className="fundamentals-item"
                onClick={() => handleContentChange("defense")}
              >
                <FaShieldAlt size={30} />
                <span>Defence</span>
              </div>
              <div
                className="fundamentals-item"
                onClick={() => handleContentChange("attack")}
              >
                <LuSword size={30} />
                <span>Attack</span>
              </div>
              <div
                className="fundamentals-item"
                onClick={() => handleContentChange("counterAttack")}
              >
                <span>Counter Attack</span>
              </div>
            </div>
          </li>
          <li className="menu-item">
            <div
              className="menu-title"
              onClick={() => toggleSubMenu("mechanics")}
            >
              Mechanics{" "}
              <span className="arrow">
                {openSubMenu === "mechanics" ? "▲" : "▼"}
              </span>
            </div>
            <div
              className={`sub-menu ${
                openSubMenu === "mechanics" ? "open" : ""
              }`}
            >
              <div
                className="fundamentals-item"
                onClick={() => handleContentChange("shoots")}
              >
                <FaShieldAlt size={30} />
                <span>shoots</span>
              </div>
              <div
                className="fundamentals-item"
                onClick={() => handleContentChange("arial")}
              >
                <LuSword size={30} />
                <span>arial</span>
              </div>
              <div
                className="fundamentals-item"
                onClick={() => handleContentChange("flick")}
              >
                <span>flick</span>
              </div>
            </div>
          </li>
          <li className="menu-item">
            <div
              className="menu-title"
              onClick={() => toggleSubMenu("coaching")}
            >
              Coaching{" "}
              <span className="arrow">
                {openSubMenu === "coaching" ? "▲" : "▼"}
              </span>
            </div>
            <div
              className={`sub-menu ${openSubMenu === "coaching" ? "open" : ""}`}
            >
              <div
                className="fundamentals-item"
                onClick={() => handleContentChange("discord")}
              >
                <FaShieldAlt size={30} />
                <span>discord</span>
              </div>
              <div
                className="fundamentals-item"
                onClick={() => handleContentChange("reviews")}
              >
                <LuSword size={30} />
                <span>reviews</span>
              </div>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-title" onClick={() => toggleSubMenu("notes")}>
              Notes{" "}
              <span className="arrow">
                {openSubMenu === "notes" ? "▲" : "▼"}
              </span>
            </div>
            <div
              className={`sub-menu ${openSubMenu === "notes" ? "open" : ""}`}
            >
              <div
                className="fundamentals-item"
                onClick={() => handleContentChange("myNotes")}
              >
                <FaShieldAlt size={30} />
                <span>my notes</span>
              </div>
              <div
                className="fundamentals-item"
                onClick={() => handleContentChange("test")}
              >
                <LuSword size={30} />
                <span>test</span>
              </div>
            </div>
          </li>
          <li className="menu-item">
            <div
              className="menu-title"
              onClick={() => toggleSubMenu("fileManager")}
            >
              File Manager{" "}
              <span className="arrow">
                {openSubMenu === "fileManager" ? "▲" : "▼"}
              </span>
            </div>
            <div
              className={`sub-menu ${
                openSubMenu === "fileManager" ? "open" : ""
              }`}
            >
              <div
                className="fundamentals-item"
                onClick={() => handleContentChange("test")}
              >
                <FaShieldAlt size={30} />
                <span>test</span>
              </div>
              <div
                className="fundamentals-item"
                onClick={() => handleContentChange("test")}
              >
                <LuSword size={30} />
                <span>test</span>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      {/* Profile Section */}
      {isOpen && (
        <div className="profile-section">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-info">
            <p className="profile-name">Prem Shahi</p>
            <p className="profile-title">Web Designer</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
