import { FaGithub } from "react-icons/fa";
import { Box, Button, Image } from "@chakra-ui/react";
import { useSession, signIn } from "next-auth/react";
import { Fragment } from "react";

export default function Login() {
  const { data: session } = useSession();
  const handleGithubLogin = (e) => {
    e.preventDefault();
    signIn("github", {
      callbackUrl: "http://localhost:3000/home",
      redirect: false,
    });
  };
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

          {!session && <Signin handleGithubLogin={handleGithubLogin} />}
        </Box>
      </Box>
    </Fragment>
  );
}

const Signin = ({ handleGithubLogin }) => {
  return (
    <Button leftIcon={<FaGithub />} onClick={handleGithubLogin}>
      Login with Github
    </Button>
  );
};
