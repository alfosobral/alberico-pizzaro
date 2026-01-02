import { useState } from "react";

export default function TagSelector({ availableTags, value, onChange }) {
  const [newTag, setNewTag] = useState("");

  const toggleTag = (tagId) => {
    if (value.includes(tagId)) {
      onChange(value.filter(t => t !== tagId));
    } else {
      onChange([...value, tagId]);
    }
  };

  return (
    <div>
      {/* Tags existentes */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {availableTags.map(tag => (
          <button
            key={tag.id}
            type="button"
            onClick={() => toggleTag(tag.id)}
            style={{
              padding: "6px 12px",
              borderRadius: 20,
              border: "1px solid #ccc",
              background: value.includes(tag.id) ? "#222" : "#fff",
              color: value.includes(tag.id) ? "#fff" : "#000",
              cursor: "pointer"
            }}
          >
            {tag.displayName}
          </button>
        ))}
      </div>
    </div>
  );
}
