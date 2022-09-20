import "./SignUp.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [message, setMessage] = useState("");
  const [counter2, setCounter2] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");

  useEffect(() => {
    if (counter2 !== 0) {
      api_signup();
    }
  }, [counter2]);

  async function api_signup() {
    const res = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        pass: pass,
        cpass: cpass,
      }),
    });

    const json = await res.json();
    setMessage(json.message);
  }
  return (
    <div className="sign-div sign-up-div">
      <div className="mesaage-div">
        <p className="message">{message}</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCounter2(counter2 + 1);
        }}
      >
        <div className="input-container">
          <br />
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            onBlur={(e) => {
              setName(e.target.value);
            }}
            value={name}
            required
            placeholder="Name"
            type="text"
            className="name"
            name="uname"
          ></input>
        </div>

        <div className="input-container">
          <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
            placeholder="Email"
            type="text"
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
            required
            placeholder="Password"
            type="password"
            className="pass"
            name="pass"
          ></input>
        </div>

        <div className="input-container">
          <br />
          <input
            onChange={(e) => {
              setCpass(e.target.value);
            }}
            onBlur={(e) => {
              setCpass(e.target.value);
            }}
            value={cpass}
            required
            type="password"
            placeholder="Confirm Password"
            className="cpass"
            name="cpass"
          ></input>
        </div>

        <div className="input-container button-div">
          <button>Create Account</button>
        </div>
      </form>

      <div className="container-switch-signin">
        <p>
          Already have an account?{" "}
          <Link to="/Signin">
            <span>Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
