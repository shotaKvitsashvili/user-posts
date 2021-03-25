import { useEffect, useState } from "react";


function App() {

  const [users, setusers] = useState([])
  
  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(res => setusers(res));
  }, [])


  return (
    <div className="App">
     {
       users.map((value, index)=> {
        return <div key={index}>
          <span>{value.name}</span>
        </div>
       })
     }
    </div>
  );
}

export default App;
