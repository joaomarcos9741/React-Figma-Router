import { GlobalStyle } from "./styles/GlobalStyle"
import{ComponentFooter, ComponentHeader} from "./components"
import { PageHomes } from "./pages"


import { useState, Dispatch, SetStateAction } from 'react'


export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}


function App() {

  return (
    <>
      <ComponentHeader/>
      <PageHomes/>
      <ComponentFooter/>
      <GlobalStyle/>
    </>
    

  )
}

export default App
