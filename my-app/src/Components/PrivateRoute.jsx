import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContextProvider"

function PrivateRoute(props) {
    const { isAuth } = useContext(AuthContext)
  
    if (!isAuth) {
      return <Navigate to="/login" />
    }
  
    return props.children
  }
  
  export { PrivateRoute }