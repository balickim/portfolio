import { useState } from "react";
import Draggable from "react-draggable";

import dynamic from "next/dynamic";

const WebBrowser = dynamic(() => import("./Apps/WebBrowser"));

const AppWindow = ({ browser }) => {
  const [disabled, setDisabled] = useState(false);
  const toggleDraggable = () => setDisabled(!disabled);

  return (
    <div className="w-screen h-screen">
      <Draggable
        onStart={toggleDraggable}
        onStop={toggleDraggable}
        defaultPosition={{ x: 100, y: 100 }}
        bounds="parent"
      >
        <div style={{ width: 800, height: 600, overflowY: "scroll" }}>
          {browser && <WebBrowser />}
        </div>
      </Draggable>
    </div>
  );
};

export default AppWindow;
