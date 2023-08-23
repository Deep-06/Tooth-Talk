import {  NavLink } from "react-router-dom"
import {HStack, Image,Spacer,Text, VStack} from "@chakra-ui/react";


const links=[
    {text:"Home", path:"/"},
    {text:"Services", path:"/service"},
    {text:"Team", path:"/team"},
    {text:"Contact", path:"/contact"},
    {text:"Book", path:"/book"},
    {text:"Login", path:"/login"},   
]
export default function Navbar(){
    return(
        
        <HStack spacing='80px' pl={6} pr={6} bg="grey">
        <HStack>
         <Image borderRadius='80px'  boxSize='50px' src="/Image/Tooth Talk1.png"/>
         <VStack spacing={0}>
         <Text as="h4" color="white" >Tooth Talk</Text>
         <Text as="h6" color="white">Dental Clinic</Text>
         </VStack>
         </HStack> 
         <Spacer/>
          {links.map(({ text, path }) => (
        <NavLink
          key={path}
          to={path}
          style={({ isActive }) => {
            return isActive ? {color:"yellow" }: {color:"white" }
          }}>
          {text}
        </NavLink>
      ))} 
      </HStack>
        
    )
}