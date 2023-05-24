import useToggle from "./useToggle";


const ToggleExample=()=>
{
  const {show,toggle} = useToggle(true);
return(
<section>
        <div>
            <h1>Toggle example from custom hooks</h1>
            <button onClick={toggle}>Toggle</button>
            {show && <h4>Show stuff</h4>}
        </div>
    </section>
)
}

export default ToggleExample;