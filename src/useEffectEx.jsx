import {useState,useEffect} from 'react';


const UseEffectEx =()=>
{

    const handleFunction=()=>
    {
        setCount(count+1);
    }
    const anotherhandleFunction=()=>
    {
        setAnotherCount(anotherCount+1);
    }
   

    const [count,setCount] = useState(0);
    const [anotherCount,setAnotherCount] = useState(22);
     useEffect(() => {
       // document.title=`You have clicked {count} many times`
       console.log("This has been rendered this many times");
     }, [count]);
    return (
        <div className="container mx-auto bg-slate-200 h-[500px] grid place-content-center ">
            <h2 className="text-2xl">You have clicked {count} this many times.</h2>
            <h2 className="text-2xl">You have clicked {anotherCount} this many times.</h2>
            <button onClick={handleFunction} className="bg-indigo-400 inline text-white mt-3 rounded-md ">Increment</button>
            <button onClick={anotherhandleFunction} className="bg-indigo-400 inline text-white mt-3 rounded-md ">Another Increment</button>
        </div>
    )
};

export default UseEffectEx;