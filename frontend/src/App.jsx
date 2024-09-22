import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Form from "./pages/Form"
// import LiveResume from "./components/LiveResume"
function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/form/:rid" element={<Form/>}/>
      {/* <Route path='/resume/:rid' element={<LiveResume/>}/> */}
    </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
