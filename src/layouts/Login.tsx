import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

// interface FormData {
//   email: string;
//   password: string;
// }

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  let navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("User-info");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const loadUser = async () => {
    // console.warn();
    // console.log(email, password);

    // let item = { email, password };
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await result.json();
    // console.warn(res);

    if (res.email && res.password) {
      // localStorage.setItem("User-info", JSON.stringify(res.user));
      if (res.role === "Admin") {
        localStorage.setItem("Admin-info", JSON.stringify(res));

        navigate("/admin");
      } else {
        localStorage.setItem("User-info", JSON.stringify(res));

        navigate("/");
      }
    } else {
      alert("please enter correct details");
    }
  };

  return (
    <>
      <Header />
      <div>
        <h1 className="col-sm-6 offset-sm-3">Login Page</h1>
        <div className="col-sm-6 offset-sm-3">
          <input
            type="email"
            placeholder="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="btn btn-primary" onClick={loadUser}>
            {" "}
            Login{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
