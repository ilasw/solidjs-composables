import type {Component} from 'solid-js';
import styles from "./App.module.css";

import {
  useMedia,
  useToggle,
  useNetworkState,
  useMouse,
  useWindowScroll,
  useWindowSize,
  useAtom,
} from "@/core";

const App: Component = () => {

  const name = useAtom('Marco');
  const isMobile = useMedia('(max-width: 768px)');
  const [isOpen, toggleOpen] = useToggle(false);
  const {x, y} = useMouse();
  const scroll = useWindowScroll();
  const size = useWindowSize();
  const network = useNetworkState();

  return (
      <div class={styles.App} style={{'min-height': '300vh'}}>
        <span>Name: "{name()}"</span><br/>
        <button onClick={() => name('Mike')}>Set into "Mike"</button>
        <button onClick={() => name('Luca')}>Set into "Luca"</button>

        <p>isOnline: {JSON.stringify(network().isOnline)}</p>
        <p>{isMobile() ? 'is mobile' : 'is not mobile'}</p>
        <p>Mouse position: x:{x()} y:{y()}</p>
        <p>Scroll: {JSON.stringify(scroll())}</p>
        <p>Window Size: {JSON.stringify(size())}</p>
        <p>Toggle the value: "{`${isOpen()}`}" <button onClick={toggleOpen}>Toggle</button></p>
      </div>
  );
};

export default App;
