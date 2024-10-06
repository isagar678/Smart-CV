import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Home,Form,PreviewPage } from "./pages"


function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/form/:rid" element={<Form/>}/>
      <Route path='/preview' element={<PreviewPage/>}/>
    </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
