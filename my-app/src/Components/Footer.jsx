import {HStack, VStack,Image,Text, Heading} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebook,
   faTwitter,
   faInstagram,
   faPinterest
 } from "@fortawesome/free-brands-svg-icons";
 //import { Link } from "react-router-dom"
function Footer(){
return (
<HStack w="100%" align='stretch' m={0} mt={5} p={20} bgColor={"cyan.100"}>
    <VStack text-align="left" gap='10px' w="20%">
        <HStack>
         <Image borderRadius='80px'  boxSize='70px' src="/Image/Tooth Talk1.png"/>
         <VStack spacing={0}>
         <Text fontSize='xl' color="black" >Tooth Talk</Text>
         <Text fontSize='xl' color="black">Dental Clinic</Text>
         </VStack>
         </HStack>
         <Text fontSize='xl'>Best quality treatment and patient care by professionals</Text>
         <Text fontSize='xl'>Call Center: +123 456 789</Text>
         <Text fontSize='xl'>Chat Center: +123 456 789</Text>
         <Text fontSize='xl'>Follow us on social:</Text>
         <HStack spacing={6}>
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
         </HStack>
    </VStack>
    <VStack textAlign={'left'} spacing={5} w="20%">
        <Heading fontSize='2xl' color="#60CEF2">About Us</Heading>
        <Text fontSize='2xl'>About</Text>
        <Text fontSize='2xl'>Blog</Text>
        <Text fontSize='2xl'>Carrers</Text>
        <Text fontSize='2xl'>Press</Text>
        <Text fontSize='2xl'>Contact Us</Text>
    </VStack>
    <VStack textAlign={'left'} spacing={5} w="20%">
        <Heading fontSize='2xl' color="#60CEF2">Treatment</Heading>
        <Text fontSize='2xl'>Prosthetic</Text>
        <Text fontSize='2xl'>Scaling</Text>
        <Text fontSize='2xl'>Orthodontics</Text>
        <Text fontSize='2xl'>Endodontics</Text>
        <Text fontSize='2xl'>Maxillofacial</Text>  
    </VStack>
    <VStack textAlign={'left'} spacing={5} w="20%">
        <Heading fontSize='2xl' color="#60CEF2">Location</Heading>
        <Text fontSize='2xl'>Tooth Talk-Palembang</Text>
        <Text fontSize='2xl'>Tooth Talk-Lubuklinggau</Text>
        <Text fontSize='2xl'>Tooth Talk-Sekayu</Text>
        <Text fontSize='2xl'>Tooth Talk-Pagaralam</Text>
        <Text fontSize='2xl'>Tooth Talk-OKU</Text>
    </VStack>
    <VStack textAlign={'left'} spacing={5} w="20%">
        <Heading fontSize='2xl' color="#60CEF2">More</Heading>
        <Text fontSize='2xl'>Help</Text>
        <Text fontSize='2xl'>Developers</Text>
        <Text fontSize='2xl'>Privacy Policy</Text>
        <Text fontSize='2xl'>Terms & Condition</Text>
        <Text fontSize='2xl'>Healthcare Directory</Text>
    </VStack>
</HStack>
)
}

export default Footer