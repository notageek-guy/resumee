import { Box, Text, Image } from "@chakra-ui/react";

export default function Custom404() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="./error.svg"
          alt="404"
          width="300px"
          height="300px"
          marginBottom="20px"
        />
        <Text fontSize="2xl">Page not found</Text>
      </Box>
    </Box>
  );
}
