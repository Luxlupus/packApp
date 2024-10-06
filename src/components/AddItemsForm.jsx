/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemsForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //basic validation and guard statement
    if (!itemText) {
      inputRef.current.focus();
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    setItems((prev) => [...prev, newItem]);
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
