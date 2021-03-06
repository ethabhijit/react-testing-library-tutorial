import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

it("checkButtonRender", () => {
  const { queryByTitle } = render(<Button />);
  const btn = queryByTitle("dummyButton");
  expect(btn).toBeTruthy();
});

describe("clickButton", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<Button />);
    const btn = queryByTitle("dummyButton");
    expect(btn.innerHTML).toBe("Press Here");
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe("You Clicked");
  });
});
