import {HStack, VStack,Image,Text, Heading} from "@chakra-ui/react"

function Footer(){
return (
<HStack w="100%" align='stretch' m={0} mt={5} p={20} bgColor={"cyan.100"}>
    <VStack textAlign={'left'} spacing={5} w="20%">
        <HStack>
         <Image borderRadius='80px'  boxSize='70px' src="/Image/Tooth Talk1.png"/>
         <VStack spacing={0}>
         <Text fontSize='xl' color="black" >Tooth Talk</Text>
         <Text fontSize='xl' color="black">Dental Clinic</Text>
         </VStack>
         </HStack>
         <Text fontSize='xl'>best quality treatment and patient care by professionals</Text>
         <Text fontSize='xl'>Call Center: +123 456 789</Text>
         <Text fontSize='xl'>Chat Center: +123 456 789</Text>
         <Text fontSize='xl'>Follow us on social:</Text>
         <VStack>

         </VStack>
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