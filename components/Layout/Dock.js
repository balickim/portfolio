const Dock = () => {
  return (
    <>
      <div
        id="dock-container"
        className="fixed text-center bottom-12 right-1/4 left-1/4 w-auto bg-gray-50 bg-opacity-25 rounded"
      >
        <div id="dock">
          <ul>
            <li>
              <span>Address Book</span>
              <a href="#">
                <img src="/images/apple-icon.png" />
              </a>
            </li>
            <li>
              <span>App Store</span>
              <a href="#">
                <img src="/images/chrome_ico.png" />
              </a>
            </li>
            <li>
              <span>Chrome</span>
              <a href="#">
                <img src="/images/firefox.png" />
              </a>
            </li>
            <li>
              <span>Firefox</span>
              <a href="#">
                <img src="/images/MetroUI-Apps-Mac-iChat-icon.png" />
              </a>
            </li>
            <li>
              <span>Address Book</span>
              <a href="#">
                <img src="/images/apple-icon.png" />
              </a>
            </li>
            <li>
              <span>App Store</span>
              <a href="#">
                <img src="/images/chrome_ico.png" />
              </a>
            </li>
            <li>
              <span>Chrome</span>
              <a href="#">
                <img src="/images/firefox.png" />
              </a>
            </li>
            <li>
              <span>Firefox</span>
              <a href="#">
                <img src="/images/MetroUI-Apps-Mac-iChat-icon.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dock;
