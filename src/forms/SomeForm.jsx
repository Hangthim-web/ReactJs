import {useState} from 'react';
import {data} from '../data';

const SomeForm=()=>
{
    const [name,setName] =useState('');
    const [users,setUsers] = useState(data);
    
    const handleSubmit=(e)=>
    {
           e.preventDefault();
           const fakeID = Date.now();
           
           const newUsers = {key:fakeID,name};
           const updatedUsers = [...users,newUsers];
           setUsers(updatedUsers);
           setName('');

           
    }

    const removeUser=(id)=>
    {
        const newUserPlease = users.filter((person)=>person.id!==id);
        setUsers(newUserPlease);
    }

    return(
        <section>

        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>

        <h1>Users</h1>
        {users.map((user)=>
        {
            return(
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <button onClick={()=>removeUser(user.id)}>Remove</button>
                </div>
            )
        })}
        </section>
    )
};
export default SomeForm;
