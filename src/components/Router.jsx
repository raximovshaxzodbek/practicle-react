import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Toast, ReactModal, Tooltip, CountUp } from "../imports";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/toast" element={<Toast />} />
      <Route path="/react-modal" element={<ReactModal />} />
      <Route path="/tooltip" element={<Tooltip />} />
      <Route path="/count-up" element={<CountUp />} />
    </Routes>
  );
}
