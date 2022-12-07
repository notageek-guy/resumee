import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { ToggleProvider } from "../context/toggleProvider";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ToggleProvider>
      <SessionProvider session={session}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </ToggleProvider>
  );
}
