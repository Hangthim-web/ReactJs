import { useState } from "react";

const Login = () => {

    const [user,setUser] = useState(null)
    const [logginIn,setLogginIn] = useState(false);
    const [loggingOut,setLoggingOut] = useState(false);
    const [settingUp,setSettingUp] =useState(null);

    const login=()=>
    {
        setUser({name:"Hangthim limbu"})
    }

    const LoggingFunction=()=>
    {
        return(

            <div>

     <h2>Please log in</h2>
     <button onClick={login}>Login</button>
   </div>
       )
    }
  return (
    <section className="container mx-auto bg-slate-300">
      <div>
        {user ? (
          <div>
            <h2>{user.name}</h2>
            <button onClick={logout}>Logout</button>
            
            
          </div>
        ) : (
       <LoggingFunction/>
        )}
      </div>
    </section>
  );
};
export default Login;
