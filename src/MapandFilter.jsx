import { useState } from "react";
import { person } from "./data";



const MapandFilter = () => {
  const [data, setData] = useState(person);
  const removeAllItems = () => {
    setData([]);
  };
  const removeItem = (name) => {
    const newPeople = data.filter((person1) => person1.name !== name);
    setData(newPeople);
  };
  return (
    <section className="container mx-auto grid place-content-center h-[600px]">
      <div className="bg-slate-200 p-20 rounded-md">
        <h2 className="mb-4 text-2xl">Map and filter</h2>
        <div>
          {data.map((people) => {
            return (
              <section className="text-center">
                <h2 key={people.name}>{people.name}</h2>
                <button className="bg-blue-400 px-[20px] py-[5px] rounded-md text-center text-white mt-1 hover:bg-blue-600 transition delay-200 ease-in-out" onClick={()=>removeItem(people.name)}>
                  Clear
                </button>
              </section>
            );
          })}
          <button class="block ml-[30px] bg-indigo-400 px-[20px] py-[5px] rounded-md mt-5 text-white hover:bg-indigo-600 transition delay-200 ease-in-out" onClick={removeAllItems}>
            Clear all
          </button>
        </div>
      </div>
    </section>
  );
};
export default MapandFilter;
