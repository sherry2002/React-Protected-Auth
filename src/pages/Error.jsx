import { Box, Heading, Text, Button, VStack, IconButton } from "@chakra-ui/react";
import { FaExclamationTriangle } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      width="100%"
      bg="gray.50"
    >
      <VStack spacing={4}>
        <IconButton
        icon={<FaExclamationTriangle />} 
        aria-label="Warning"
        color="yellow.400"
        borderRadius='md'
        />
        <Heading as="h2" size="xl" color="red.600">
          Oops! Something went wrong.
        </Heading>
        <Text color={"gray.500"}>
          We couldn't find the page you're looking for. Please try again later or return to the home page.
        </Text>
        <Button
          colorScheme="red"
          variant="solid"
          onClick={() => navigate("/")}
          mt={6}
        >
          Go to Home
        </Button>
      </VStack>
    </Box>
  );
}

export default Error;
