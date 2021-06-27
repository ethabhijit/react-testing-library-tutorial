import { useState } from "react";

const Button = () => {
  const [value, setValue] = useState("Press Here");

  const dummyFunction = () => {
    setValue("You Clicked");
  };

  return (
    <>
      <button title="dummyButton" onClick={dummyFunction}>
        {value}
      </button>
    </>
  );
};

export default Button;
