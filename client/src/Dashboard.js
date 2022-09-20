import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Dashboard = () => {
  console.log(localStorage);
  const navigate = useNavigate();

  const [temp, setTemp] = useState(0);

  useEffect(() => {
    if (temp !== 0) {
      localStorage.clear();
      navigate("/Signin");
    }
  }, [temp]);

  if (!localStorage.getItem("status")) {
    return <Navigate replace to="/Signin" />;
  } else {
    return (
      <div className="dashboard-main-div">
        <h1 className="dashboard-message">Welcome to your Dashboard</h1>
        <div className="logout-button-div">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setTemp(temp + 1);
            }}
          >
            <button>Logout</button>
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;
