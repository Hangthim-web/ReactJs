import {useState} from 'react';

const ControlledInput=()=>
{

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    console.log(name,email);
  }

  // const handleChange=(e)=>
  // {
  //   const name = console.log(e.target.value);
  //   const email = console.log(e.target.value);
  // }
  return(
    <section>
      <h1>Controlled Input</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
export default ControlledInput;