import { useState, useEffect } from "react";
import parse from "html-react-parser";

const AppWindow = () => {
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

  return (
    <div className="bg-gray-50 bg-opacity-25 p-4">{html && parse(html)}</div>
  );
};

export default AppWindow;
