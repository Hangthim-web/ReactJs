import {useState} from 'react';

const ShortCircuit = () => {
    const [value,setValue]= useState();
    const [name,setName] = useState("John Doe");
  return (
<section>
    <h1>Short Circuit</h1>

    <p>{value || "Hello world"}</p>
    <p>{value && "Hello world"}</p>
    <p>{name || "Hello wowo"}</p>
    <p>{name && "Hello wowo"}</p>
</section>
  )
}
export default ShortCircuit