import { getSession, useSession } from "next-auth/react";
import { useEffect } from "react";
export default function Main() {
  const { data: session } = useSession();
  // if logged in redirect to home page
  useEffect(() => {
    if (session) window.location.replace("/home");
  }, [session]);
}

// if not logged in, redirect to login page
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
