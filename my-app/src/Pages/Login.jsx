import {
    Modal,
    ModalOverlay,
    FormControl,
    FormLabel,
    Button,
    Input,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
   import axios from "axios";
  import { useToast } from "@chakra-ui/react";
  import {useState} from "react";


function Login({ onClose, isOpen,Login }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const handleFormSubmit = async (e)=>{
      e.preventDefault();
      try {
        const response = await axios.post("https://http://localhost:3000/users", {
          email,
          password,
        });
  
        if (response.status === 200) {
          showToast("Login Successful", "success");
          onClose(); // Close the modal
        } else {
          showToast("Login Failed", "error");
        }
      } catch (error) {
        showToast("Login Failed", "error");
      }
    };
  
    const showToast = (title, status) => {
      toast({
        title: title,
        status: status,
        duration: 3000,
        isClosable: true,
      });
    };
    return (
        <>
          {/* Modal Overlay should have data-cy="chakra-modal"  */}
          <Modal isOpen={isOpen} onClose={onClose} data-cy="chakra-modal">
            <ModalOverlay data-cy="chakra-modal"/>
            <ModalContent>
              <ModalHeader>Login</ModalHeader>
              <ModalCloseButton />
              <form onSubmit={handleFormSubmit}>
                <ModalBody>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Email" 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Password" 
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button type="submit" colorScheme="blue" >
                    Submit
                  </Button>
                  <Button ml={2} onClick={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>
        </>
      );  
}

export default Login