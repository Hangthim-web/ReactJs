import useFetch from "./UseFetch";
const url = "https://api.github.com/users/QuincyLarson";



const FetchData = () => {

const {isLoading,isError,data:user} = useFetch(url);

if(isLoading)
{
    return  <h1>...isLoading</h1>
}
if(isError)
{
return <h1>...Error</h1>
}


const {avatar_url,bio,blog,company,id} = user;
return (
      <section>
        <div key={id}>
            <img src={avatar_url} alt={bio} />
            <h1>{blog}</h1>
            <h2>{company}</h2>
            {/* <h3>{following_url}</h3> */}
            <p>{bio}</p>
        </div>
      </section>
  )
}
export default FetchData
