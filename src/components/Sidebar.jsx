/* eslint-disable react/prop-types */
import AddItemsForm from "./AddItemsForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ handleAddItem }) {
  return (
    <div className="sidebar">
      <AddItemsForm handleAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
