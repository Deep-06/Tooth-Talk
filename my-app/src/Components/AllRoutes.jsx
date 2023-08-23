import {Routes, Route} from "react-router-dom"
import Book from "../Pages/Book"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Team from "../Pages/Team"
import Contact from "../Pages/Contact"
import { PrivateRoute } from "./PrivateRoute"
import Service from "../Pages/Service"
function AllRoutes(){
    return (
        <div>
           <Routes>
               <Route path="/" element={<Home/>}/>    
               <Route path="/service" element={<Service/>}/> 
                <Route path="/team" element={<Team/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/book" 
                element={
                <PrivateRoute>  
                <Book/>
                </PrivateRoute> }/>
            <Route path="/login" element={<Login/>}/>  
            </Routes>
        </div>
    )
}

export default AllRoutes