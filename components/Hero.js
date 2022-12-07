import { Box, Text, Image, Button, IconButton } from "@chakra-ui/react";
export default function Hero() {
  return (
    <Box
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      justifyContent="space-evenly"
      alignItems="center"
      textAlign={"center"}
      minH="100vh"
      gap="30px"
      padding={"50px 30px"}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        letterSpacing={"tighter"}
        lineHeight="1.5"
        gap="20px"
      >
        <Text
          as="p"
          fontSize={{ base: "1.6rem", sm: "1.8rem", md: "2.6rem" }}
          fontWeight="bold"
          textAlign="center"
          maxW="sm"
          margin="0 auto"
        >
          A
          <Text
            mx={4}
            as="span"
            bgClip="text"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          >
            Resume
          </Text>
          that stands out !
        </Text>
        <Text
          as="p"
          fontSize={{ base: "1.6rem", sm: "1.8rem", md: "2.6rem" }}
          fontWeight="bold"
          textAlign="center"
          maxW="500px"
          margin="0 auto"
        >
          Make your own resume
          <Text
            px={4}
            as="span"
            bgClip="text"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          >
            It's free
          </Text>
        </Text>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src="./resume.svg"
          alt="resume"
          width="400px"
          height="400px"
          marginBottom="20px"
        />
      </Box>
    </Box>
  );
}
