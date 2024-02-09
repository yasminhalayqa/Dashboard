import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/Dashboard";
import Team from "./scenes/Team";
import AddTeam from "./scenes/Team/AddTeam";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/team" element={<Team />} />
      <Route exact path="/add_user" element={<AddTeam />} />
    </Routes>
  );
}
