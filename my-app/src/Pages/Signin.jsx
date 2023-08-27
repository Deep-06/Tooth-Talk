import {Box,Flex,FormControl,Input,Select,Text,HStack,VStack,Image} from "@chakra-ui/react"
//import { useState } from "react";
import Login from "./Login";
import axios from "axios";

function Signin(){

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Collect user input data
      const name = e.target.name.value;
      const phone = e.target.phone.value;
      const gender = e.target.gender.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      // Send user data to the server
      const response = await axios.post("https://localhost:3000/users", {
        name,
        phone,
        gender,
        email,
        password,
      });
      console.log(response.data);
    //   onLogin();
      // Clear form fields
      e.target.reset();
    } catch (error) {
      // Handle error (you might want to show an error message)
      console.error("Registration failed:", error);
    }
  };
    return (
    <Flex w="100%" bgColor={"white"}>
        <Box w="40%" m="auto" mt={20} p={20} bgGradient="linear(to-t, pink, green.400)">
        <HStack m="auto" pl={20} p={5}>
         <Image borderRadius='80px'  boxSize='60px' src="/Image/Tooth Talk1.png"/>
         <VStack spacing={0}>
         <Text as="h4" color="white" >Tooth Talk</Text>
         <Text as="h6" color="white">Dental Clinic</Text>
         </VStack>
         </HStack> 
        <Text fontSize='2xl' color='white'>LogIn</Text>
         <Login/>
        </Box>
        <Box w="50%" m="auto" mt={20} p={20} bgGradient="linear(to-t, pink, green.400)" >
          <Text fontSize='2xl' color='white'>Sign In</Text>
          <br/>
          <form onSubmit={handleSignIn}>
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
            <Input color="white" bgColor={"blue"} name='Submit' type="submit"/>
      
           </FormControl>
          </form>
    
        </Box>
   </Flex> 
    )
}

export default Signin