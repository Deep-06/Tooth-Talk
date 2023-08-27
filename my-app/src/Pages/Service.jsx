import { HStack, Text,VStack,Image,Flex,Heading,Button} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
//import Footer from "../Components/Footer"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'
import {ViewIcon} from "@chakra-ui/icons"
function Service(){
return (
<VStack>
    <HStack spacing={15} m={0} p={10} pl={10} pr={10} bgGradient="linear(to-l, white, cyan.100)">
    <VStack w="50%" textAlign={'left'} spacing={5}>
      <Text fontSize='2xl' color="#60CEF2" textAlign={'left'}>-OUR SERVE & TESTIMONIAL</Text>
      <Text fontSize='6xl' textAlign={'left'}>Reviews 😍</Text>
      <Text w="80%" fontSize='2xl'>Do you have dental problems and are confused about what treatment to treat? Check out the dental treatments at the Clinic 
      and see reviews from our patients.</Text>
      <HStack ml="10%" spacing={5} >
         <Image w="12%" borderRadius='30px 30px 300px 300px' border="3px solid lightblue" 
         src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
         <Image w="12%" borderRadius='30px 30px 300px 300px' border="3px solid lightblue" 
         src="https://qph.cf2.quoracdn.net/main-qimg-6a031007dbec344c02c39a951ffd4066-lq"/>
         <Image w="14%" borderRadius='30px 30px 300px 300px' border="3px solid lightblue"
         src="https://i.pinimg.com/564x/91/53/fd/9153fdf642fa8c7226373799cc7df9b4.jpg"/>
         <Image w="12%" borderRadius='30px 30px 300px 300px' border="3px solid lightblue" 
         src="https://images.unsplash.com/photo-1590541490155-0e1853825612?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"/>
         <Image w="15%" borderRadius='30px 30px 300px 300px' border="3px solid lightblue" 
         src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="/>
      </HStack>
      
      <HStack spacing={10} w='60%' m={0} p={0}>
      <Popover>
         <PopoverTrigger>
          <Button borderRadius='full' bgColor={"blue"} fontSize='2xl' color='white' w="60%"><ViewIcon/></Button>
          </PopoverTrigger>
          <PopoverContent bg='cyan.100' p={2} w='20%' border="2px solid white">
          <PopoverArrow />
          <PopoverHeader>
          <Flex gap={4}>
          <Image w="15%" borderRadius='30px 30px 300px 300px' border="3px solid lightblue" 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
          <VStack>
            <Heading fontSize='2xl' color="#60CEF2">Neneng Sumini</Heading>
            <Text>Selebgram</Text>
            <HStack>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            </HStack>
          </VStack>
        </Flex>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody fontSize='2xl'>"Usually going to the doctor is scary, but here the relaxed atmosphere is always good, 
         even though it's natural to have a little pain because it's the first time. It's just fun, 
         so I'm not afraid to go to the dentist anymore"</PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
         <PopoverTrigger>
          <Button borderRadius='full' bgColor={"blue"} fontSize='2xl' color='white' w="60%"><ViewIcon/></Button>
          </PopoverTrigger>
          <PopoverContent bg='cyan.100' p={2} w='20%' border="2px solid white">
          <PopoverArrow />
          <PopoverHeader>
          <Flex gap={4}>
          <Image w="15%" borderRadius='30px 30px 300px 300px' border="3px solid lightblue" 
            src="https://qph.cf2.quoracdn.net/main-qimg-6a031007dbec344c02c39a951ffd4066-lq"/>
          <VStack>
            <Heading fontSize='2xl' color="#60CEF2">Rishi</Heading>
            <Text>Delhi</Text>
            <HStack>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            </HStack>
          </VStack>
        </Flex>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody fontSize='2xl'>"Usually going to the doctor is scary, but here the relaxed atmosphere is always good, 
         even though it's natural to have a little pain because it's the first time. It's just fun, 
         so I'm not afraid to go to the dentist anymore"</PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
         <PopoverTrigger>
          <Button borderRadius='full' bgColor={"blue"} fontSize='2xl' color='white' w="60%"><ViewIcon/></Button>
          </PopoverTrigger>
          <PopoverContent bg='cyan.100' p={2} w='20%' border="2px solid white">
          <PopoverArrow />
          <PopoverHeader>
          <Flex gap={4}>
          <Image w="15%" borderRadius='30px 30px 300px 300px' border="3px solid lightblue" 
            src="https://i.pinimg.com/564x/91/53/fd/9153fdf642fa8c7226373799cc7df9b4.jpg"/>      
          <VStack>
            <Heading fontSize='2xl' color="#60CEF2">Aditya Raj</Heading>
            <Text>Kolkata</Text>
            <HStack>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            </HStack>
          </VStack>
        </Flex>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody fontSize='2xl'>"Usually going to the doctor is scary, but here the relaxed atmosphere is always good, 
         even though it's natural to have a little pain because it's the first time. It's just fun, 
         so I'm not afraid to go to the dentist anymore"</PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
         <PopoverTrigger>
          <Button borderRadius='full'  bgColor={"blue"} fontSize='2xl' color='white' w="60%"><ViewIcon/></Button>
          </PopoverTrigger>
          <PopoverContent bg='cyan.100' p={2} w='20%' border="2px solid white">
          <PopoverArrow />
          <PopoverHeader>
          <Flex gap={4}>
          <Image w="15%" borderRadius='30px 30px 300px 300px' border="3px solid lightblue" 
         src="https://images.unsplash.com/photo-1590541490155-0e1853825612?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"/>
          <VStack>
            <Heading fontSize='2xl' color="#60CEF2">Anu</Heading>
            <Text>Patna</Text>
            <HStack>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            </HStack>
          </VStack>
        </Flex>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody fontSize='2xl'>"Usually going to the doctor is scary, but here the relaxed atmosphere is always good, 
         even though it's natural to have a little pain because it's the first time. It's just fun, 
         so I'm not afraid to go to the dentist anymore"</PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
         <PopoverTrigger>
          <Button borderRadius='full' bgColor={"blue"} fontSize='2xl' color='white' w="60%"><ViewIcon/></Button>
          </PopoverTrigger>
          <PopoverContent bg='cyan.100' p={2} w='20%' border="2px solid white">
          <PopoverArrow />
          <PopoverHeader>
          <Flex gap={4}>
          <Image w="15%" borderRadius='30px 30px 300px 300px' border="3px solid lightblue" 
         src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="/>
          <VStack>
            <Heading fontSize='2xl' color="#60CEF2">Ashutosh Kumar</Heading>
            <Text>Delhi</Text>
            <HStack>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            <StarIcon color="#60CEF2"/>
            </HStack>
          </VStack>
        </Flex>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody fontSize='2xl'>"Usually going to the doctor is scary, but here the relaxed atmosphere is always good, 
         even though it's natural to have a little pain because it's the first time. It's just fun, 
         so I'm not afraid to go to the dentist anymore"</PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
      
      <HStack>

      </HStack>
    </VStack>

    <VStack w="50%" borderRadius='30px 30px 300px 30px' spacing={10} p={10}
       border="10px solid lightblue" boxShadow='2xl' bgColor={"blue"}>
       <Text fontSize='6xl' color='white'>Our Services 🤗</Text>
      <HStack>
        <Image boxSize='10%' borderRadius="full" src='https://i.pinimg.com/564x/ac/04/33/ac0433ef8ae9ab0f778cf10a11d1fb1a.jpg'/>
        <Popover w='70%' >
         <PopoverTrigger>
          <Button bgColor={"blue"} fontSize='2xl' color='white' w="60%">Prosthetic</Button>
          </PopoverTrigger>
          <PopoverContent bg='white' p={2} >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloremque non fugiat, voluptates nisi repudiandae autem quo, earum ullam rem quidem voluptatem laborum. 
          Ipsum incidunt aperiam tempora quia ullam iusto neque?</PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
      
      <HStack>
        <Image boxSize='10%' borderRadius="full" src='https://i.pinimg.com/564x/ac/04/33/ac0433ef8ae9ab0f778cf10a11d1fb1a.jpg'/>
        <Popover w='70%'>
         <PopoverTrigger>
          <Button bgColor={"blue"} fontSize='2xl' color='white' w="60%">Scaling  </Button>
          </PopoverTrigger>
          <PopoverContent bg='white' p={2}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloremque non fugiat, voluptates nisi repudiandae autem quo, earum ullam rem quidem voluptatem laborum. 
          Ipsum incidunt aperiam tempora quia ullam iusto neque?</PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>

      <HStack>
        <Image boxSize='10%' borderRadius="full" src='https://i.pinimg.com/564x/ac/04/33/ac0433ef8ae9ab0f778cf10a11d1fb1a.jpg'/>
        <Popover w='70%'>
         <PopoverTrigger>
          <Button bgColor={"blue"} fontSize='2xl' color='white' w="60%">Orthodontics</Button>
          </PopoverTrigger>
          <PopoverContent bg='white' p={2}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloremque non fugiat, voluptates nisi repudiandae autem quo, earum ullam rem quidem voluptatem laborum. 
          Ipsum incidunt aperiam tempora quia ullam iusto neque?</PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>

      <HStack>
        <Image boxSize='10%' borderRadius="full" src='https://i.pinimg.com/564x/ac/04/33/ac0433ef8ae9ab0f778cf10a11d1fb1a.jpg'/>
        <Popover w='70%'>
         <PopoverTrigger>
          <Button bgColor={"blue"} fontSize='2xl' color='white' w="60%">Endodontics</Button>
          </PopoverTrigger>
          <PopoverContent bg='white' p={2}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloremque non fugiat, voluptates nisi repudiandae autem quo, earum ullam rem quidem voluptatem laborum. 
          Ipsum incidunt aperiam tempora quia ullam iusto neque?</PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>

      <HStack>
        <Image boxSize='10%' borderRadius="full" src='https://i.pinimg.com/564x/ac/04/33/ac0433ef8ae9ab0f778cf10a11d1fb1a.jpg'/>
        <Popover w='70%'>
         <PopoverTrigger>
          <Button bgColor={"blue"} fontSize='2xl' color='white' w="60%">Maxillofacial</Button>
          </PopoverTrigger>
          <PopoverContent bg='white' p={2}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloremque non fugiat, voluptates nisi repudiandae autem quo, earum ullam rem quidem voluptatem laborum. 
          Ipsum incidunt aperiam tempora quia ullam iusto neque?</PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>

    </VStack>
  </HStack>

</VStack>
)
}

export default Service