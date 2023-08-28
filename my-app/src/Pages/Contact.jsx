import { VStack,Grid,Text, Container,Box} from "@chakra-ui/react"
import Footer from "../Components/Footer"
import { PhoneIcon,EmailIcon } from "@chakra-ui/icons"
//import { IconButton } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebook,
   faTwitter,
   faInstagram,
   faPinterest
 } from "@fortawesome/free-brands-svg-icons";
 import { Link } from "react-router-dom"

function Contact(){
   
return (
<VStack bgColor={"pink.100"}>
 <VStack spacing={15} mt={10} p={10} pl={10} pr={10} bgGradient="linear(to-t, pink.100, cyan.100)">
     <Text fontSize='5xl'>Want to get in touch?</Text>
     <Text fontSize='5xl'>We'd love to hear from you in any of the following ways:</Text>
     <br/>
     <Grid gap={10} templateColumns="repeat(4,1fr)" justifyContent={"space-evenly"} >
       <Container fontSize='2xl' border="3px solid white" p={8} borderRadius="50px" >
         <Text color="blue">Phone <PhoneIcon/></Text>
         <br/>
         <Text>Call Center: <br/> +123 456 789</Text>
         <Text>Chat Center: <br/> +123 456 789</Text>
         <Text>Please leave a voicemail if it's urgent.</Text>
       </Container>
       <Container fontSize='2xl' border="3px solid white" p={8} borderRadius="50px">
         <Text color="blue">Email <EmailIcon boxSize={8} color="black"/></Text>
         <br/>
         <Text>Reach us at Toothtalk@dental.com, where we typically respond same-day.</Text>
       </Container>
       <Container fontSize='2xl' border="3px solid white" p={8} borderRadius="50px">
         <Text color="blue">Social Media</Text>
         <br/>
          <Grid templateColumns="repeat(2,1fr)" rowGap={10}> 
            <a href="https://www.instagram.com">
             <FontAwesomeIcon icon={faInstagram} size="2x" color="red"/>
            </a>
            <a href="https://www.facebook.com">
             <FontAwesomeIcon icon={faFacebook} size="2x" color="blue"/>
            </a>
            <a href="https://www.twitter.com">
             <FontAwesomeIcon icon={faTwitter} size="2x"color="blue" />
            </a>
            <a href="https://www.pinterest.com">
             <FontAwesomeIcon icon={faPinterest} size="2x"color="red" />
            </a>
          </Grid>
       </Container>
       <Container fontSize='2xl' border="3px solid white" p={8} borderRadius="50px">
         <Text color="blue">Online</Text>
         <br/>
         <Text>Book an appointment online, at any time,simply by clicking here.</Text>
         <br/>
         <Box bg="blue" color="white" w="100px" p={2} borderRadius="full" m="auto">
         <Link to="/book" >Book</Link>
         </Box>
       </Container>
     </Grid>
     </VStack>
   <Footer/>  
 </VStack>
 
)
}

export default Contact