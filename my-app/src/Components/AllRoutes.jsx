import {Routes, Route} from "react-router-dom"
import Book from "../Pages/Book"
import Home from "../Pages/Home"
//import Login from "../Pages/Login"
import Team from "../Pages/Team"
import Contact from "../Pages/Contact"
import { PrivateRoute } from "./PrivateRoute"
import Signin from "../Pages/Signin"

function AllRoutes(){
    return (
        <div>
           <Routes>
               <Route path="/" element={<Home/>}/>    
                <Route path="/team" element={<Team/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/book" 
                element={
                <PrivateRoute>  
                <Book/>
                </PrivateRoute> }/>
            <Route path="/signin" element={<Signin/>}/>  
            </Routes>
        </div>
    )
}

export default AllRoutes