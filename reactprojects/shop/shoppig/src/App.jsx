
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Products from './components/Products'
import React from 'react'
import{ BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom' 
import Productlist from './components/Productlist'
import Productdetails from './components/Productdetails'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar'
import NotFound from './components/NotFound'
import NewProducts from './components/NewProducts'


function App() {
  

  return (
    <div className="App">
   
     <Router>
      
      <NavBar/>
     
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/products' element={<Products/>}>
        <Route index element={<Productlist/>}/>
        <Route path='list' element={<Productlist/>}/>
        <Route path='details' element={<Productdetails/>}/>
        </Route>
        <Route path='/newProduct' element={<NewProducts/>}/>
        <Route  path='*' element={<NotFound/>}/>

        {/* Add more routes as needed */}
      </Routes>
     </Router>
    </div>
  )
}

export default App
