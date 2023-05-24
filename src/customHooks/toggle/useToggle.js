import react,{useState} from 'react';

const useToggle=(defaultValues)=>
{
    const [show,setShow] = useState(defaultValues);
    
    const toggle=()=>
    {
        setShow(!show);
    }
    return {show,toggle};
}

export default useToggle;