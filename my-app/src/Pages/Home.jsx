import {Container, HStack, Text,Spacer,Grid, GridItem,Box,
 VStack,Image, SimpleGrid} from "@chakra-ui/react"
import {StarIcon,EmailIcon} from "@chakra-ui/icons"
import Service from "./Service"
import Footer from "../Components/Footer"
import { Link } from "react-router-dom"
function Home(){
return (
<VStack align='stretch' w='100%'>
{/* #ECF7FC */}
 <HStack spacing={15} p={10} pl={10} pr={10} mt={10}
    bgGradient="linear(to-t, white, cyan.100)" display={{ md: "flex" }}>

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
     <Box bg="blue" p={5} borderRadius="full" color="white" >
     <Link to='/book'  >Make an Appointment</Link>
     </Box>
    </VStack>
  </Container>

  <Container w="40%" h="550px" borderRadius='300px 10px 300px 300px' 
   border="10px solid lightblue" boxShadow='dark-lg'>
  <Image boxSize='100%' borderRadius='300px 10px 300px 300px'
   src="/Image/image.jpg"/>
  </Container>
 </HStack>

  <Grid spacing={4} m={20} pl={5} pr={5} display="grid" templateColumns="repeat(5,1fr)">
    <Image boxSize='50%' src="/Image/AXA.jpg"/>
    <Image boxSize='50%' src="/Image/AIG.png"/>
    <Image boxSize='50%' src="/Image/Farmers.png"/>
    <Image boxSize='50%' src="/Image/hudson.jpg"/>
    <Image boxSize='50%' src="/Image/SAP.png"/>
  </Grid>

   <HStack spacing={15} m={0} p={10} pl={10} pr={10} bgGradient="linear(to-r, white, cyan.100)" display={{ md: "flex" }}>
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

  <Service/>  
  
  <HStack spacing={15} m={0} p={10} pl={10} pr={10} bgColor={"cyan.100"} display={{ md: "flex" }}>
    <Container w="50%" h="500px" borderRadius='30px 300px 300px 30px'
       border="20px solid whitesmoke" boxShadow='2xl'>
      <Image w="100%" boxSize="100%" borderRadius='30px 300px 300px 30px' src="https://www.edgecliffdentalcare.com.au/wp-content/uploads/2021/08/emergency_dentist_different-scaled.jpeg"/>
    </Container>

    <VStack w="50%" pl={10} pr={10} textAlign={'left'} spacing={5}>
      <Text fontSize='2xl' color="#60CEF2" textAlign={'left'}>-OUR DOCTORS</Text>
      <Text fontSize='6xl' textAlign={'left'}>Qualified Doctors 👩🏽‍⚕️</Text>
      <Text w="90%"  fontSize='2xl'>Handled directly by general dentists and professional and experienced specialists.</Text>
      <Container w="80%" p={10} border="15px solid whitesmoke" bgColor={"blue.600"} borderRadius='0px 50px 50px 50px'>
        <Text fontSize='2xl'>Dentist - Orthopedist</Text>
        <Text fontSize='6xl'>Dr. Waluyo Sunyoto, M.Sc.</Text>
      </Container>
      <Box bg="blue" color="white" p={5} borderRadius="full">
      <Link to='/team' >View All Doctors</Link>
      </Box>
      
    </VStack>
  </HStack>

  <VStack spacing={4} m={0} p={10} pl={10} pr={10}>
    <Text fontSize='2xl' color="#60CEF2">-FOR YOU</Text>
    <Text fontSize='6xl'>Tips, News & Promos 🤩</Text>
    <SimpleGrid templateColumns='repeat(3, 1fr)' gap={10}>
      <GridItem w="90%">
        <Container bgImage={"https://www.dentistrytoday.com/wp-content/uploads/2020/02/040929985887bfa1c73d5df0675434d9.jpg"} 
         h="280px" borderRadius='280px 10px 280px 280px' border="5px solid black">
           <Container fontSize='xl' p={1}  w="35%" bgColor={"blue.400"} borderRadius="20px" 
            color="white" border="2px solid white">PROMO</Container>
        </Container>
        <br/>
        <VStack w="100%" spacing={4} p={5} border="2px solid cyan" boxShadow='dark-lg'>
          <Text fontSize='3xl'>August special <br/>Disc. up to 80%</Text>
          <Text fontSize='2xl'>Hi friends, this August there are a lot of treatment promos at our clinic, let's hurry up, don't miss it and make an appointment....</Text>
          <Text fontSize='2xl'>Read more</Text>
        </VStack>
      </GridItem>

      <GridItem w="100%" >
      <Container bgImage={"https://www.dentistrytoday.com/wp-content/uploads/2020/02/040929985887bfa1c73d5df0675434d9.jpg"} 
         h="280px" borderRadius='280px 10px 280px 280px' border="5px solid black">
           <Container fontSize='xl' p={1}  w="35%" bgColor={"blue.400"} borderRadius="20px" 
            color="white" border="2px solid white">NEWS</Container>
        </Container>
        <Spacer/>
        <br/>
        <VStack w="100%" spacing={4} p={5} border="2px solid cyan" boxShadow='dark-lg'>
          <Text fontSize='3xl'>7 Hazards of <br/>dental lots if left</Text>
          <Text fontSize='2xl'>The cause of cavities is mainly due to germs and bacteria that cause cavities. Tooth decay, as trivial as it sounds....</Text>
          <Text fontSize='2xl'>Read more</Text>
        </VStack>
      </GridItem>

      <GridItem w="90%">
      <Container bgImage={"https://www.dentistrytoday.com/wp-content/uploads/2020/02/040929985887bfa1c73d5df0675434d9.jpg"} 
         h="280px" borderRadius='280px 10px 280px 280px' border="5px solid black">
           <Container fontSize='xl' p={1}  w="35%" bgColor={"blue.400"} borderRadius="20px" 
            color="white" border="2px solid white">PROMO</Container>
        </Container>
        <br/>
        <VStack w="100%" spacing={4} p={5} border="2px solid cyan" boxShadow='dark-lg'>
          <Text fontSize='3xl'>PROMO OF THE<br/> WEEK</Text>
          <Text fontSize='2xl'>Tooth Talk provides a promo of the week which is valid on 22-30 August 2023. Promos for fillings, tooth extraction...</Text>
          <Text fontSize='2xl'>Read more</Text>
        </VStack>
      </GridItem> 
   </SimpleGrid>
  </VStack>

  <HStack color="white" spacing={10} w="80%" margin="auto" p={4} border="20px solid lightcyan" boxShadow='2xl' bgColor={"blue.400"} borderRadius='50px'>
    <VStack w="70%">
      <Text fontSize="2xl">-Appointment ⚡</Text>
      <HStack>
        <Text fontSize="4xl">Want to make an appointment easily?</Text>
        <EmailIcon h={10} w={10}/>
      </HStack>
    </VStack>
    <Box fontSize="2xl" p={5} borderRadius='50px'color={"blue.400"} bgColor={"cyan.100"}>
    <Link to='/contact'>Contact Here</Link>
    </Box>
    
  </HStack>
  <Footer/>
</VStack>
)
}

export default Home

// objectFit='cover'