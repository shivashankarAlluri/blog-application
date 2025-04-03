import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBlog from "./pages/CreateBlog";
import DeleteBlog from "./pages/DeleteBlog";
import EditBlog from "./pages/EditBlog";
import Navbar from "./Components/Navbar";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blog/:id" element={<DeleteBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </>
  );
}

export default App;

