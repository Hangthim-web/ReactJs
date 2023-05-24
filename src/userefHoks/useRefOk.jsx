import { useEffect, useRef, useState } from "react";

const UseRefOk = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current);
    const name = refContainer.current.value;
    console.log(name);
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  if (!isMounted.current) {
    isMounted.current = true;
    return;
  }
  console.log("re-render");
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            ref={refContainer}
            className="border-2 border-slate-600"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h1>Value : {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increase</button>
    </div>
  );
};
export default UseRefOk;
