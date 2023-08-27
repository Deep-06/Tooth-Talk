import {VStack,Text, Container,Flex,FormControl,Input, 
Image,Select} from "@chakra-ui/react"
import { useState } from "react";
import Footer from "../Components/Footer"
import FormData from "./FormData";

const initialState={
    firstname:"",
    lastname:"",
    email:"",
    gender:"",
    date:"",
    time:"",
}
function Book(){
const [form,setForm] = useState(initialState);
const [isSubmitted, setIsSubmitted] = useState(false);

const handlechange=(e)=>{
 
    const value=e.target.value
     setForm({
      ...form, [e.target.name]: value
     })
}

const handleSubmit=(e)=>{
 e.preventDefault();
 setIsSubmitted(true);
}
return (
<VStack bgGradient="linear(to-t, pink.100, cyan.100)" p={5} >
   <VStack mt={10}>
    <Text fontSize='4xl'>Welcome to Our New Online Booking Experience.</Text>
    <Text fontSize='4xl'>To book an appointment, first let us know if you've visited before.</Text>
    <Flex w="100%" display="flex" justifyContent={"space-between"}>
    <Container w="40%" m="auto">
    <VStack>
         <Image borderRadius='80px'  boxSize='100px' src="/Image/Tooth Talk1.png"/>
         <VStack spacing={0}>
         <Text fontSize='2xl' color="black" >Tooth Talk</Text>
         <Text fontSize='2xl' color="black">Dental Clinic</Text>
         </VStack>
         </VStack>
    </Container>

    <VStack w="60%" m={"auto"} p={5}>
    <Container bgColor={"white"} p={10} borderRadius='50px'>
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Input type="text" placeholder='First name' name="firstname"
        value={form.firstname} onChange={handlechange}/>
        <br/>
        <br/>
        <Input type="text" placeholder='Last name' name="lastname"
            value={form.lastname} onChange={handlechange}/>
            <br/>
        <br/>
        <Input type="email" placeholder='Email' name="email"
            value={form.email} onChange={handlechange}/>
            <br/>
        <br/>
        <Input type="date" placeholder='Date of Birth' />
        <br/>
        <br/>
        <Input type="number" placeholder='Mobile Number' />
        <br/>
        <br/>
        <Select placeholder='Gender' name="gender" value={form.gender} onChange={handlechange}>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Others">Others</option>
        </Select>
        <br/>
        <br/>
        <Input type="date" placeholder='Appointment Date' name="date"
            value={form.date} onChange={handlechange}/>
            <br/>
        <br/>
        <Input type="text" placeholder='Appointment Time' name="time"
            value={form.time} onChange={handlechange}/>
            <br/>
            <br/>
        <Input type="submit" name="Submit" color="white" bgColor={"blue"}/>
      </FormControl>
    </form>
    </Container>
    {isSubmitted && 
        <Container bgColor={"white"} p={10} borderRadius='50px' fontSize={"20px"} textAlign={"left"}>
    <Text fontSize='2xl'>Your Appointment Details-</Text>
    {isSubmitted && <FormData  {...form}/>}
    </Container>
    }
    
    </VStack>

    </Flex>
   </VStack>  
<Footer/>
</VStack>    
        
        
)
}

export default Book