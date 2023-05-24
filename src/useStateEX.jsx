import { useState } from "react";

const UseStateEX = () => {
  const handleClick = () => {
    setCount(count + 1);
    // setAnotherCount(anotherCount+1);
    // console.log(setCount);
  };

  const anotherHandleClick = () => {
    setAnotherCount(anotherCount + 1);
  };
  const decrementHandleClick = () => {
    setCount(count - 1);
    setAnotherCount(anotherCount - 1);
  };

  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(10);
  return (
    <div className="container mx-auto bg-slate-300 grid place-content-center h-[500px]">
      <h3 className="">You have clicked {count} this many times</h3>
      <h3 className="">You have clicked {anotherCount} this many times</h3>
      <button
        className="bg-indigo-500 text-white rounded-md p-2 mt-3"
        onClick={handleClick}
      >
        Increment
      </button>
      <button
        className="bg-indigo-500 text-white rounded-md p-2 mt-3"
        onClick={anotherHandleClick}
      >
        {" "}
        Another Increment
      </button>
      <button
        className="bg-indigo-500 text-white rounded-md p-2 mt-3"
        onClick={decrementHandleClick}
      >
        {" "}
        Decrement
      </button>
    </div>
  );
};

export default UseStateEX;
