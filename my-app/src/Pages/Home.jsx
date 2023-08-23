import {Container, HStack, Text,Spacer,
 VStack,Image, Button} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
function Home(){
return (
<VStack align='stretch'>
{/* #ECF7FC */}
 <HStack spacing={15} p={10} pl={10} pr={10} h="600px"
    bgGradient="linear(to-t, white, cyan.100)">

  <Container w="50%">
    <VStack spacing={2}>
     <Text fontSize='2xl' color="#60CEF2">-SHINE YOUR SMILE WITH US</Text>  
     <Text fontSize='6xl'>Your Reason To Smile
       <StarIcon h={10} w={10} color="yellow" />
     </Text>
     <Text fontSize='2xl' >
       Tooth Talk Clinic is a professional dental clinic that includes
       General, Cosmetic, Aesthetic, and Emergency Dentistry for You and
       your family with a team of professional dentists at friendly prices.
     </Text>
     <Spacer></Spacer>
     <Button bg="blue" color="white" p={7} borderRadius="full"
     >Make an Appointment</Button>
    </VStack>
  </Container>

  <Container w="50%" h="100%" borderRadius='300px 10px 300px 300px' 
   border="10px solid lightblue" boxShadow='dark-lg'>
  <Image boxSize='100%' borderRadius='280px 10px 280px 280px'
   src="/Image/image.jpg"/>
  </Container>
 </HStack>

  <HStack spacing={100} m={20} pl={10} pr={10}>
    <Image boxSize='15%' src="/Image/AXA.jpg"/>
    <Image boxSize='12%' src="/Image/AIG.png"/>
    <Image boxSize='12%' src="/Image/Farmers.png"/>
    <Image boxSize='17%' src="/Image/hudson.jpg"/>
    <Image boxSize='10%' src="/Image/SAP.png"/>
  </HStack>

   <HStack spacing={15} p={10} pl={10} pr={10} bgGradient="linear(to-r, white, cyan.100)">
     <Container w="50%" borderRadius='30px 30px 300px 300px'
       border="10px solid lightblue" boxShadow='2xl'>
      <Image w="100%" borderRadius='30px 30px 300px 300px' src="/Image/dentist1.png"/>
     </Container>

     <VStack w="50%" textAlign={'left'} spacing={5}>
       <Text fontSize='2xl' color="#60CEF2" textAlign={'left'}>- CHOOSE US?</Text>
       <Text fontSize='6xl' textAlign={'left'}>Why Tooth Talk?🤔</Text>
       <Text fontSize='2xl'>Handled directly by general dentists and professional and experienced specialists.
         As well as cooperating with various insurances for the convenience of payment.</Text>
       <HStack spacing={4}>
         <Image boxSize='15%' borderRadius="full"  
         src="/Image/dental.jpg"/>
          <Text fontSize='2xl'>Professional dental care of the highest standards in a Comfortable and Relaxed environment.</Text>
       </HStack>
       <HStack spacing={4}>
         <Image boxSize='15%' borderRadius="full"  
         src="/Image/dental.jpg"/>
         <Text fontSize='2xl'>We utilize Up to date dental technologies and techniques to help you achieve a
          smile that you can be proud of.</Text>
       </HStack>
       <HStack spacing={4}>
         <Image boxSize='15%' borderRadius="full"  
         src="/Image/dental.jpg"/>
         <Text fontSize='2xl'>Provides On-Site oral health care services to Schools, Corporate, and Senior home We bring the dentist to you!</Text>
       </HStack>
      </VStack>
    </HStack>

</VStack>
)
}

export default Home

// objectFit='cover'