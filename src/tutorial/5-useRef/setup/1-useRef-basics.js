import React, { useEffect, useRef } from "react";

// useRef
// preserves value in between the renders
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSumbit = (e) => {
    e.preventDefault();
    // if(refContainer.current.value) console.log(refContainer.current.value)
  };
  console.log(refContainer);
  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSumbit}>
        <input type="text" ref={refContainer} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
