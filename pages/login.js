import { FaGithub } from "react-icons/fa";
import { Box, Button, Image } from "@chakra-ui/react";
import { Fragment } from "react";
export default function Login() {
  return (
    <Fragment>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Image
            src="./front.svg"
            alt="front"
            width="300px"
            height="300px"
            marginBottom="20px"
          />

          <Button
            leftIcon={<FaGithub />}
            onClick={() => {
              window.location.href = "/home";
            }}
          >
            Login with Github
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}
