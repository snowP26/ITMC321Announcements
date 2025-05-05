import { Box } from "@chakra-ui/react"
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import EmailCreate from "./pages/EmailCreate";
import SocialCreate from "./pages/SocialCreate";
import Selection from "./pages/Selection";
import Approval from "./pages/Approval";

function App() {
  

  return(
    <Box minH='100vh' flexDirection={'column'}>
      <Routes>
        <Route path='/' element={ <Selection />} />
        <Route path='/EmailCreate' element={ <EmailCreate />} />
        <Route path='/SocialCreate' element={ <SocialCreate />} />
        <Route path='/Approval' element={ <Approval />} />
      </Routes>
    </Box>
  )
}

export default App
