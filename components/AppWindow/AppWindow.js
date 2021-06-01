import { useState } from "react";

import Draggable from "react-draggable";

export default function AppWindow() {
  const [disabled, setDisabled] = useState(false);

  const toggleDraggable = () => setDisabled(!disabled);

  return (
    <Draggable
      onStart={toggleDraggable}
      // onDrag={handleDrag}
      onStop={toggleDraggable}
      defaultPosition={{ x: 100, y: 100 }}
      disabled={disabled}
      bounds="parent"
    >
      <div style={{ width: 800 }} className={!disabled ? "draggable" : null}>
        <div className="bg-gray-50 bg-opacity-25 p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt metus in ex tincidunt, id viverra enim condimentum.
            Praesent hendrerit eu ante commodo varius. Vestibulum at feugiat
            massa. Etiam sollicitudin nibh nec accumsan fringilla. Etiam risus
            nulla, scelerisque vitae tortor vel, malesuada scelerisque dui.
            Suspendisse tristique tellus vulputate aliquet aliquet. Nulla tortor
            quam, aliquam ut scelerisque et, interdum id ex. Vestibulum quis
            ullamcorper nibh, non porta arcu. Cras blandit nisl vitae dui
            tincidunt laoreet. Donec sollicitudin pretium justo eu viverra.
            Mauris venenatis risus ex, non volutpat nibh porta at. Nam et
            pharetra sapien. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Fusce molestie, nisi et
            rhoncus tristique, mi ex eleifend metus, ut tempus libero nisi sed
            est. Suspendisse at maximus tortor. Sed consectetur ante nibh, vel
            ornare nibh maximus eu. Nunc quis accumsan nisi. Pellentesque diam
            est, convallis et efficitur ac, dictum sit amet elit. Integer
            dignissim consequat vulputate. Sed orci purus, sollicitudin eget
            pharetra quis, ultricies id erat. In hac habitasse platea dictumst.
            In auctor felis dui. Etiam mollis aliquet feugiat. Integer gravida,
            turpis sed viverra vestibulum, nunc ipsum vestibulum tellus, dictum
            posuere justo arcu in odio. Maecenas maximus aliquam elit, quis
            euismod eros varius eget. Vestibulum nec placerat tortor. Aliquam
            tristique consectetur lacus ut bibendum. Ut vulputate est felis, ut
            suscipit diam sollicitudin ac. Morbi risus urna, dignissim in nunc
            vel, rutrum sollicitudin erat. Aliquam ac erat ac elit auctor
            euismod. Ut et dictum purus, in bibendum urna. Aliquam in pretium
            ligula. Vestibulum diam dui, aliquet sed semper vitae, interdum ac
            lectus. Cras id mollis dolor. Proin sollicitudin non dolor commodo
            dapibus. Proin ante mi, cursus ac nibh blandit, facilisis bibendum
            augue. Mauris laoreet venenatis volutpat. Sed eleifend tellus eget
            turpis molestie, vehicula blandit nisi ullamcorper. Maecenas tellus
            elit, malesuada lacinia faucibus eu, hendrerit feugiat mi. Morbi
            elit diam, laoreet ut est et, congue volutpat nisl. Aenean posuere
            id ligula ac semper. Sed lorem nisl, dignissim vitae pellentesque
            id, dignissim vehicula sapien. Integer dignissim est mauris, vel
            porta nibh rutrum vel. Aenean placerat nulla nisl, sed malesuada
            neque pellentesque in. Morbi a erat id elit aliquam gravida quis in
            ex. Fusce id pellentesque urna, et euismod quam. Donec tristique
            fermentum facilisis. Vestibulum arcu odio, posuere id dignissim sit
            amet, condimentum eu elit. Vivamus nec consectetur dolor, eu
            vestibulum dolor. Donec facilisis eget nibh ac aliquet. Sed ultrices
            placerat metus nec gravida. Mauris efficitur augue tellus, non
            placerat massa mattis sed. Pellentesque condimentum pellentesque dui
            non suscipit. Morbi condimentum tellus eget odio aliquam, ut viverra
            felis vehicula.
          </p>
        </div>
      </div>
    </Draggable>
  );
}
