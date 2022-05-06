import type {Component} from 'solid-js';
import styles from "./App.module.css";
import {useMedia, useToggle, useNetworkState} from "../../packages/core";
import {useMouse} from "../../packages/core/src/browser/use-mouse";
import {useWindowScroll} from "../../packages/core/src/browser/use-window-scroll";
import {useWindowSize} from "../../packages/core/src/browser/use-window-size";

const App: Component = () => {

  const isMobile = useMedia('(max-width: 768px)');
  const [isOpen, toggleOpen] = useToggle(false);
  const {x, y} = useMouse();
  const scroll = useWindowScroll();
  const size = useWindowSize();
  const network = useNetworkState();

  return (
      <div class={styles.App} style={{'min-height': '300vh'}}>
        <p>isOnline: {JSON.stringify(network().isOnline)}</p>
        <p>IsMobile: {`${isMobile()}`}</p>
        <p>Mouse position: x:{x()} y:{y()}</p>
        <p>Scroll: {JSON.stringify(scroll())}</p>
        <p>Size: {JSON.stringify(size())}</p>
        <p>isOpen: {`${isOpen()}`}<br/><button onClick={toggleOpen}>Toggle isOpen</button></p>
      </div>
  );
};

export default App;
