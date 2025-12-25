import { React, useState } from "react";
import styles from './Searchbar.module.css'

export default function Searchbar({ value, onChange }) {

    const [isFocused, setIsFocused] = useState(false);

  return (
    <input 
        type = "text"
        value = {value}
        onChange = {onChange}
        onFocus = {() => setIsFocused(true)}
        onBlur = {() => setIsFocused(false)}
        className={`${styles.searchInput} ${isFocused ? styles.focused : ""}`}
        placeholder='Busca productos...' 
    />
  )
}
