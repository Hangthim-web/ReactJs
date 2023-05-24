import {useState} from 'react';


const ShortCircuitAdvance = () => {

    const [user,setUser] = useState();
    const handleClick=()=>{
         setUser("Hangthim");
    }
  return (
    <section>

    <div>ShortCircuitAdvance</div>

    <h2>{user && "Hello Mr user"}</h2>
    <button onClick={handleClick}>Toggle user</button>
    {/* {user && "user toggling failed"} */}

    </section>
  )
}
export default ShortCircuitAdvance