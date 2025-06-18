import { useState } from "react";
import Home from `./components/Home`
import About from `./components/About`

function App () {
const [page, setPage] = useState();
return (
    <>
    <nav>
        <a >Home</a>
        <a>About</a>
    </nav>
    {page === "home" ? 
        <Home/>
        : 
        <About/>
    }
    </>
)

}

export default App