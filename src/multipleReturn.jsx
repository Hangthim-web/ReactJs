import {useEffect, useState} from 'react';

const MultipleReturn = () => {

    const [isLoading,setLoading] = useState(true);
 
    useEffect(()=>
    {
 setTimeout(() => {
   setLoading(!isLoading);
 }, 2000);
    },[])
   
    if(isLoading)
    {
        return <h2>Loading...</h2>
    }
    return <h2>Hello modafukcas</h2>
}
export default MultipleReturn