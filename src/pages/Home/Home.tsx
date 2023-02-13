import React from "react";

import Menu from "../../components/Menu";
import Sidebar from "../../components/Sidebar";
import Timeline from "../../components/Timeline";

export default function Home() {
  return (
    <div className="grid gap-4 grid-cols-4 mx-auto max-w-lg">
      <Menu />
      <Timeline />
      <Sidebar />
    </div>
  );
}
