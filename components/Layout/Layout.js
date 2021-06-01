import Router from "next/router";
import Dock from "./Dock";
import dynamic from "next/dynamic";

const AppWindow = dynamic(() => import("../AppWindow/AppWindow"));

Router.onRouteChangeStart = () => {
  cursor: wait;
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <div className="w-screen h-screen">
        <AppWindow />
      </div>
      <Dock />
    </>
  );
};

export default Layout;
