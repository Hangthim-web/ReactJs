import {useState,useEffect} from 'react';

const url = "https://api.github.com/users";

const FetchData=()=>
{
  const [users,setUsers] = useState([]);

  useEffect(()=>
  {
 const fetchingData = async () => {
   try {
     const response = await fetch(url);
     const users = await response.json();
     setUsers(users);
     console.log(users);
   } catch (err) {
     console.log("error:", err);
   }
 };
 fetchingData();
  },[])
 
  return(
   <section>
    <h3>Github Users</h3>
    <ul>
      {
        users.map((person)=>
        {
          const {avatar_url,login,html_url,id,events_url} = person;
          return(

            <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h1>{login}</h1>
              <p>{html_url}</p>
              <p>{events_url}</p>
            </div>
          </li>
            )
        })
      }
    </ul>
   </section>
  )
}
export default FetchData;


