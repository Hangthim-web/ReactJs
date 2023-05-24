import { useState } from "react";

const Batching = () => {
  const [user, setUser] = useState({
    name: "Hangthim",
    age: 21,
    gender: "male",
  });

  const handleClick = () => {
    setUser({
      name: "Winona",
      age: 22,
      gender: "female",
    });
  };
  const handleHangthim=()=>
  {
    setUser(user);
  }
  return (
    <div className="container mx-auto bg-slate-200 grid place-content-center h-[500px]">
      <h1 className="text-5xl">Batching</h1>
      <div className="text-center">
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
        <h3>{user.gender}</h3>
      </div>
       <button
          onClick={handleClick}
          className="bg-indigo-400 p-3 text-white text-center hover:bg-indigo-600 mt-3"
        >
          Show Winona
        </button>
      
     
    </div>
  );
};
export default Batching;
