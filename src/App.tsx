import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Home from "./components/Home";
import Container from "./layouts/Container";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import Profile from "./layouts/Profile";
import AdminMain from "./layouts/AdminMain";
import PrivateComponent from "./components/PrivateComponent";
import AdminComponent from "./components/AdminComponent";
import AdminEdit from "./layouts/AdminEdit";
import UserDetails from "./layouts/UserDetails";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route element={<AdminComponent />}>
          <Route path="/admin" element={<AdminMain />} />
          <Route path="/admin/edit" element={<AdminEdit />} />
          <Route path="/admin/user" element={<UserDetails />} />
        </Route>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Home />} />
          <Route path="/container" element={<Container />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
