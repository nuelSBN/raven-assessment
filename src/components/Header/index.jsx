import React, { useState } from "react";
import "./header.css";
import MobileHeader from "./partials/Mobile";
import DesktopHeader from "./partials/Desktop";

export default function Header() {
  return (
    <header className="header">
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
}
