import React from "react"
import styles from "./Toolbar.module.css";
import Searchbar from "../Searchbar/Searchbar";
import Hamburger from "../Hamburger/Hamburger";

export default function Toolbar({ searchTerm, onSearchChange }) {
  return (
    <header className={styles.toolbar}>
      <div className={styles.toolbarLeft}>
        <Hamburger />
      </div>

      <div className={styles.toolbarCenter}>
        <Searchbar 
        value = {searchTerm}
        onChange = {onSearchChange}
        />
      </div>

      <div className={styles.toolbarRight} />
    </header>

  );
}
