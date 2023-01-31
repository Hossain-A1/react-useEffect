import { useEffect, useState } from "react";

const User = () => {
  const [users, setUser] = useState([]);
  const [error,setError] = useState('')
  const [isLoading,setIsLoading]= useState(true)
  const fetchUser = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if(!res.ok) throw new Error('something went wrong')
    return res.json()})
    .then((data) => {
      setUser(data);
      setIsLoading(false)
    })
    .catch((error) => {
      setError(error.message)
      setIsLoading(false)
    });
  }

  

  useEffect(() => {
    fetchUser()
  }, []);

  return (

    <div>
      <h1>hello</h1>

    {
      isLoading ? <p>Loading..............</p> : null
    }

      {
        error ? <p>{error}</p> :    users.map(user=>{
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        })
      }
   
    </div>

  )

};

export default User;
