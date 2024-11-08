import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="welcome-container">
      <img src={'https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg'} alt={'...'} />
      <h2>Welcome, {currentUser?.username}</h2>
      <button onClick={handleSignOut} className="btn btn-danger">
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
