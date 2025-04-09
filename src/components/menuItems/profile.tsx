import React from "react";
import "../css/Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
}

const Profile: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="profile-section">
          <img
            src="https://via.placeholder.com/40"
            alt="Pfp"
            className="profile-pic"
          />
          <div className="profile-info">
            <p className="profile-name">ProfileName</p>
            <p className="profile-title">Your title here</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
