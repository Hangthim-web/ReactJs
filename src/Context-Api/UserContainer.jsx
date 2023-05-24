import { UseContextApp } from "./navbar"


 const UserContainer = () => {

    const {user,logout} = UseContextApp();
  return (
    <section>
        <div>
            {user?
            (<div>
                <h1>Hello my Friend, {user}</h1>
                <button onClick={logout}>Log out</button>
            </div>):<h2>Please Log in</h2>}
        </div>

    </section>
  )
}
export default UserContainer