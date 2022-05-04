import type {Component} from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import {useMedia, useToggle} from "./composables";

const App: Component = () => {

  const isMobile = useMedia('(max-width: 768px)');
  const [isOpen, toggleOpen] = useToggle(false);

  return (
      <div class={styles.App}>
        <header class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo"/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>IsMobile: {`${isMobile()}`}</p>
          <p>isOpen: {`${isOpen()}`}<br/><button onClick={toggleOpen}>Toggle isOpen</button></p>
          <a
              class={styles.link}
              href="https://github.com/solidjs/solid"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn Solid
          </a>
        </header>
      </div>
  );
};

export default App;
