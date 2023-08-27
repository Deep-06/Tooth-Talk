import {
    FormControl,
    FormLabel,
    Input,
    Container,
  } from '@chakra-ui/react'
   import axios from "axios";
  import { useToast } from "@chakra-ui/react";
  import {useState} from "react";
 //import { AuthContext } from '../Context/AuthContextProvider';

function Login({ onClose, isOpen }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const toast = useToast();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get("https://localhost:3000/login", {
            email,
            password,
          });
    
          if (response.status === 200) {
            showToast("Login Successful", "success");
           
          } else {
            showToast("Login Failed", "error");
          }
        } catch (error) {
          showToast("Login Failed", "error");
        }
      };
  
    const showToast = (title, status) => {
      toast({
        title: title,
        status: status,
        duration: 3000,
        isClosable: true,
      });
    };
    return (
        <Container>
          
              <form onSubmit={handleFormSubmit}>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Email" 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Password" 
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    <br/>
                    <br/>
                  <Input type='submit' name='Submit' color="white" bgColor={"blue"}/>
                  
                </FormControl>
              </form>
            
        </Container>
      );  
}

export default Login