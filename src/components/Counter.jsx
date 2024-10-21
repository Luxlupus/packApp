// eslint-disable-next-line react/prop-types
export default function Counter({ totalNumberOfItems, numberOfItemsPacked }) {
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
