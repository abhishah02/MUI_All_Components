import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  let navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("User-info");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const signup = async () => {
    let item = { name, email, password };
    console.warn(item);

    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let res = await result.json();
    // console.warn("Result: ", res);
    // console.warn("User: ", res);

    setName("");
    setEmail("");
    setPassword("");
    localStorage.setItem("User-info", JSON.stringify(res));
    navigate("/login");
  };

  return (
    <>
      <Header />
      <div>
        <h1 className="col-sm-6 offset-sm-3">Register Page</h1>
        <div className="col-sm-6 offset-sm-3">
          <input
            type="text"
            placeholder="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {/* <Link to="/login" style={{ textDecoration: "none" }}> */}
          <button className="btn btn-primary" onClick={signup}>
            {" "}
            Signup{" "}
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default Register;
