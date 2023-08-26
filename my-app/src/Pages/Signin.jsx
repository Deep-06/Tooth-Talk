import {Box,Button,Flex,FormControl,Input,Select} from "@chakra-ui/react"
import { useState } from "react";
import Login from "./Login";

function Signin(){
const [modalOpen, setModalOpen] = useState(false);
const handleModalOpen = ()=>{
    setModalOpen(true);
    
  }
  const handleModalClosed = ()=>{
    setModalOpen(false);
  }
    return (
        <Box w="40%" m="auto" mt={20} p={20} >
          <form>
           <FormControl>
           <Input placeholder="Name" type="text" />
           <br/>
           <br/>
           <Input placeholder="Phone no." type="number" />
           <br/>
           <br/>
           <Select placeholder='Gender'>
             <option>Female</option>
             <option>Male</option>
             <option>Others</option>
            </Select>
            <br/>
           <Input placeholder="Email" type="email" />
           <br/>
           <br/>
           <Input placeholder="Password" type="text" />
           <br/>
           <br/>
           <Flex w="40%" m="auto" gap="20px">
            <Button color="white" bgColor={"blue"}>Sign In</Button>
            <Button color="white" bgColor={"blue"} isOpen={modalOpen} onClick={handleModalOpen}>Login</Button>
            <Login/>
           </Flex> 
           </FormControl>
          </form>
    
        </Box>
    )
}

export default Signin