import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.700" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Tech Forum</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Categories</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Contact</Link>
          <Link href="/register" color="white">Register</Link>
          <Link href="/create-post" color="white">Create Post</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8}>
        {/* Sidebar */}
        <Box w="25%" p={4} bg="gray.100" borderRadius="md">
          <Heading size="md" mb={4}>Categories</Heading>
          <VStack align="start" spacing={2}>
            <Link href="#">General Discussion</Link>
            <Link href="#">Programming</Link>
            <Link href="#">Hardware</Link>
            <Link href="#">Software</Link>
            <Link href="#">Networking</Link>
          </VStack>

          <Heading size="md" mt={8} mb={4}>Recent Posts</Heading>
          <VStack align="start" spacing={2}>
            <Link href="#">How to learn React</Link>
            <Link href="#">Best programming languages in 2023</Link>
            <Link href="#">Building a PC</Link>
            <Link href="#">Top 10 software tools</Link>
            <Link href="#">Understanding networks</Link>
          </VStack>
        </Box>

        {/* Discussion Threads */}
        <Box w="75%" p={4}>
          <Heading size="lg" mb={4}>Discussion Threads</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading size="md">How to learn React</Heading>
              <Text>by John Doe - 2 hours ago</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading size="md">Best programming languages in 2023</Heading>
              <Text>by Jane Smith - 5 hours ago</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading size="md">Building a PC</Heading>
              <Text>by Alex Johnson - 1 day ago</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading size="md">Top 10 software tools</Heading>
              <Text>by Emily Davis - 2 days ago</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading size="md">Understanding networks</Heading>
              <Text>by Michael Brown - 3 days ago</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" bg="blue.700" color="white" p={4} mt={8} justifyContent="space-between" alignItems="center">
        <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
        <HStack spacing={4}>
          <Link href="#"><FaFacebook /></Link>
          <Link href="#"><FaTwitter /></Link>
          <Link href="#"><FaLinkedin /></Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;