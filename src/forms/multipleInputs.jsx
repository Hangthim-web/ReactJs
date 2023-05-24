import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange=(e)=>
  {
    setUser({...user,[e.target.name]:e.target.value});
  }
  const handleSubmit=()=>{}
  return (
    <section>
      <form action="" onChange={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={user.name} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default MultipleInputs;
