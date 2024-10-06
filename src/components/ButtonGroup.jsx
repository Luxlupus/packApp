import { buttonText } from "../lib/constants";
import Button from "./Button";

//mapping over an array for filling out button text. Using the text as a key bcs sorting.

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {buttonText.map((text) => {
        return (
          <Button type="secondary" key={text}>
            {text}
          </Button>
        );
      })}
    </section>
  );
}
