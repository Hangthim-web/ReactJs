import {useState,useEffect} from 'react';

const Toggle =()=>
{
    const [toggle,setToggle] = useState(false);

    return (
        <section>
            <h2>Toggle</h2>
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>
            {toggle && <RandomComponent/>}
        </section>
    )
}

const RandomComponent=()=>
{
    useEffect(()=>
    {
        const setGet = setInterval(()=>
        {
            console.log("weeeweeweewewe")
        },1000);
        return()=>clearInterval(setGet);
    },[])

    return <h1>Sucessfully toggled</h1>
}
export default Toggle;