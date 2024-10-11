/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemsForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //basic validation and guard statement
    if (!itemText) {
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        type="text"
        autoFocus
      />
      <Button>Add items to list</Button>
    </form>
  );
}
