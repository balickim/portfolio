import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import parse from "html-react-parser";

const AppWindow = () => {
  const [disabled, setDisabled] = useState(false);
  const [html, setHtml] = useState("");

  useEffect(() => {
    initSite();
  }, []);

  const initSite = async () => {
    // let data = await fetch(
    //   "https://api.codetabs.com/v1/proxy?quest=http://158.101.163.216:8080/pl"
    // );
    let data = await fetch("./temp.html");
    data = await data.text();
    console.log(data.indexOf("href"));
    console.log(data.lastIndexOf("href"));
    console.log(data.substr(data.indexOf("href"), data.indexOf("href") + 20));
    setHtml(data);
  };

  const toggleDraggable = () => setDisabled(!disabled);

  return (
    <Draggable
      onStart={toggleDraggable}
      onStop={toggleDraggable}
      defaultPosition={{ x: 100, y: 100 }}
      disabled={disabled}
      bounds="parent"
    >
      <div
        style={{ width: 800, height: 600, overflowY: "scroll" }}
        // className={!disabled ? "draggable" : null}
      >
        <div className="bg-gray-50 bg-opacity-25 p-4">
          <p>{html && parse(html)}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default AppWindow;
