import React, { useState, useEffect } from "react";
import "../css/Sidebar.css";
import { LuSword } from "react-icons/lu";
import { FaShieldAlt } from "react-icons/fa";

interface SidebarProps {
  OpenContent: string;
  isContentOpen: boolean;
  setOpenContent: (content: string) => void;
  setisContentOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  setOpenContent,
  OpenContent,
  setisContentOpen,
  isContentOpen,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    if (openSubMenu === menu) {
      setOpenSubMenu(null); // Close the menu if it's already open
    } else {
      setOpenSubMenu(menu); // Open the clicked menu
    }
  };

  const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  };

  const isMobile = useWindowWidth() <= 768; // or whatever breakpoint you use

  const handleContentChange = (content: string) => {
    setOpenContent(content);
    setIsOpen(false);
    setisContentOpen(true);
  };

  const toggleSidebar = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
      console.log("Sidebar opens");
      if (isMobile) {
        if (!isOpen) {
          setisContentOpen(false); // Close content when sidebar is closed
        }
      }
    }, 100);
  };
  return (
    <>
      {isMobile ? (
        isOpen ? (
          <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <div className="sidebar-header">
              {isOpen && (
                <span className="sidebar-title">Game Fundamentals</span>
              )}
              <button className="toggle-btn" onClick={toggleSidebar}>
                <div className="icon-placeholder">≡</div>
              </button>
            </div>

            {/* Search Input */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Search... ( DISABLED )"
                className="search-input"
              />
            </div>
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
                      className="fundamentals-item color-red"
                      onClick={() => handleContentChange("defense")}
                    >
                      <FaShieldAlt size={30} />
                      <span>Defense</span>
                    </div>
                    <div
                      className="fundamentals-item color-blue"
                      onClick={() => handleContentChange("counterAttack")}
                    >
                      <span>Counter Attacking</span>
                    </div>
                    <div
                      className="fundamentals-item color-yellow"
                      onClick={() => handleContentChange("attack")}
                    >
                      <LuSword size={30} />
                      <span>Attack</span>
                    </div>
                    <div
                      className="fundamentals-item color-green"
                      onClick={() => handleContentChange("rotations")}
                    >
                      <span>Rotations & Recoveries</span>
                    </div>
                    <div
                      className="fundamentals-item color-orange"
                      onClick={() => handleContentChange("speedDecision")}
                    >
                      <span>Speed & Decision Making</span>
                    </div>
                    <div
                      className="fundamentals-item color-purple"
                      onClick={() => handleContentChange("efficientChallenges")}
                    >
                      <span>Efficient Challenges</span>
                    </div>
                    <div
                      className="fundamentals-item color-pink"
                      onClick={() => handleContentChange("soloQ")}
                    >
                      <span>Carry in Solo Q</span>
                    </div>
                    <div
                      className="fundamentals-item color-cyan"
                      onClick={() => handleContentChange("mental")}
                    >
                      <span>Positive Mental</span>
                    </div>
                    <div
                      className="fundamentals-item color-teal"
                      onClick={() => handleContentChange("advancedTips")}
                    >
                      <span>21 Advanced Tips</span>
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
                      className="fundamentals-item color-red"
                      onClick={() => handleContentChange("shooting")}
                    >
                      <span>Shooting Mechanics</span>
                    </div>
                    <div
                      className="fundamentals-item color-blue"
                      onClick={() => handleContentChange("dribbling")}
                    >
                      <span>Dribbling Mechanics</span>
                    </div>
                    <div
                      className="fundamentals-item color-yellow"
                      onClick={() => handleContentChange("flicks")}
                    >
                      <span>Flick Mechanics</span>
                    </div>
                    <div
                      className="fundamentals-item color-green"
                      onClick={() => handleContentChange("cutting")}
                    >
                      <span>Cutting & Control Mechanics</span>
                    </div>
                    <div
                      className="fundamentals-item color-orange"
                      onClick={() => handleContentChange("aerial")}
                    >
                      <span>Aerial Mechanics</span>
                    </div>
                    <div
                      className="fundamentals-item color-purple"
                      onClick={() => handleContentChange("resets")}
                    >
                      <span>Reset Mechanics</span>
                    </div>
                    <div
                      className="fundamentals-item color-pink"
                      onClick={() => handleContentChange("wall")}
                    >
                      <span>Wall & Ceiling Mechanics</span>
                    </div>
                    <div
                      className="fundamentals-item color-cyan"
                      onClick={() => handleContentChange("defense")}
                    >
                      <span>Defensive Mechanics</span>
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
                    className={`sub-menu ${
                      openSubMenu === "coaching" ? "open" : ""
                    }`}
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
                  <div
                    className="menu-title"
                    onClick={() => toggleSubMenu("notes")}
                  >
                    Notes{" "}
                    <span className="arrow">
                      {openSubMenu === "notes" ? "▲" : "▼"}
                    </span>
                  </div>
                  <div
                    className={`sub-menu ${
                      openSubMenu === "notes" ? "open" : ""
                    }`}
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
                  alt="Pfp"
                  className="profile-pic"
                />
                <div className="profile-info">
                  <p className="profile-name">ProfileName</p>
                  <p className="profile-title"></p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <div className={`sidebar-header ${isOpen ? "open" : "closed"}`}>
              <div className="mobile-content">
                {openSubMenu ? (
                  <div className="mobile-welcome-message">
                    <button className="toggle-btn2" onClick={toggleSidebar}>
                      <h3>{OpenContent}</h3>
                    </button>
                  </div>
                ) : (
                  <div className="mobile-welcome-message">
                    <button className="toggle-btn2" onClick={toggleSidebar}>
                      <h3>Welcome</h3>
                      <p>Choose a menu to get started!</p>
                    </button>
                  </div>
                )}
              </div>
              {isOpen && (
                <span className="sidebar-title">Game Fundamentals</span>
              )}
            </div>
          </div>
        )
      ) : (
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
              <input
                type="text"
                placeholder="Search... (DISABLED)"
                className="search-input"
              />
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
                    className="fundamentals-item color-red"
                    onClick={() => handleContentChange("defense")}
                  >
                    <FaShieldAlt size={30} />
                    <span>Defense</span>
                  </div>
                  <div
                    className="fundamentals-item color-blue"
                    onClick={() => handleContentChange("counterAttack")}
                  >
                    <span>Counter Attacking</span>
                  </div>
                  <div
                    className="fundamentals-item color-yellow"
                    onClick={() => handleContentChange("attack")}
                  >
                    <LuSword size={30} />
                    <span>Attack</span>
                  </div>
                  <div
                    className="fundamentals-item color-green"
                    onClick={() => handleContentChange("rotations")}
                  >
                    <span>Rotations & Recoveries</span>
                  </div>
                  <div
                    className="fundamentals-item color-orange"
                    onClick={() => handleContentChange("speedDecision")}
                  >
                    <span>Speed & Decision Making</span>
                  </div>
                  <div
                    className="fundamentals-item color-purple"
                    onClick={() => handleContentChange("efficientChallenges")}
                  >
                    <span>Efficient Challenges</span>
                  </div>
                  <div
                    className="fundamentals-item color-pink"
                    onClick={() => handleContentChange("soloQ")}
                  >
                    <span>Carry in Solo Q</span>
                  </div>
                  <div
                    className="fundamentals-item color-cyan"
                    onClick={() => handleContentChange("mental")}
                  >
                    <span>Positive Mental</span>
                  </div>
                  <div
                    className="fundamentals-item color-teal"
                    onClick={() => handleContentChange("advancedTips")}
                  >
                    <span>21 Advanced Tips</span>
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
                    className="fundamentals-item color-red"
                    onClick={() => handleContentChange("shooting")}
                  >
                    <span>Shooting Mechanics</span>
                  </div>
                  <div
                    className="fundamentals-item color-blue"
                    onClick={() => handleContentChange("dribbling")}
                  >
                    <span>Dribbling Mechanics</span>
                  </div>
                  <div
                    className="fundamentals-item color-yellow"
                    onClick={() => handleContentChange("flicks")}
                  >
                    <span>Flick Mechanics</span>
                  </div>
                  <div
                    className="fundamentals-item color-green"
                    onClick={() => handleContentChange("cutting")}
                  >
                    <span>Cutting & Control Mechanics</span>
                  </div>
                  <div
                    className="fundamentals-item color-orange"
                    onClick={() => handleContentChange("aerial")}
                  >
                    <span>Aerial Mechanics</span>
                  </div>
                  <div
                    className="fundamentals-item color-purple"
                    onClick={() => handleContentChange("resets")}
                  >
                    <span>Reset Mechanics</span>
                  </div>
                  <div
                    className="fundamentals-item color-pink"
                    onClick={() => handleContentChange("wall")}
                  >
                    <span>Wall & Ceiling Mechanics</span>
                  </div>
                  <div
                    className="fundamentals-item color-cyan"
                    onClick={() => handleContentChange("defense")}
                  >
                    <span>Defensive Mechanics</span>
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
                  className={`sub-menu ${
                    openSubMenu === "coaching" ? "open" : ""
                  }`}
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
                <div
                  className="menu-title"
                  onClick={() => toggleSubMenu("notes")}
                >
                  Notes{" "}
                  <span className="arrow">
                    {openSubMenu === "notes" ? "▲" : "▼"}
                  </span>
                </div>
                <div
                  className={`sub-menu ${
                    openSubMenu === "notes" ? "open" : ""
                  }`}
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
                alt="Pfp"
                className="profile-pic"
              />
              <div className="profile-info">
                <p className="profile-name">ProfileName</p>
                <p className="profile-title"></p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Sidebar;
