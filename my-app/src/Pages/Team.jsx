import { VStack,Text,Grid, Container,Image} from "@chakra-ui/react"
import Footer from "../Components/Footer"

function Team(){
return (
<VStack bgGradient="linear(to-r, pink.100, cyan.100)">
   <VStack spacing={15} p={10} pl={10} pr={10} mt={10} bgGradient="linear(to-r, pink.100, green.100)">
    <Text fontSize='5xl' color="#60CEF2">Meet Our Team</Text>
    <Text fontSize='2xl' boxSize="60%">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Culpa consectetur officiis sapiente accusantium eos architecto tempore 
    necessitatibus ipsam quos repudiandae minus velit fugiat odit ea fuga 
    quam in, dolore porro?</Text>
    <VStack borderRadius='100px' border="3px solid white" p={5}>
    <Text fontSize='4xl' color="blue">Meet our Doctors</Text>
    <Text fontSize='2xl'>Our doctors deliver our full range of our services, from exams and fillings to nightguards and crowns. Over the course of your care at Studio Dental, our doctors will be your treatment plan point guards, 
    helping you understand next steps and evaluate your options.</Text>
    <br/>
    <Grid gap={10} templateColumns="repeat(3,1fr)" fontSize='2xl'>
       <Container borderRadius='50px' p={5}>
         <Image borderRadius='50px' boxSize="90%" src="https://www.edgecliffdentalcare.com.au/wp-content/uploads/2021/08/emergency_dentist_different-scaled.jpeg"/>
         <br/>
         <Text>Dr. Waluyo Sunyoto</Text>
       </Container>
       <Container borderRadius='50px' p={5}  >
         <Image borderRadius='50px' boxSize="90%" src="https://uploads-ssl.webflow.com/5e9892f4edd80981987ca210/61b90873400810292565283e_Dr-Boyer-Headshot-p-500.png"/>
         <br/>
         <Text>Dr. Sara Boyer</Text>
       </Container>
       <Container borderRadius='50px' p={5} >
         <Image borderRadius='50px' boxSize="90%" src="https://uploads-ssl.webflow.com/5e9892f4edd80981987ca210/61b90ba1d1f086d95d0fc6dc_Dr-Patel-Headshot-p-500.png"/>
         <br/>
         <Text>Dr. Jnana Patel</Text>
       </Container>
    </Grid>
    </VStack>

    <VStack borderRadius='100px' border="3px solid white" p={5}>
    <Text fontSize='4xl' color="blue">Meet our Assistants</Text>
    <Text fontSize='2xl'>Our assistants work with our doctors, hygienists, and operators to make sure each part of your Studio Dental experience is seamless 
    and delightful. They work alongside our other clinicians to deliver complex services and help keep our clinic operations humming.</Text>
    <br/>
    <Grid gap={10} templateColumns="repeat(3,1fr)" fontSize='2xl'>
       <Container borderRadius='50px' p={5}>
         <Image borderRadius='50px' boxSize="90%" src="https://uploads-ssl.webflow.com/5e9892f4edd80981987ca210/61ba0ee0b89ab66c0c0a8007_Byanca-Headshot-p-500.png"/>
         <br/>
         <Text>Dr. Waluyo Sunyoto</Text>
       </Container>
       <Container borderRadius='50px' p={5}  >
         <Image borderRadius='50px' boxSize="90%" src="https://uploads-ssl.webflow.com/5e9892f4edd80981987ca210/61ba0f052b87001c4b7177fc_Yadira-Headshot-p-500.png"/>
         <br/>
         <Text>Dr. Sara Boyer</Text>
       </Container>
       <Container borderRadius='50px' p={5} >
         <Image borderRadius='50px' boxSize="90%" src="https://uploads-ssl.webflow.com/5e9892f4edd80981987ca210/61ba0f19b89ab605af0a811f_April-Headshot-p-500.png"/>
         <br/>
         <Text>Dr. Jnana Patel</Text>
       </Container>
    </Grid>
    </VStack>

    <VStack borderRadius='100px' border="3px solid white" p={5}>
    <Text fontSize='4xl' color="blue">Meet our Operators</Text>
    <Text fontSize='2xl'>Our operators work with our clinicians to make every step of your care as effortless as possible. They'll work with you in-person and remotely to help you coordinate your treatment, your insurance, 
     and the other details you might need to help take care of your teeth.</Text>
    <br/>
    <Grid gap={10} templateColumns="repeat(3,1fr)" fontSize='2xl'>
       <Container borderRadius='50px' p={5}>
         <Image borderRadius='50px' boxSize="90%" src="https://uploads-ssl.webflow.com/5e9892f4edd80981987ca210/61ba110e1d50ca2c9704a62b_Mery-Headshot-p-500.png"/>
         <br/>
         <Text>Dr. Waluyo Sunyoto</Text>
       </Container>
       <Container borderRadius='50px' p={5}  >
         <Image borderRadius='50px' boxSize="90%" src="https://uploads-ssl.webflow.com/5e9892f4edd80981987ca210/61d8603a07d35377bca2366a_Bea-Headshot-p-500.png"/>
         <br/>
         <Text>Dr. Sara Boyer</Text>
       </Container>
       <Container borderRadius='50px' p={5} >
         <Image borderRadius='50px' boxSize="90%" src="https://uploads-ssl.webflow.com/5e9892f4edd80981987ca210/61d8604bf1a43db8fae5accf_Valene-Headshot-p-500.png"/>
         <br/>
         <Text>Dr. Jnana Patel</Text>
       </Container>
       <Container borderRadius='50px' p={5}  >
         <Image borderRadius='50px' boxSize="90%" src="https://uploads-ssl.webflow.com/5e9892f4edd80981987ca210/64dfc7e26321200c4c8fb082_Jackie-Headshot-p-500.jpeg"/>
         <br/>
         <Text>Dr. Sara Boyer</Text>
       </Container>
       <Container borderRadius='50px' p={5} >
         <Image borderRadius='50px' boxSize="90%" src="https://uploads-ssl.webflow.com/5e9892f4edd80981987ca210/64dfc8c57f8afcf1eef64f88_Luke-Headshot-2-p-500.jpg"/>
         <br/>
         <Text>Dr. Jnana Patel</Text>
       </Container>
    </Grid>
    </VStack>
   </VStack>
  <Footer/>
</VStack>
)
}

export default Team