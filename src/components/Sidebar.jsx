/* eslint-disable react/prop-types */
import AddItemsForm from "./AddItemsForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ setItems }) {
  return (
    <div className="sidebar">
      <AddItemsForm setItems={setItems} />
      <ButtonGroup />
    </div>
  );
}
