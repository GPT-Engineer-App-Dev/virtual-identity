import { Box, Flex, Text, Image, VStack, Input, Button, Heading, useBreakpointValue } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  const heroImage = useBreakpointValue({
    base: 'public/images/hero-image-mobile.jpg',
    md: 'public/images/hero-image.jpg'
  });

  return (
    <Box>
      <Flex as="nav" p={4} justifyContent="space-between" bg="gray.100" align="center">
        <Text fontSize="xl" fontWeight="bold">MyPortfolio</Text>
        <Box>
          <Button variant="ghost" mr={2}>Home</Button>
          <Button variant="ghost" mr={2}>About</Button>
          <Button variant="ghost" mr={2}>Portfolio</Button>
          <Button variant="ghost">Contact</Button>
        </Box>
      </Flex>
      <Flex direction="column" align="center" justify="center" bgImage={heroImage} bgSize="cover" h="70vh">
        <Heading as="h1" size="2xl" color="white">Welcome to My World</Heading>
        <Text mt={4} color="white" fontSize="xl">Creative Developer | Designer | Innovator</Text>
      </Flex>
      <VStack spacing={8} p={8}>
        <Box>
          <Heading as="h2" size="lg">About Me</Heading>
          <Text mt={4}>I am a passionate software developer with a knack for creating beautiful and functional user interfaces. With a background in both design and development, I bring a unique perspective to every project I work on.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg">Portfolio</Heading>
          <Flex wrap="wrap" justify="center">
            <Box p={4} m={2} bg="gray.200" w="300px" h="200px">Project 1</Box>
            <Box p={4} m={2} bg="gray.200" w="300px" h="200px">Project 2</Box>
            <Box p={4} m={2} bg="gray.200" w="300px" h="200px">Project 3</Box>
          </Flex>
        </Box>
        <Box w="full">
          <Heading as="h2" size="lg">Contact Me</Heading>
          <Flex direction="column" mt={4}>
            <Input placeholder="Your Name" mb={2} />
            <Input placeholder="Your Email" mb={2} />
            <Input placeholder="Your Message" mb={2} />
            <Button leftIcon={<FaEnvelope />} colorScheme="blue">Send Message</Button>
          </Flex>
        </Box>
      </VStack>
      <Flex as="footer" p={4} justifyContent="center" bg="gray.100">
        <Text>© 2023 MyPortfolio. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;