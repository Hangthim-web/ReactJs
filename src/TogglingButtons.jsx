import {useState} from 'react';

const TogglingButtons=()=>
{
    const [alertValue,setAlertValue] = useState(false);
    return(
       
            <div>
                <h1>Toggling Buttons</h1>
                <button onClick={()=>setAlertValue(!alertValue)}>Toggle Alert</button>
                {alertValue && <AlertFunction/>}
            </div>
      
    )
};

const AlertFunction=()=>
{
    return(
        <div>Hello world</div>
    )
}

export default TogglingButtons;