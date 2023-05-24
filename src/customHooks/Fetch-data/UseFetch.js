import {useState,useEffect} from 'react';

const useFetch=(url)=>
{
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);
    const [data,setData] = useState(null);

    useEffect(()=>
    {
        const fetchData=async()=>
        {
            try{

                const resp = await fetch(url);
                if(!resp.ok)
                {
                    setIsLoading(false);
                    setIsError(true);
                }

                const response = await resp.json();
                console.log(response);
                setData(response);
            }
            catch(err)
            {
                setIsError(true);
            }

            setIsLoading(false);



        }
        fetchData();
    },[])
    return {isLoading,isError,data};
};

export default useFetch;