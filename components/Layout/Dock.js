const Dock = ({ launchApp }) => {
  return (
    <>
      <div
        id="dock-container"
        className="fixed text-center bottom-12 right-1/4 left-1/4 w-auto bg-gray-50 bg-opacity-25 rounded"
      >
        <div id="dock">
          <ul>
            <li>
              <span>Browser</span>
              <button onClick={launchApp}>
                <img id="browser" src="/images/chrome_ico.png" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dock;
