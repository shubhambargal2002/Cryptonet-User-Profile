import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {userData && (
        <div className="user-card-container">
          <div className="user-card">
            <img src={userData.picture.large} alt="User" />
            <div className="user-details">
              <div className="name-container">
                <p>{userData.name.first}</p>
                <p>{userData.name.last}</p>
              </div>
              <p>{userData.gender}</p>
              <p>{userData.phone}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
