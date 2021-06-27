import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState();

  const handelChange = (e) => {
    setInputValue(e.target.value);
  };
  
  return (
    <>
      <input type="text" onChange={handelChange} value={inputValue} title="dummySearch" />
    </>
  );
};

export default Search;