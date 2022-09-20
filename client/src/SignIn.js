import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function api_signin() {
    const res = await fetch("http://localhost:3001/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        pass: pass,
      }),
    });

    const json = await res.json();
    if (json.status === true) {
      localStorage.setItem("status", true);
      navigate("/Dashboard");
    } else {
      setData(json.message);
    }
  }

  useEffect(() => {
    if (counter !== 0) {
      api_signin();
    }
  }, [counter]);

  return (
    <div className="sign-div">
      <div className="mesaage-div">
        <p className="message">{data}</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCounter(counter + 1);
        }}
      >
        <div className="input-container">
          <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            value={email}
            required
            placeholder="Email"
            className="email"
            name="email"
          ></input>
        </div>

        <div className="input-container">
          <br />
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
            onBlur={(e) => {
              setPass(e.target.value);
            }}
            value={pass}
            type="password"
            required
            placeholder="Password"
            className="pass"
            name="pass"
          ></input>
        </div>

        <div className="input-container button-div">
          <button>Sign In</button>
        </div>
      </form>

      <div className="container-switch-signin">
        <p>
          Don't have an account ?
          <Link to="/Signup">
            <span> Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;
