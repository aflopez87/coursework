# Data Fetching with useEffect

Think of re-render like a refresh of the component
Readable Stream comes from the data traveling through the web

### TLDR useState vs. useEffect
- useState doesn't grab the info from an api, it's saving something: https://react.dev/learn/state-a-components-memory#anatomy-of-usestate
- useEffect is when you want to sync with an external system, like grabbing info from an api: https://react.dev/reference/react/useEffect

- useEffect is similar to the brakes of a car

### Example Code
```
import { useState, useEffect } from 'react'


function App() {
  const [data, setData] = useState(null);
  const [refetch, setRefetch] = useState(false);

  
  useEffect(() => {
    const getData = async() => {
         const response = await fetch(`https://catfact.ninja/facts`);
         const result = await response.json();
   
         console.log(result);
         setData(result.data);
       }
       getData();
  }, [])


  console.log('this is a re-render');
  return (
    <>
    <button onClick={()=>setRefetch(!refetch)}>Get new data</button>
     {
      data && (
      data.map((fact, idx) => (
        <div>{`${idx  + 1}: ${fact.fact}`}</div>
      ))
      )
     }
    </>
  )
}

export default App
```
