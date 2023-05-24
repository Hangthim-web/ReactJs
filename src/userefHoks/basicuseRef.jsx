import {useRef} from 'react';

const BasicUseRef=()=>
{
    const useRefVar = useRef("hey");
    const handleSubmit=()=>
    {

         console.log(useRefVar.current.value);
         useRefVar.current.value = 'new value';
         useRefVar.current.focus();
    }
    return(
        <section>
            <h1>Use Ref</h1>
              <input type="text" className=" border-2 border-slate-700" ref={useRefVar}/>
              <button onClick={handleSubmit}>Submit</button>

        </section>
    )
};
export default BasicUseRef;