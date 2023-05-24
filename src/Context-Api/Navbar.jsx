import {useState} from 'react';
import {useContext} from 'react';
import {createContext} from 'react';
import NavLinks from './NavLinks';

export const NewContext = createContext();

export const UseContextApp =()=> useContext(NewContext);

const Navbar=()=>
{
    const [user,setUser] = useState("joHn doe");
    const logout=()=>
    {
        setUser(null);
    }

    return (
        <section>
            <div>
                 <NewContext.Provider value={{user,logout}}>
                    <nav>

                        <h1>Context API</h1>
                    </nav>
                        
            <NavLinks/>
                    
                 </NewContext.Provider>
            </div>
        </section>
    )
};
export default Navbar;