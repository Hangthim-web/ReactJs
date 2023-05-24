import {useState} from 'react';

const StateGotcha = () => {
    const [data,setData] = useState(0);
    const handleClick=()=>
{
    console.log(data);
    setTimeout(()=>
    {
        setData((currentData)=>
        {
    return currentData + 1;
})
    },2000)
}
  return (

    <div>
        <h1>UseState Gotcha</h1>
        <h1>{data}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}
export default StateGotcha