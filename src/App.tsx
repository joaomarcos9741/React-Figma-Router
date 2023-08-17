import{ComponentFooter, ComponentHeader} from "./components"
import { PageHomes } from "./pages"


import { useState, Dispatch, SetStateAction } from 'react'


export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}


function App() {
  const [page, setPage] = useState(1)
  let component
  switch (page) {
    case 1:
      component = <PageHomes />
      break;
    case 2:
      
      break;
    default:
      component = <PageHomes />
      break;
  }

  return (
    <>
      
      
    </>
  )
}

export default App
