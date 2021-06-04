import { useState } from "react";
import dynamic from "next/dynamic";

import Dock from "../Layout/Dock";

const AppWindow = dynamic(() => import("../AppWindow"));

const Layout = ({ children }) => {
  // const [browser, setBrowser] = useState(false);
  const [apps, setApps] = useState({
    browser: false,
  });

  const { browser } = apps;

  const launchApp = (e) => {
    console.log(e.target.id);
    setApps({
      ...apps,
      [e.target.id]: e.target.id,
    });
  };

  return (
    <>
      {children}
      {browser && <AppWindow browser />}
      <Dock launchApp={launchApp} />
    </>
  );
};

export default Layout;
