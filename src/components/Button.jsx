// eslint-disable-next-line react/prop-types
export default function Button({ buttonType, children, onClick }) {
  return (
    //passing button text as children prop
    <button
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
