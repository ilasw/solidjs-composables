import type {Component} from 'solid-js';

import {useMedia, useToggle, useNetworkState} from "./composables";
import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {

  const isMobile = useMedia('(max-width: 768px)');
  const [isOpen, toggleOpen] = useToggle(false);
  const network = useNetworkState();

  return (
      <div class={styles.App}>
        <p>isOnline: {JSON.stringify(network().isOnline)}</p>
        <p>IsMobile: {`${isMobile()}`}</p>
        <p>isOpen: {`${isOpen()}`}<br/><button onClick={toggleOpen}>Toggle isOpen</button></p>
      </div>
  );
};

export default App;
