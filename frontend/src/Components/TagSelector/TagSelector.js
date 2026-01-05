import { useState } from "react";
import styles from "../TagSelector/TagSelector.module.css"

export default function TagSelector({ availableTags, value, onChange }) {

  const toggleTag = (tagId) => {
    if (value.includes(tagId)) {
      onChange(value.filter(t => t !== tagId));
    } else {
      onChange([...value, tagId]);
    }
  };

  return (
    <div>
      <div className={styles.tagSelector}>
        {availableTags.map(tag => (
          <button
            key={tag.id}
            onClick={() => toggleTag(tag.id)}
            className={`${styles.tagChip} ${value.includes(tag.id) ? styles.active : ""}`}
          >
            {tag.displayName}
          </button>
        ))}
      </div>
    </div>
  );
}
