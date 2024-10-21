import Counter from "./Counter";
import Logo from "./Logo";

// eslint-disable-next-line react/prop-types
export default function Header({ totalNumberOfItems, numberOfItemsPacked }) {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        numberOfItemsPacked={numberOfItemsPacked}
      />
    </header>
  );
}
