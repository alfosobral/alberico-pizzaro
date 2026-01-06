import React from "react"
import styles from "./Toolbar.module.css";
import Searchbar from "../Searchbar/Searchbar";
import Hamburger from "../Hamburger/Hamburger";

export default function Toolbar({ searchTerm, onSearchChange, searchBarOff = false }) {
  return (
    <header className={styles.toolbar}>
      <div className={styles.toolbarLeft}>
        <Hamburger />
      </div>

      <div className={styles.toolbarCenter}>
        {!searchBarOff &&
          <Searchbar 
          value = {searchTerm}
          onChange = {onSearchChange}
          />
        } 
      </div>

      <div className={styles.toolbarRight} />
    </header>

  );
}
